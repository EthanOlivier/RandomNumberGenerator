import { WillUserGuess } from "./WillUserGuess";
import { StandardMessages } from "./StandardMessages";
import { GuessingGame } from "./GuessingGame";
import { OutputRandomNumber } from "./OutputRandomNumber";
import { GetRandomNumber } from "./GetRandomNumber";
import { WillRepeat } from "./WillRepeat";



let gameHighScore: number | undefined = undefined;
do
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
} while (WillRepeat())