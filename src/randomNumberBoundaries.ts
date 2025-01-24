import * as readline from "readline-sync";

import { CheckMinNum } from "./CheckMinNum";
import { CheckMaxNum } from "./CheckMaxNum";
import { RandomNumber } from "./RandomNumber";


export function RandomNumberBoundaries(): RandomNumber
{
  const minNum: number = CheckMinNum(
    parseInt(readline.question("Enter the minimum the random number could be. "))
  );

  const maxNum: number = CheckMaxNum(minNum, 
    parseInt(readline.question("Enter the maximum the random number could be. "))
  );

  const randNum: RandomNumber = {minNum, maxNum};

  return randNum;
}