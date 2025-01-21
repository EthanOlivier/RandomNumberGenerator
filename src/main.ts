import { RandomNumberBoundaries } from "./randomNumberBoundaries";
import { StandardMessages } from "./standardMessages";
import { OutputRandomNumber } from "./outputRandomNumber";


StandardMessages.IntroMessage();

OutputRandomNumber(
  RandomNumberBoundaries()
);