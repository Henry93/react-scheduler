import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import './css/ConfirmationPage.css';

class ConfirmationPage extends Component {

  render() {
    return (
      <div className="ConfirmationPage">
      <script type="text/javascript">
      $(document).ready(function() {
        $('.dropdown-toggle').click(function() {
          $('.dropdown-menu').toggle();
        })
      })
      </script>

        <div>
          <h2><i className="fa fa-check-circle-o" aria-hidden="true"></i>
            Your Event Has Been Scheduled Successfully!</h2>
          <h5>Please check your email for details.</h5>
          <br />
          <hr className="text-muted" />
          <br />
          <div>
              <span id="title"><div className="fa fa-calendar"></div> <strong>New Meeting</strong></span><br />
              <span id="dateTime"><i className="fa fa-clock-o" aria-hidden="true"></i> 10:00am - Tuesday May 19, 2018</span><br />
              <span id="timeZone"><i className="fa fa-globe" aria-hidden="true"></i> Pacific Time - US & Canada</span>
          </div>
          <br />
          <div className="dropdown">
            <Button color="primary" className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Add to your calendar
            </Button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Google Calendar</a>
              <a className="dropdown-item" href="#">Apple Calendar</a>
              <a className="dropdown-item" href="#">Outlook</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ConfirmationPage;
