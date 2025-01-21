import * as readline from "readline-sync";

export function CheckMaxNum(minNum: number, maxNum: number): number
{
  do
  {
    while (Number.isNaN(maxNum) == true)
    {
        console.log("Please enter a number and try again.");

        maxNum = parseInt(readline.question("Enter the maximum the random number could be. "));
    }
    if (maxNum <= minNum)
    {
      console.log("Maximum Number must be greater than minimum number. Please try again.");

      maxNum = parseInt(readline.question("Enter the maximum the random number could be. "));
    }
  } while (Number.isNaN(maxNum) == true || maxNum <= minNum)

  return Math.ceil(maxNum);
}