"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WillUserGuess = WillUserGuess;
var readline = require("readline-sync");
function WillUserGuess() {
    console.log("Would you like to guess the number?");
    var response = readline.question("Enter 1 for 'Yes' or 2 for 'No' ");
    if (response == "1") {
        return true;
    }
    else {
        return false;
    }
}
