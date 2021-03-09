"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = void 0;

var _history = require("history");

//The history is a custom history object used by the React Router,
// the reason I used a custom history object instead of the 
//built into React Router is to enable redirecting users from outside React components, 
//for example from the user actions after successful login or registration
var history = (0, _history.createBrowserHistory)();
exports.history = history;