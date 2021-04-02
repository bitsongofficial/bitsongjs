import { BtsgClient } from "./btsgclient";
import { btsg } from "./testutils.spec";

describe("BtsgClient", () => {
  describe("constructor", () => {
    it("can be constructed", () => {
      const client = new BtsgClient(btsg.endpoint);
      expect(client).toBeTruthy();
    });
  });
});
