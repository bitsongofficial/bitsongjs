import * as _56 from "./protobuf/any";
import * as _57 from "./protobuf/descriptor";
import * as _58 from "./protobuf/timestamp";
import * as _59 from "./protobuf/duration";
export declare namespace google {
    const protobuf: {
        Duration: {
            encode(message: _59.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Duration;
            fromPartial(object: any): _59.Duration;
        };
        Timestamp: {
            encode(message: _58.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Timestamp;
            fromPartial(object: any): _58.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _57.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _57.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _57.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _57.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _57.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _57.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _57.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _57.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _57.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _57.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _57.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _57.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _57.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _57.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _57.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _57.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _57.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _57.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _57.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _57.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _57.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _57.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _57.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _57.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _57.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FileDescriptorSet;
            fromPartial(object: any): _57.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _57.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FileDescriptorProto;
            fromPartial(object: any): _57.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _57.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DescriptorProto;
            fromPartial(object: any): _57.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _57.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _57.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _57.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DescriptorProto_ReservedRange;
            fromPartial(object: any): _57.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _57.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ExtensionRangeOptions;
            fromPartial(object: any): _57.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _57.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FieldDescriptorProto;
            fromPartial(object: any): _57.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _57.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.OneofDescriptorProto;
            fromPartial(object: any): _57.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _57.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.EnumDescriptorProto;
            fromPartial(object: any): _57.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _57.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _57.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _57.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.EnumValueDescriptorProto;
            fromPartial(object: any): _57.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _57.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ServiceDescriptorProto;
            fromPartial(object: any): _57.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _57.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MethodDescriptorProto;
            fromPartial(object: any): _57.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _57.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FileOptions;
            fromPartial(object: any): _57.FileOptions;
        };
        MessageOptions: {
            encode(message: _57.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MessageOptions;
            fromPartial(object: any): _57.MessageOptions;
        };
        FieldOptions: {
            encode(message: _57.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.FieldOptions;
            fromPartial(object: any): _57.FieldOptions;
        };
        OneofOptions: {
            encode(message: _57.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.OneofOptions;
            fromPartial(object: any): _57.OneofOptions;
        };
        EnumOptions: {
            encode(message: _57.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.EnumOptions;
            fromPartial(object: any): _57.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _57.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.EnumValueOptions;
            fromPartial(object: any): _57.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _57.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ServiceOptions;
            fromPartial(object: any): _57.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _57.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MethodOptions;
            fromPartial(object: any): _57.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _57.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.UninterpretedOption;
            fromPartial(object: any): _57.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _57.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.UninterpretedOption_NamePart;
            fromPartial(object: any): _57.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _57.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SourceCodeInfo;
            fromPartial(object: any): _57.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _57.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SourceCodeInfo_Location;
            fromPartial(object: any): _57.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _57.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GeneratedCodeInfo;
            fromPartial(object: any): _57.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _57.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _57.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _56.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Any;
            fromPartial(object: any): _56.Any;
        };
    };
}
