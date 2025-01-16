export function OutputRandomNumber(randNum: RandomNumber)
{
  // +1 is done to allow the maximum value to possibly be selected
  const randomNum: number = Math.floor(Math.random() * (randNum.maxNum - randNum.minNum + 1) + randNum.minNum);
  console.log(randomNum);
}