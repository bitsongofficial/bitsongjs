import { GeneratedType } from '@cosmjs/proto-signing';
import { messageTypeRegistry } from './typeRegistry';

const bitsongRegistry: Array<[string, GeneratedType]> = [];

messageTypeRegistry.forEach((value, key) => {
	bitsongRegistry.push([`/${key}`, value]);
});

export { bitsongRegistry };
