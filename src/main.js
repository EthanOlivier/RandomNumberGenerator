"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumberBoundaries_js_1 = require("./randomNumberBoundaries.js");
var standardMessages_js_1 = require("./standardMessages.js");
var outputRandomNumber_js_1 = require("./outputRandomNumber.js");
standardMessages_js_1.StandardMessages.IntroMessage();
(0, outputRandomNumber_js_1.OutputRandomNumber)((0, randomNumberBoundaries_js_1.RandomNumberBoundaries)());
