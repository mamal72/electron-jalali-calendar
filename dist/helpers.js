'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.latinToPersian = latinToPersian;
// Thanks to @Mohebifar
function latinToPersian(string) {
  var result = string;

  var persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
  var latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];

  for (var index = 0; index < 10; index++) {
    result = result.replace(latinNumbers[index], persianNumbers[index]);
  }

  return result;
}
