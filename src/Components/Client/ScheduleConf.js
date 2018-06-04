import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaCalendarCheckO from 'react-icons/lib/fa/calendar-check-o';
import FaCalendarPlusO from 'react-icons/lib/fa/calendar-plus-o'
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaEdit from 'react-icons/lib/fa/edit'
import './css/ScheduleConf.css';

class ScheduleConf extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    }

    toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div align="center" className="ScheduleConf">

        <div>
          <h3 className="main"><FaCalendarCheckO /> Your Event Has Been Scheduled Successfully!</h3>
          <h5 className="sub">Please check your email for details.</h5>
          <br />
          <hr className="text-muted" />
          <br />
          <div>
            <h5><strong><FaEdit /> Title of the meeting: <span></span></strong></h5><br />
            <h6><FaClockO /> Date and Timezone Picked: <span></span></h6><br />
          </div>
          <br />
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret color="primary">
              <FaCalendarPlusO /> Add to your calendar
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Google Calendar</DropdownItem>
              <DropdownItem href="#">Apple Calendar</DropdownItem>
              <DropdownItem href="#">Outlook</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <br /><br />

          <Button onClick={() => window.location.href='/profilepage'} className="profile">Profile page</Button>

        </div>
      </div>
    );
  }
}

export default ScheduleConf;
