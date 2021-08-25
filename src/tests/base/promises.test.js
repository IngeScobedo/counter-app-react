import "@testing-library/jest-dom";
import { getHeroByIdAsync } from "../../base/promises";
import heroes from "../../data/heroes";

describe("Testing -Promises", () => {
  test("method return a hero asynchronously", (done) => {
    let id = 1;

    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });
});

describe("Testing error", () => {
  test("return error", (done) => {
    const id = 10;
    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
