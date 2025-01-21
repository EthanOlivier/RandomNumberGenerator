"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputRandomNumber = OutputRandomNumber;
function OutputRandomNumber(randNum) {
    // +1 is done to allow the maximum value to possibly be selected
    var randomNum = Math.floor(Math.random() * (randNum.maxNum - randNum.minNum + 1) + randNum.minNum);
    console.log(randomNum);
}
