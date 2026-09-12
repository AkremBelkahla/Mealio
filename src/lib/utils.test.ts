import { describe, expect, it } from "vitest";
import { cn, formatPrice, slugify } from "./utils";

describe("cn", () => {
  it("joins truthy class names", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("filters out falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("returns an empty string when nothing is truthy", () => {
    expect(cn(false, undefined)).toBe("");
  });
});

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("Main Course")).toBe("main-course");
  });

  it("strips diacritics", () => {
    expect(slugify("Café Crème")).toBe("cafe-creme");
  });

  it("removes unsupported characters", () => {
    expect(slugify("Fish & Chips!")).toBe("fish-chips");
  });

  it("trims leading and trailing separators", () => {
    expect(slugify("--Dessert--")).toBe("dessert");
  });
});

describe("formatPrice", () => {
  it("formats whole dollars without decimals", () => {
    expect(formatPrice(12)).toBe("$12");
  });

  it("keeps cents", () => {
    expect(formatPrice(9.5)).toBe("$9.50");
  });
});
