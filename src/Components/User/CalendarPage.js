import React, { Component } from 'react';
import Calendar from 'react-calendar';
import TimezonePicker from 'react-timezone';
import Moment from 'react-moment';
import 'moment-timezone';
import { Button, Input, Label, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/CalendarPage.css';

class CalendarPage extends Component {

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

  onSelect(event) {
    this.setState({
      selectedDate: event
    }, () => {
      this.onSelect.bind(this)
    })
  }

  updateTitle(nt) {
    this.setState({
      title: nt.target.value
    })
  }

  render() {

    return (
      <div className="CalendarPage">
        <Container>
          <Row>
            <Col>
              <h4 className="header">Please select dates and times when you are free to have a meeting and then enter the title of your intended meeting</h4>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col>
              <AvForm>
                <Label for="title">Title of the meeting:</Label><br />
                <AvField value={this.state.title} onChange={nt => this.updateTitle(nt)} className="title" name="title" type="text" placeholder="Title" required />
              </AvForm>
            </Col>
          </Row>
        <br /><br />
          <Row>
            <Col>
              <Calendar
                value={this.state.selectedDate}
                onChange={(date) => this.onSelect(date)}
                onClickDay={() => window.location.href=`/setavailabletimes?date=${this.state.selectedDate}`}
                minDate={new Date()}
              />
          </Col>
        </Row>
        <br />
          <Button onClick={() => window.location.href='/profile'} type="submit" color="primary">Back</Button>
          <Button onClick={() => window.location.href=`/datetimeconf?date=${this.state.selectedDate}&title=${this.state.title}`} type="submit" className="confirm" color="primary">Confirm Dates and Times</Button>
        </Container>
      </div>
    );
  }
}

export default CalendarPage;

//Resource used https://www.npmjs.com/package/react-calendar
