export interface FileObject {
	name: string;
	size?: number;
	stream: () => AsyncIterable<any>;
}
