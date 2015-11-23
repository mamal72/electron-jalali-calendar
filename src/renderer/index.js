import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jmoment from 'moment-jalaali';
import { Calendar } from 'react-persian-datepicker';
import { latinToPersian } from '../helpers.js';

class App extends Component {
  render() {
    jmoment.loadPersian();
    return (
      <div>
        <h5 className="today">
          امروز: {latinToPersian(jmoment().format('jD jMMMM jYYYY'))}
        </h5>
        <Calendar selectedDay={jmoment()} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
