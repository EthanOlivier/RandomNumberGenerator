import * as readline from "readline-sync";

export function WillUserGuess(): boolean
{
    console.log("Would you like to guess the number?");
    const response: string = readline.question("Enter 1 for 'Yes' or 2 for 'No' ");

    if (response == "1")
    {
        return true;
    }
    else
    {
        return false;
    }
}