import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/TimeTable.css';

class TimeTable extends Component {

  render() {
    return (
      <div className="TimeTable">
      <h4><strong>Friday</strong></h4>
      <h6>May 18, 2018</h6><br />
      <p>Times are in Pacific Time - US & Canada</p>

      <hr /><br />

      <h5 className="selectTime">Select a Time</h5><br />

      <Button color="outline-primary" block>7:00 am</Button>
      <Button color="outline-primary" block>7:30 am</Button>
      <Button color="outline-primary" block>8:00 am</Button>
      <Button color="outline-primary" block>8:30 am</Button>
      <Button color="outline-primary" block>9:00 am</Button>
      <Button color="outline-primary" block>9:30 am</Button>
      <Button color="outline-primary" block>10:00 am</Button>
      <Button color="outline-primary" block>10:30 am</Button>
      <Button color="outline-primary" block>11:00 am</Button>
      <Button color="outline-primary" block>11:30 am</Button>

      <br /><div className="line"><span>Noon</span></div><br />

      <Button color="outline-primary" block>12:00 pm</Button>
      <Button color="outline-primary" block>12:30 pm</Button>
      <Button color="outline-primary" block>1:00 pm</Button>
      <Button color="outline-primary" block>1:30 pm</Button>
      <Button color="outline-primary" block>2:00 pm</Button>
      <Button color="outline-primary" block>2:30 pm</Button>
      <Button color="outline-primary" block>3:00 pm</Button>
      <Button color="outline-primary" block>3:30 pm</Button>
      <Button color="outline-primary" block>4:00 pm</Button>
      <Button color="outline-primary" block>4:30 pm</Button>
      <Button color="outline-primary" block>5:00 pm</Button>
      <Button color="outline-primary" block>5:30 pm</Button>
      <Button color="outline-primary" block>6:00 pm</Button>
      <Button color="outline-primary" block>6:30 pm</Button>
      <Button color="outline-primary" block>7:00 pm</Button>
      <Button color="outline-primary" block>7:30 pm</Button>
      <Button color="outline-primary" block>8:00 pm</Button>
      <Button color="outline-primary" block>8:30 pm</Button>
      <Button color="outline-primary" block>9:00 pm</Button>

      <br /><br /><Button color="primary">Back</Button>
      </div>
    );
  }
}

export default TimeTable;
