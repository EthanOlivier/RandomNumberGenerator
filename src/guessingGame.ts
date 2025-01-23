import * as readline from "readline-sync";



export function GuessingGame(highScore: number | undefined, randNum: number): number | undefined
{
    let isGuessCorrect: boolean = false;
    let attempts: number = 0;

    while (isGuessCorrect == false)
    {
        let userGuess: number = parseInt(readline.question(console.log("Enter your guess: ")));
        while (Number.isNaN(userGuess) == true)
        {
            console.log("Not a number. Please enter a number and try again.");
    
            userGuess = parseInt(readline.question("Enter your guess: "));
        }

        attempts++;

        if (userGuess == randNum)
        {
            isGuessCorrect = true;
            console.log("Correct! You guessed the correct number in " + attempts + " attempts!");
            if (highScore == undefined || attempts < highScore)
            {
                highScore = attempts;
                console.log("Congratulations! You now have a new High Score of " + highScore);
            }
            return highScore;
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