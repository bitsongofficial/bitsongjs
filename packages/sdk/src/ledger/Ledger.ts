import { makeBitsongPath } from "../utils";
import { HdPath, Secp256k1Signature } from "@cosmjs/crypto";
import { fromUtf8 } from "@cosmjs/encoding";
import { assert } from "@cosmjs/utils";
import Transport from "@ledgerhq/hw-transport";
import BitsongApp, {
  AppInfoResponse,
  PublicKeyResponse,
  SignResponse,
  VersionResponse,
} from "ledger-bitsong-js";
import semver from "semver";
import { Constants } from "../";

/* eslint-disable @typescript-eslint/naming-convention */
export interface LedgerAppErrorResponse {
  readonly error_message?: string;
  readonly device_locked?: boolean;
}
/* eslint-enable */

function unharden(hdPath: HdPath): number[] {
  return hdPath.map((n) => (n.isHardened() ? n.toNumber() - 2 ** 31 : n.toNumber()));
}

const bitsongHdPath = makeBitsongPath(0);
//const requiredBitsongAppVersion = "1.5.3";
const requiredBitsongAppVersion = "2.18.0";

export interface LedgerOptions {
  readonly hdPaths?: readonly HdPath[];
  readonly prefix?: string;
  readonly testModeAllowed?: boolean;
}

export class Ledger {
  private readonly testModeAllowed: boolean;
  private readonly hdPaths: readonly HdPath[];
  private readonly prefix: string;
  private readonly app: BitsongApp;

  public constructor(transport: Transport, options: LedgerOptions = {}) {
    const defaultOptions = {
      hdPaths: [bitsongHdPath],
      prefix: Constants.Bech32PrefixAccAddr,
      testModeAllowed: false,
    };

    this.testModeAllowed = options.testModeAllowed ?? defaultOptions.testModeAllowed;
    this.hdPaths = options.hdPaths ?? defaultOptions.hdPaths;
    this.prefix = options.prefix ?? defaultOptions.prefix;
    this.app = new BitsongApp(transport);
  }

  public async getBitsongAppVersion(): Promise<string> {
    await this.verifyBitsongAppIsOpen();
    assert(this.app, "BitSong Ledger App is not connected");

    const response = await this.app.getVersion();
    this.handleLedgerErrors(response);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { major, minor, patch, test_mode: testMode } = response as VersionResponse;
    this.verifyAppMode(testMode);
    return `${major}.${minor}.${patch}`;
  }

  public async getPubkey(hdPath?: HdPath): Promise<Uint8Array> {
    await this.verifyDeviceIsReady();
    assert(this.app, "BitSong Ledger App is not connected");

    const hdPathToUse = hdPath || this.hdPaths[0];
    // ledger-bitsong-js hardens the first three indices
    const response = await this.app.publicKey(unharden(hdPathToUse));
    this.handleLedgerErrors(response);
    return Uint8Array.from((response as PublicKeyResponse).compressed_pk);
  }

  public async getPubkeys(): Promise<readonly Uint8Array[]> {
    return this.hdPaths.reduce(
      (promise: Promise<readonly Uint8Array[]>, hdPath) =>
        promise.then(async (pubkeys) => [...pubkeys, await this.getPubkey(hdPath)]),
      Promise.resolve([]),
    );
  }

  public async getBitsongAddress(pubkey?: Uint8Array): Promise<string> {
    const pubkeyToUse = pubkey || (await this.getPubkey());
    return BitsongApp.getBech32FromPK(this.prefix, Buffer.from(pubkeyToUse));
  }

  public async sign(message: Uint8Array, hdPath?: HdPath): Promise<Uint8Array> {
    await this.verifyDeviceIsReady();
    assert(this.app, "Bitsong Ledger App is not connected");

    const hdPathToUse = hdPath || this.hdPaths[0];
    // ledger-bitsong-js hardens the first three indices
    const response = await this.app.sign(unharden(hdPathToUse), fromUtf8(message));
    this.handleLedgerErrors(response, "Transaction signing request was rejected by the user");
    return Secp256k1Signature.fromDer((response as SignResponse).signature).toFixedLength();
  }

  private verifyAppMode(testMode: boolean): void {
    if (testMode && !this.testModeAllowed) {
      throw new Error(`DANGER: The BitSong Ledger app is in test mode and should not be used on mainnet!`);
    }
  }

  private async getOpenAppName(): Promise<string> {
    assert(this.app, "BitSong Ledger App is not connected");

    const response = await this.app.appInfo();
    this.handleLedgerErrors(response);
    return (response as AppInfoResponse).appName;
  }

  private async verifyAppVersion(): Promise<void> {
    const version = await this.getBitsongAppVersion();
    if (!semver.gte(version, requiredBitsongAppVersion)) {
      throw new Error("Outdated version: Please update BitSong Ledger App to the latest version.");
    }
  }

  private async verifyBitsongAppIsOpen(): Promise<void> {
    const appName = await this.getOpenAppName();

    if (appName.toLowerCase() === `dashboard`) {
      throw new Error(`Please open the BitSong Ledger app on your Ledger device.`);
    }
    if (appName.toLowerCase() !== `bitsong`) {
      throw new Error(`Please close ${appName} and open the BitSong Ledger app on your Ledger device.`);
    }
  }

  private async verifyDeviceIsReady(): Promise<void> {
    await this.verifyAppVersion();
    await this.verifyBitsongAppIsOpen();
  }

  private handleLedgerErrors(
    /* eslint-disable @typescript-eslint/naming-convention */
    {
      error_message: errorMessage = "No errors",
      device_locked: deviceLocked = false,
    }: LedgerAppErrorResponse,
    /* eslint-enable */
    rejectionMessage = "Request was rejected by the user",
  ): void {
    if (deviceLocked) {
      throw new Error("Ledger’s screensaver mode is on");
    }
    switch (errorMessage) {
      case "U2F: Timeout":
        throw new Error("Connection timed out. Please try again.");
      case "Bitsong app does not seem to be open":
        throw new Error("BitSong app is not open");
      case "Command not allowed":
        throw new Error("Transaction rejected");
      case "Transaction rejected":
        throw new Error(rejectionMessage);
      case "Unknown Status Code: 26628":
        throw new Error("Ledger’s screensaver mode is on");
      case "Instruction not supported":
        throw new Error(
          `Your BitSong Ledger App is not up to date. Please update to version ${requiredBitsongAppVersion}.`,
        );
      case "No errors":
        break;
      default:
        throw new Error(`Ledger Native Error: ${errorMessage}`);
    }
  }
}
