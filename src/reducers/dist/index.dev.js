"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authentication = require("./authentication.reducer");

var _alert = require("./alert.reducer");

var rootReducer = (0, _redux.combineReducers)({
  authentication: _authentication.authentication,
  alert: _alert.alert
});
var _default = rootReducer;
exports["default"] = _default;