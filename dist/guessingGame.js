"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuessingGame = GuessingGame;
var readline = require("readline-sync");
function GuessingGame(highScore, randNum) {
    var isGuessCorrect = false;
    var attempts = 0;
    while (isGuessCorrect == false) {
        var userGuess = parseInt(readline.question(console.log("Enter your guess: ")));
        while (Number.isNaN(userGuess) == true) {
            console.log("Not a number. Please enter a number and try again.");
            userGuess = parseInt(readline.question("Enter your guess: "));
        }
        attempts++;
        if (userGuess == randNum) {
            isGuessCorrect = true;
            console.log("Correct! You guessed the correct number in " + attempts + " attempts!");
            if (highScore == undefined || attempts < highScore) {
                highScore = attempts;
                console.log("Congratulations! You now have a new High Score of " + highScore);
            }
            return highScore;
        }
        else {
            if (randNum < userGuess) {
                console.log("Incorrect. The correct number is less than your guess of ", userGuess);
            }
            else if (randNum > userGuess) {
                console.log("Incorrect. The correct number is greater than your guess of ", userGuess);
            }
            console.log("Please try again");
        }
    }
}
