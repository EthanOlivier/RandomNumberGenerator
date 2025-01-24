"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomNumber = GetRandomNumber;
var randomNumberBoundaries_1 = require("./randomNumberBoundaries");
function GetRandomNumber() {
    var randNum = (0, randomNumberBoundaries_1.RandomNumberBoundaries)();
    // +1 is done to allow the maximum value to possibly be selected
    return Math.floor(Math.random() * (randNum.maxNum - randNum.minNum + 1) + randNum.minNum);
}
