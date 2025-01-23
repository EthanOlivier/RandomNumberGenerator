"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberBoundaries = RandomNumberBoundaries;
var readline = require("readline-sync");
var checkMinNum_1 = require("./checkMinNum");
var checkMaxNum_1 = require("./checkMaxNum");
function RandomNumberBoundaries() {
    var minNum = (0, checkMinNum_1.CheckMinNum)(parseInt(readline.question("Enter the minimum the random number could be. ")));
    var maxNum = (0, checkMaxNum_1.CheckMaxNum)(minNum, parseInt(readline.question("Enter the maximum the random number could be. ")));
    var randNum = { minNum: minNum, maxNum: maxNum };
    return randNum;
}
