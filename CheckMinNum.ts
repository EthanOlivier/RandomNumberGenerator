import readline from "readline-sync";

export function CheckMinNum(minNum: number): number
{
  while (Number.isNaN(minNum) == true)
  {
    console.log("Please enter a number and try again.");

    minNum = parseInt(readline.question("Enter the minimum the random number could be. "));
  }

  return Math.floor(minNum);
}