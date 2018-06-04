import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o'
import './css/DateTimeConf.css';

class DateTimeConf extends Component {

  render() {
    return (
      <div align="center" className="DateTimeConf">

        <div>
          <h3 className="main"><FaCheckSquareO /> Your Meeting and Available Dates and Times Have Been Saved Successfully!</h3>
          <h5>Your client will receive the notification on their dashboard</h5>
          <br />

          <Button className="profilepage" onClick={() => window.location.href='/profilepage'}>Profile page</Button>

        </div>
      </div>
    );
  }
}

export default DateTimeConf;
