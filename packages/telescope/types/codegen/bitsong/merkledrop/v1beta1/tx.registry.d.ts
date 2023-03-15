import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreate, MsgClaim } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: Uint8Array;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: MsgCreate;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
    };
    fromPartial: {
        create(value: MsgCreate): {
            typeUrl: string;
            value: MsgCreate;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
    };
};
