import { GeneratedType } from '@cosmjs/proto-signing';
import { messageTypeRegistry } from './typeRegistry';

const bitsongRegistry = (): Array<[string, GeneratedType]> => {
	const registry: Array<[string, GeneratedType]> = [];

	messageTypeRegistry.forEach((value, key) => {
		registry.push([`/${key}`, value]);
	});

	return registry;
}

export { bitsongRegistry };
