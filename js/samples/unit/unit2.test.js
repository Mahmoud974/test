import { getAge } from "./unit2";

describe("getAge Unit Test Suites", () => {
  it("Vous", () => {
    expect(getAge(22)).toBe(`Vous aviez actuellement 22 ans`);
  });
});
