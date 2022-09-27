export interface PinataPinResponse {
	IpfsHash: string;
	PinSize: number;
	Timestamp: string;
}

export interface PinataPinOptions {
	pinataMetadata?: Record<string, string | number | null>;
	pinataOptions?: PinataOptions;
}

export interface PinataOptions {
	cidVersion?: 0 | 1;
	wrapWithDirectory?: boolean;
	customPinPolicy?: {
		regions: PinataPinPolicyItem[];
	};
}

export interface PinataPinPolicyItem {
	id: string;
	desiredReplicationCount: number;
}
