'use strict';

var _menubar = require('menubar');

var _menubar2 = _interopRequireDefault(_menubar);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _momentJalaali = require('moment-jalaali');

var _momentJalaali2 = _interopRequireDefault(_momentJalaali);

var _helpers = require('../helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_momentJalaali2.default.loadPersian();
var today = (0, _helpers.latinToPersian)((0, _momentJalaali2.default)().format('jD jMMMM jYYYY'));

(0, _menubar2.default)({
  dir: _path2.default.join(__dirname, '/../renderer'),
  icon: _path2.default.join(__dirname, '../renderer/img/icon.png'),
  tooltip: today,
  // 'always-on-top': true,
  width: 310,
  height: 350
});
