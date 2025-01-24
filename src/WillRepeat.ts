import * as readline from "readline-sync";

export function WillRepeat(): boolean
{
    console.log("Would you like to go again?");
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