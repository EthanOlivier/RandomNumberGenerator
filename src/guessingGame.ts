import * as readline from "readline-sync";

import { RandomNumber } from "./randomNumber";



export function GuessingGame(randNum: number): void
{
    let isGuessCorrect: boolean = false;
    let attempts: number = 0;

    while (isGuessCorrect == false)
    {
        const userGuess: number = parseInt(readline.question(console.log("Enter your guess: ")));
        attempts++;
        if (userGuess == randNum)
        {
            isGuessCorrect = true;
            console.log("Correct! You guessed the correct number in " + attempts + " attempts!");
        }
        else
        {
            if (randNum < userGuess)
            {
                console.log("Incorrect. The correct number is less than your guess of ", userGuess);
            }
            else if (randNum > userGuess)
            {
                console.log("Incorrect. The correct number is greater than your guess of ", userGuess);
            }
            console.log("Please try again");
        }
    }
}