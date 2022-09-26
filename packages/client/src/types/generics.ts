import { QueryRpcClientExtension } from './rpc-client';

export type InstanceTypeMap<T extends object> = {
  [P in keyof T]: (T[P] extends new (...args: any) => any
    ? InstanceType<T[P]>
    : T[P]) &
    QueryRpcClientExtension;
};
