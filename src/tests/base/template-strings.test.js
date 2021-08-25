import "@testing-library/jest-dom";

import { getSaludo } from "../../base/template-strings";

describe("Pruebas de template-string.js", () => {
  test("Test Method getSaludo needs return Hola + your name", () => {
    let name = "Alan";
    let res = getSaludo(name);
    expect(res).toBe("Hola " + name);
  });
  
  test('If function is empty Return Carlos', () => {
    let res = getSaludo();
    expect(res).toBe("Hola " + 'Carlos')
  })
  

});
