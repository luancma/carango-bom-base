import UserUtil from "util/UserUtil";

describe("UserUtil tests", () => {
  describe("getUserColumns", () => {
    it("should return array with length more than zero when call the method", () => {
      const actual = UserUtil.getUserColumns({});
      expect(actual.length).toBeGreaterThan(0);
    });

    it("should return array with columns name and actions (represented as empty column)", () => {
      const actual = UserUtil.getUserColumns({});
      const expected = [" ", "Nome"];
      const actualColumns = actual.map(column => column.headerName);
      expect(actualColumns).toEqual(expect.arrayContaining(expected));
    });
  });
});
