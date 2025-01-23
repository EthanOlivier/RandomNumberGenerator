"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var willUserGuess_1 = require("./willUserGuess");
var standardMessages_1 = require("./standardMessages");
var guessingGame_1 = require("./guessingGame");
var outputRandomNumber_1 = require("./outputRandomNumber");
var getRandomNumber_1 = require("./getRandomNumber");
if ((0, willUserGuess_1.WillUserGuess)()) {
    standardMessages_1.StandardMessages.GameIntroMessage();
    (0, guessingGame_1.GuessingGame)((0, getRandomNumber_1.GetRandomNumber)());
}
else {
    standardMessages_1.StandardMessages.NoGameIntroMessage();
    (0, outputRandomNumber_1.OutputRandomNumber)((0, getRandomNumber_1.GetRandomNumber)());
}
