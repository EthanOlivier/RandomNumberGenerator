import { WillUserGuess } from "./willUserGuess";
import { StandardMessages } from "./standardMessages";
import { GuessingGame } from "./guessingGame";
import { OutputRandomNumber } from "./outputRandomNumber";
import { GetRandomNumber } from "./getRandomNumber";

if (WillUserGuess())
{
  StandardMessages.GameIntroMessage();

  GuessingGame(
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