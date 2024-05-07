const users = require("../data");
// You already have the methods imported
//import { default as expect } from "expect";
//import { getUser, getUserById } from "../users";
const {getUser, getUserById, getUsers} = require("../users.js");
// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

//const prog = require("../users.js");

/*test('Testing a correct id', () => {
    expect(lookUsers(3)).toBe("goosemotionless");
});*/
describe('getUser', () => {
    it('It should retrieve the correct username for a given ID', () => {
        const user = users[2];
        expect(getUser(3)).toEqual(user);
    });
    it('It should fail to get the user', () => {
        const user = users[3];
        expect(getUserById(2)).toEqual(user);
    });
});
