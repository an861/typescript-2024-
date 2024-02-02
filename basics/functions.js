"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twosum(num) {
    return num + 2;
}
twosum(5);
var getUppercase = function (value) {
    return value.toUpperCase();
};
getUppercase("ankita");
var signUpUser = function (name, email, isUser) {
    if (isUser === void 0) { isUser = true; }
    if (isUser == false) {
        return "No User";
    }
    else {
        return name;
    }
};
signUpUser("ankita", "ank@vbv.com");
