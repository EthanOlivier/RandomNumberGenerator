import * as readline from "readline-sync";

import { WillUserGuess } from "./willUserGuess";
import { StandardMessages } from "./standardMessages";
import { GuessingGame } from "./guessingGame";
import { OutputRandomNumber } from "./outputRandomNumber";
import { GetRandomNumber } from "./getRandomNumber";

let gameHighScore: number | undefined = undefined;
while (true)
{
  if (WillUserGuess())
  {
    StandardMessages.GameIntroMessage();
  
    gameHighScore = GuessingGame(gameHighScore,
      GetRandomNumber()
    );
  }
  else
  {
    StandardMessages.NoGameIntroMessage();
  
    OutputRandomNumber(
      GetRandomNumber()
    );
  }
  console.log("Would you like to go again?");
  const response: string = readline.question("Enter 1 for 'Yes' or 2 for 'No' ");
  if (response != "1")
  {
    process.exit();
  }
}