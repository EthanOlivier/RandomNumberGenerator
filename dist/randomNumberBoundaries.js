"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberBoundaries = RandomNumberBoundaries;
var readline = require("readline-sync");
var CheckMinNum_1 = require("./CheckMinNum");
var CheckMaxNum_1 = require("./CheckMaxNum");
function RandomNumberBoundaries() {
    var minNum = (0, CheckMinNum_1.CheckMinNum)(parseInt(readline.question("Enter the minimum the random number could be. ")));
    var maxNum = (0, CheckMaxNum_1.CheckMaxNum)(minNum, parseInt(readline.question("Enter the maximum the random number could be. ")));
    var randNum = { minNum: minNum, maxNum: maxNum };
    return randNum;
}
