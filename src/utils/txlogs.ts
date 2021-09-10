import { isNonNullObject } from './commons';
import { Log, LogEvent, LogAttribute } from '../types';

export const parseAttribute = (input: unknown): LogAttribute => {
    if (!isNonNullObject(input)) throw new Error('Attribute must be a non-null object');
    const { key, value } = input as { key: unknown; value: unknown };
    if (typeof key !== 'string' || !key) throw new Error("Attribute's key must be a non-empty string");
    if (typeof value !== 'string' && typeof value !== 'undefined') {
        throw new Error("Attribute's value must be a string or unset");
    }

    return {
        key: key,
        value: value || '',
    };
};

export const parseEvent = (input: unknown): LogEvent => {
    if (!isNonNullObject(input)) throw new Error('Event must be a non-null object');
    const { type, attributes } = input as { type: unknown; attributes: unknown };
    if (typeof type !== 'string' || type === '') {
        throw new Error('Event type must be a non-empty string');
    }
    if (!Array.isArray(attributes)) throw new Error("Event's attributes must be an array");
    return {
        type: type,
        attributes: attributes.map(parseAttribute),
    };
};

export const parseLog = (input: unknown): Log => {
    if (!isNonNullObject(input)) throw new Error('Log must be a non-null object');
    const { msg_index, log, events } = input as { msg_index: unknown; log: unknown; events: unknown };
    if (typeof msg_index !== 'number') throw new Error("Log's msg_index must be a number");
    if (typeof log !== 'string') throw new Error("Log's log must be a string");
    if (!Array.isArray(events)) throw new Error("Log's events must be an array");
    return {
        msg_index: msg_index,
        log: log,
        events: events.map(parseEvent),
    };
};

export const parseLogs = (input: unknown): readonly Log[] => {
    if (!Array.isArray(input)) throw new Error('Logs must be an array');
    return input.map(parseLog);
};

/**
 * Parse raw transaction logs into human readable format
 *
 * @param input transaction log (for tx returned by the client you can use tx.result.log)
 */
export const parseRawLogs = (input = '[]'): readonly Log[] => {
    try {
        const logsToParse = JSON.parse(input).map(({ events }: { events: readonly unknown[] }, i: number) => ({
            msg_index: i,
            events,
            log: '',
        }));
        return parseLogs(logsToParse);
    } catch (e) {
        // Transactions that failed only contain a string error message in the logs
        return [
            {
                msg_index: 0,
                events: [],
                log: input,
            },
        ];
    }
};
