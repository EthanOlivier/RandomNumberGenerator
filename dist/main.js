"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WillUserGuess_1 = require("./WillUserGuess");
var StandardMessages_1 = require("./StandardMessages");
var GuessingGame_1 = require("./GuessingGame");
var OutputRandomNumber_1 = require("./OutputRandomNumber");
var GetRandomNumber_1 = require("./GetRandomNumber");
var WillRepeat_1 = require("./WillRepeat");
var gameHighScore = undefined;
do {
    if ((0, WillUserGuess_1.WillUserGuess)()) {
        StandardMessages_1.StandardMessages.GameIntroMessage();
        gameHighScore = (0, GuessingGame_1.GuessingGame)(gameHighScore, (0, GetRandomNumber_1.GetRandomNumber)());
    }
    else {
        StandardMessages_1.StandardMessages.NoGameIntroMessage();
        (0, OutputRandomNumber_1.OutputRandomNumber)((0, GetRandomNumber_1.GetRandomNumber)());
    }
} while ((0, WillRepeat_1.WillRepeat)());
