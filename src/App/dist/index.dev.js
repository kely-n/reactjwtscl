"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = require("./App");

Object.keys(_App).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _App[key];
    }
  });
});