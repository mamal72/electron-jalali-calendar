import menubar from 'menubar';
import path from 'path';
import jmoment from 'moment-jalaali';
import { latinToPersian } from '../helpers.js';

jmoment.loadPersian();
const today = latinToPersian(jmoment().format('jD jMMMM jYYYY'));

menubar({
  dir: path.join(__dirname, '/../renderer'),
  icon: path.join(__dirname, '../renderer/img/icon.png'),
  tooltip: today,
  // 'always-on-top': true,
  width: 310,
  height: 350
});
