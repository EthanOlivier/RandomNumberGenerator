import * as readline from "readline-sync";

export function GetUserGuess(): number
{
    let userGuess: number = parseInt(readline.question(console.log("Enter your guess: ")));
    
    while (Number.isNaN(userGuess) == true)
    {
        console.log("Not a number. Please enter a number and try again.");

        userGuess = parseInt(readline.question("Enter your guess: "));
    }

    return userGuess;
}