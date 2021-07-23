import { formatBrands } from "../../util/brand.helper";

describe("brand helper test", () => {
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
