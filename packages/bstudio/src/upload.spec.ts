import stream from "stream";

import { Upload } from "./upload";

describe("Upload", () => {
  describe("#Upload", () => {
    it("should throw if no error handler is available", () => {
      const upload = new Upload(new stream.PassThrough(), {});
      expect(upload.start.bind(upload)).toThrowError("tus: neither an endpoint or an upload URL is provided");
    });
  });
});
