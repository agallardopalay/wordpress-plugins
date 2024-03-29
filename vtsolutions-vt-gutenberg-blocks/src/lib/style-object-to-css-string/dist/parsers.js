"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeToKebab = exports.camelToKebab = void 0;

var _createParser = _interopRequireDefault(require("./createParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

const camelToKebab = (0, _createParser["default"])(/[A-Z]/, function(match) { return "-".concat(match.toLowerCase()); });
exports.camelToKebab = camelToKebab;
const snakeToKebab = (0, _createParser["default"])(/_/, function() { return '-'}); // disabled to allow named exports while only one named export exists
// eslint-disable-next-line

exports.snakeToKebab = snakeToKebab;
