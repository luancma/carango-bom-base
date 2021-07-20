import VehicleUtil from "util/VehicleUtil";

describe("VehicleUtil tests", () => {
  describe("getVehicleColumns", () => {
    it("should return array with length more than zero when call the method", () => {
      const actual = VehicleUtil.getVehicleColumns({});

      expect(actual.length).toBeGreaterThan(0);
    });

    it("should return array with columns brand, price, model, year and actions (represented as empty column)", () => {
      const actual = VehicleUtil.getVehicleColumns({});
      const expected = [" ", "Marca", "Modelo", "Ano", "Valor"];

      const actualColumns = actual.map((column) => column.headerName);

      expect(actualColumns).toEqual(expect.arrayContaining(expected));
    });
  });
});
