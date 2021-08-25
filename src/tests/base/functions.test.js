import '@testing-library/jest-dom'
import { getActiveUser, getUser } from "../../base/functions";

describe("Testing functions", () => {
  test("It must return an object", () => {
    let userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    let user= getUser(userTest);
    expect(user).toEqual(userTest);
  });
  test("It must return an object with a name", () => {
      let userName = 'alan'
    let userTest = {
      uid: "ABC567",
      username: userName,
    };
    let user= getActiveUser(userName);
    expect(user).toEqual(userTest);
  });
  

});
