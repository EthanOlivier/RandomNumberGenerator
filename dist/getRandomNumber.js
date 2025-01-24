"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRandomNumber = GetRandomNumber;
var RandomNumberBoundaries_1 = require("./RandomNumberBoundaries");
function GetRandomNumber() {
    var randNum = (0, RandomNumberBoundaries_1.RandomNumberBoundaries)();
    // +1 is done to allow the maximum value to possibly be selected
    return Math.floor(Math.random() * (randNum.maxNum - randNum.minNum + 1) + randNum.minNum);
}
