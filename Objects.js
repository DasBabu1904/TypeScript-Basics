"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createObj(nameArg, priceArg) {
    return { name: nameArg, price: priceArg };
}
function createObj2(user) {
    user.email = user.email + "changed";
    return user;
}
createObj2({ name: "", email: "", isActive: true });
var userObj = {
    _id: "1234",
    name: "sourav",
    email: "das@das.com",
    isActive: true, //no credit card info is given as it was optional so the object creation will work good!
};
var userObj3 = {
    _id: "456",
    name: "das",
    email: "d@d.com",
    isActive: true,
    creditCard: 123789, // credit card info is given
};
console.log(userObj._id);
userObj.name = "das";
