import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Reactstrap from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CalendarPage extends Component {

  state = {
    selectedDate: new Date()
  }

  setValue(dt) {
    this.setState({selectedDate: dt}, () => {
      window.location.pathname = `/time-table`;
      window.location.search = this.state.selectedDate;
    })
  }

  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <Calendar
          value={this.state.selectedDate}
          onChange={(date) => this.setValue(date)}
        />
      </div>
    );
  }
}

export default CalendarPage;

//Resource used https://www.npmjs.com/package/react-calendar
