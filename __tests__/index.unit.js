import { runTask, task, sumPositiveElementsOfArray } from "../index";

describe("Index testing", () => {
  it("should be return 7 from [1, 2, 3, 4, 5, 6, 8]", () => {
    expect(runTask([1, 2, 3, 4, 5, 6, 8])).toBe(7);
  });

  it("should be return 3 from [5, -1, 2, 1, 4]", () => {
    expect(runTask([5, -1, 2, 1, 4])).toBe(3);
  });

  it("should be return 3 from [1, 2, 4, 5]", () => {
    expect(runTask([1, 2, 4, 5])).toBe(3);
  });

  it("should be return 4 from [1, 2, 4, 5]", () => {
    expect(runTask([1, 2, 4, 5])).toBe(3);
  });

  describe("Sub-module: summ array elements", () => {
    it("should be 15 on [1, 2, 3, 4, 5]", () => {
      expect(sumPositiveElementsOfArray([1, 2, 3, 4, 5])).toBe(15);
    });

    it("should be 15 on [1, 2, 3, 4, 5]", () => {
      expect(sumPositiveElementsOfArray([-1, -3, 5, -3])).toBe(5);
    });

    it("should be 15 on [1, 2, 3, 4, 5]", () => {
      expect(sumPositiveElementsOfArray([-1, -3, -78, -3])).toBe(0);
    });
  });
});
