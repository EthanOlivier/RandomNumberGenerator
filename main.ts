import readline from "readline-sync";


type RandomNumber = {
  minNum: number,
  maxNum: number
}

class StandardMessages
{
  static IntroMessage(): void
  {
    console.log("Random Number Generator");
  }
}

function RandomNumberBoundaries(): RandomNumber
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

function CheckMinNum(minNum: number): number
{
  while (Number.isNaN(minNum) == true)
  {
    console.log("Please enter a number and try again.");

    minNum = parseInt(readline.question("Enter the minimum the random number could be. "));
  }

  return Math.floor(minNum);
}


function CheckMaxNum(minNum: number, maxNum: number): number
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

function OutputRandomNumber(randNum: RandomNumber)
{
  // +1 is done to allow the maximum value to possibly be selected
  const randomNum: number = Math.floor(Math.random() * (randNum.maxNum - randNum.minNum + 1) + randNum.minNum);
  console.log(randomNum);
}

StandardMessages.IntroMessage();

OutputRandomNumber(
  RandomNumberBoundaries()
);