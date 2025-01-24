"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WillRepeat = WillRepeat;
var readline = require("readline-sync");
function WillRepeat() {
    console.log("Would you like to go again?");
    var response = readline.question("Enter 1 for 'Yes' or 2 for 'No' ");
    if (response == "1") {
        return true;
    }
    else {
        return false;
    }
}
