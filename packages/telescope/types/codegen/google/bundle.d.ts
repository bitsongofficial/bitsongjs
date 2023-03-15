import * as _50 from "./protobuf/any";
import * as _51 from "./protobuf/descriptor";
import * as _52 from "./protobuf/timestamp";
import * as _53 from "./protobuf/duration";
export declare namespace google {
    const protobuf: {
        Duration: {
            encode(message: _53.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Duration;
            fromPartial(object: any): _53.Duration;
        };
        Timestamp: {
            encode(message: _52.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Timestamp;
            fromPartial(object: any): _52.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _51.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _51.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _51.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _51.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _51.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _51.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _51.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _51.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _51.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _51.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _51.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _51.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _51.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _51.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _51.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _51.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _51.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _51.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _51.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _51.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _51.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _51.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _51.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _51.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _51.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FileDescriptorSet;
            fromPartial(object: any): _51.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _51.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FileDescriptorProto;
            fromPartial(object: any): _51.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _51.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DescriptorProto;
            fromPartial(object: any): _51.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _51.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _51.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _51.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.DescriptorProto_ReservedRange;
            fromPartial(object: any): _51.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _51.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ExtensionRangeOptions;
            fromPartial(object: any): _51.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _51.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FieldDescriptorProto;
            fromPartial(object: any): _51.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _51.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.OneofDescriptorProto;
            fromPartial(object: any): _51.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _51.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumDescriptorProto;
            fromPartial(object: any): _51.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _51.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _51.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _51.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumValueDescriptorProto;
            fromPartial(object: any): _51.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _51.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ServiceDescriptorProto;
            fromPartial(object: any): _51.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _51.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MethodDescriptorProto;
            fromPartial(object: any): _51.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _51.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FileOptions;
            fromPartial(object: any): _51.FileOptions;
        };
        MessageOptions: {
            encode(message: _51.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MessageOptions;
            fromPartial(object: any): _51.MessageOptions;
        };
        FieldOptions: {
            encode(message: _51.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.FieldOptions;
            fromPartial(object: any): _51.FieldOptions;
        };
        OneofOptions: {
            encode(message: _51.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.OneofOptions;
            fromPartial(object: any): _51.OneofOptions;
        };
        EnumOptions: {
            encode(message: _51.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumOptions;
            fromPartial(object: any): _51.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _51.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.EnumValueOptions;
            fromPartial(object: any): _51.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _51.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ServiceOptions;
            fromPartial(object: any): _51.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _51.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MethodOptions;
            fromPartial(object: any): _51.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _51.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UninterpretedOption;
            fromPartial(object: any): _51.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _51.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UninterpretedOption_NamePart;
            fromPartial(object: any): _51.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _51.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SourceCodeInfo;
            fromPartial(object: any): _51.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _51.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SourceCodeInfo_Location;
            fromPartial(object: any): _51.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _51.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GeneratedCodeInfo;
            fromPartial(object: any): _51.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _51.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _51.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _50.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Any;
            fromPartial(object: any): _50.Any;
        };
    };
}
