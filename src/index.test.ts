import { commafy } from ".";

describe("commafy", () => {
  it("should add commas to a number", () => {
    expect(commafy("123456789")).toBe("123,456,789");
  });
});
