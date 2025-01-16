import { RandomNumberBoundaries } from "./RandomNumberBoundaries";
import { StandardMessages } from "./StandardMessages";
import {  OutputRandomNumber } from "./OutputRandomNumber";



StandardMessages.IntroMessage();

OutputRandomNumber(
  RandomNumberBoundaries()
);