import { formatBrands } from "../../libs/brand";

describe("brand lib test", () => {
  it("should return formatted brands array", () => {
    const brands = [
      { nome: "marca1", id: 1 },
      { nome: "marca2", id: 2 },
    ];
    expect(formatBrands(brands)).toEqual([
      { name: "marca1", value: 1 },
      { name: "marca2", value: 2 },
    ]);
  });
});
