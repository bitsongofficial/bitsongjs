import { TrackMetadata } from "./track";
import { ShapeCheck } from "./utils";

export type ContentMetadata = ShapeCheck<
  | TrackMetadata
>