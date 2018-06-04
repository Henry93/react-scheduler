import React, { Component } from 'react';
import Calendar from 'react-calendar';
import TimezonePicker from 'react-timezone';
import Moment from 'react-moment';
import 'moment-timezone';
import { Button, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PickDate.css';

class PickDate extends Component {

  state = {
    selectedDate: new Date(),
    title: ''
  }

  // setValue(dt) {
  //   this.setState({selectedDate: dt}, () => {
  //     window.location.pathname = `/time-table?dt=${this.state.selectedDate}`;
  //     window.location.search = this.state.selectedDate;
  //   })
  // }

  // onSelect(event) {
  //   this.setState({
  //     selectedDate: event
  //   }, () => {
  //     this.onSelect.bind(this)
  //   })
  // }

  updateTitle(nt) {
    this.setState({
      title: nt.target.value
    })
  }

  render() {

    return (
      <div className="PickDate">
        <h4 className="header">Please choose the date for your meeting with Client</h4>
        <br /><br /><br /><br />
        <Calendar
          value={this.state.selectedDate}
          onClickDay={() => window.location.href=`/picktime?date=${this.state.selectedDate}`}
          minDate={new Date()}
        />
        <br />
          <Button onClick={() => window.location.href='/profilepage'} type="submit" color="primary">Back</Button>
      </div>
    );
  }
}

export default PickDate;

//Resource used https://www.npmjs.com/package/react-calendar
