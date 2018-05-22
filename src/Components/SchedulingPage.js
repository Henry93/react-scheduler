import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
import './css/SchedulingPage.css';

class SchedulingPage extends Component {

  render() {
    return (
      <div className="SchedulingPage">
        <div>
            <span id="title"><i className="fa fa-calendar"></i> <strong>New Meeting</strong></span><br />
            <span id="dateTime"><i className="fa fa-clock-o" aria-hidden="true"></i> 10:00am - Tuesday May 19, 2018</span><br />
            <span id="timeZone"><i className="fa fa-globe" aria-hidden="true"></i> Pacific Time - US & Canada</span>
        </div>
          <br />
          <hr />
          <br />
        <div>
            <h4>Enter your Details</h4><br />

            <Form method="post">
              <input type="text" placeholder="Enter your First Name" required /><br /><br />
              <input type="text" placeholder="Enter your Last Name" required /><br /><br />
              <input type="email" placeholder="Enter your E-mail" required /><br /><br />

              <Button type="submit" color="primary">Back</Button>
              <Button type="submit" id="schbtn" color="primary">Schedule Event</Button>
            </Form>
        </div>
      </div>
    );
  }
}

export default SchedulingPage;
