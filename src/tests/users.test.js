const users = require("../data");
const {getUser, getUserById, getUsers} = require("../users.js");

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
