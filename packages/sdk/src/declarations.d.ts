/**
 * Add untyped module declaration
 * Only used by the KeyStore feature therefore not properly declared as it is a minor, almost deprecated feature.
 */
 declare module 'crypto-browserify';

 /**
  * Add ledger missing cosmos app types declarations
  */
 declare module '@ledgerhq/hw-app-cosmos' {
     export default class Cosmos {
         transport: import('@ledgerhq/hw-transport').default<*>;

         constructor(transport: import('@ledgerhq/hw-transport').default<*>, scrambleKey: string);
         getAppConfiguration(): Promise<{
             test_mode: boolean;
             version: string;
             device_locked: boolean;
             major: string;
         }>;

         serializePath(path: Buffer): Buffer;

         serializeHRP(hrp: string): Buffer;

         /**
          * get Cosmos address for a given BIP 32 path.
          * @param path a path in BIP 32 format
          * @param hrp usually cosmos
          * @option boolDisplay optionally enable or not the display
          * @return an object with a publicKey, address and (optionally) chainCode
          * @example
          * cosmos.getAddress("44'/60'/0'/0/0", "cosmos").then(o => o.address)
          */
         getAddress(path: string, hrp: string, boolDisplay?: boolean): Promise<{ publicKey: string; address: string }>;

         foreach<T, A>(arr: T[], callback: (arg0: T, arg1: number) => Promise<A>): Promise<A[]>;

         sign(path: string, message: string): Promise<{ signature: null | Buffer; return_code: number }>;
     }
 }
