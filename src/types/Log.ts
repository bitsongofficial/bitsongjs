export interface LogAttribute {
    readonly key: string;
    readonly value: string;
}

export interface LogEvent {
    readonly type: string;
    readonly attributes: readonly LogAttribute[];
}

export interface Log {
    readonly msg_index: number;
    readonly log: string;
    readonly events: readonly LogEvent[];
}
