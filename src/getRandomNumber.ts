import { RandomNumber } from "./randomNumber";
import { RandomNumberBoundaries } from "./randomNumberBoundaries";

export function GetRandomNumber(): number
{
  const randNum: RandomNumber = RandomNumberBoundaries();

  // +1 is done to allow the maximum value to possibly be selected
  return Math.floor(Math.random() * (randNum.maxNum - randNum.minNum + 1) + randNum.minNum);
}