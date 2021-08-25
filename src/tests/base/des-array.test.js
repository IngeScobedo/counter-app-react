import { returnArray } from "../../base/dess-array";

describe("Testing - Array Destructuring ", () => {
  test("Its must return an array with string and number", () => {
    let [letters, numbers] = returnArray();

    expect(typeof letters).toEqual("string");
    expect(typeof numbers).toEqual("number");
  });
});
