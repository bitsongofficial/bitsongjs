import type { StdFee, BitsongSigner } from "./types";

export function calculateFee(gasLimit: number, gasPriceStr: string): StdFee {
  const match = gasPriceStr.match(/^([0-9.]+)(.+)$/);
  if (!match) {
    throw new Error(
      `Invalid gas price format "${gasPriceStr}". Expected format: "0.025ubtsg"`,
    );
  }
  const [, amountStr, denom] = match;
  const gasPrice = Number.parseFloat(amountStr!);
  const feeAmount = Math.ceil(gasLimit * gasPrice);

  return {
    amount: [{ denom: denom!, amount: String(feeAmount) }],
    gas: String(gasLimit),
  };
}

export async function estimateGas(
  client: BitsongSigner,
  signerAddress: string,
  messages: readonly { typeUrl: string; value: unknown }[],
  multiplier = 1.4,
): Promise<number> {
  if (typeof client.simulateByTxBody === "function") {
    const txBody = {
      messages: messages.map((m) => ({
        typeUrl: m.typeUrl,
        value:
          m.value instanceof Uint8Array
            ? m.value
            : (m.value as { encode?: (v: unknown) => { finish(): Uint8Array } })
                ?.encode
              ? (
                  m.value as { encode: (v: unknown) => { finish(): Uint8Array } }
                ).encode(m.value).finish()
              : new Uint8Array(),
      })),
      memo: "",
      timeoutHeight: BigInt(0),
      unordered: false,
      extensionOptions: [],
      nonCriticalExtensionOptions: [],
    };
    const result = await client.simulateByTxBody(txBody, []);
    const gasUsed = Number(result.gasInfo?.gasUsed ?? 0);
    return Math.ceil(gasUsed * multiplier);
  }

  throw new Error(
    "Gas estimation requires a signing client with simulateByTxBody support",
  );
}

export async function estimateFee(
  client: BitsongSigner,
  signerAddress: string,
  messages: readonly { typeUrl: string; value: unknown }[],
  gasPriceStr: string,
  multiplier = 1.4,
): Promise<StdFee> {
  const gas = await estimateGas(client, signerAddress, messages, multiplier);
  return calculateFee(gas, gasPriceStr);
}
