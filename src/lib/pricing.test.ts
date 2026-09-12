import { describe, expect, it } from "vitest";
import { priceForDish } from "./pricing";

describe("priceForDish", () => {
  it("is deterministic for the same id", () => {
    expect(priceForDish("52772")).toBe(priceForDish("52772"));
  });

  it("stays within the menu price range", () => {
    for (const id of ["52772", "52874", "53049", "abc", "0"]) {
      const price = priceForDish(id);
      expect(price).toBeGreaterThanOrEqual(9);
      expect(price).toBeLessThan(43);
    }
  });

  it("handles non-numeric ids via the hash fallback", () => {
    expect(() => priceForDish("not-a-number")).not.toThrow();
    expect(Number.isInteger(priceForDish("not-a-number"))).toBe(true);
  });
});
