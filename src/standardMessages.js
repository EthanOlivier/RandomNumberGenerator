"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardMessages = void 0;
var StandardMessages = /** @class */ (function () {
    function StandardMessages() {
    }
    StandardMessages.NoGameIntroMessage = function () {
        console.log("Random Number Generator");
    };
    StandardMessages.GameIntroMessage = function () {
        console.log("Random Number Guessing Game");
    };
    return StandardMessages;
}());
exports.StandardMessages = StandardMessages;
