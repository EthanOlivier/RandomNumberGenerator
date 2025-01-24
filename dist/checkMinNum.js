"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckMinNum = CheckMinNum;
var readline = require("readline-sync");
function CheckMinNum(minNum) {
    while (Number.isNaN(minNum) == true) {
        console.log("Please enter a number and try again.");
        minNum = parseInt(readline.question("Enter the minimum the random number could be. "));
    }
    return Math.floor(minNum);
}
