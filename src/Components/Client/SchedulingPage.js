import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaEdit from 'react-icons/lib/fa/edit'
import './css/SchedulingPage.css';

class SchedulingPage extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: ''
  }

  firstname(fn) {
    this.setState({
      firstName: fn.target.value
    })
  }

  lastname(ln) {
    this.setState({
      lastName: ln.target.value
    })
  }

  Email(eml) {
    this.setState({
      email: eml.target.value
    })
  }

  render() {
    return (
      <div className="SchedulingPage">
        <Container>
          <Row>
            <Col>
              <div>
                <h5><strong><FaEdit /> Title of the meeting: <span></span></strong></h5><br />
                <h6><FaClockO /> Date and Timezone Picked: <span></span></h6><br />
              </div>
            </Col>
          </Row>
          <br />
          <hr />
          <br />
          <Row>
            <Col>
              <h4>Enter your Details</h4><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <AvForm method="post">
                <AvField name="firstName" type="text" value={this.state.firstName} onChange={fn => this.firstname(fn)} placeholder="Enter your First Name" required /><br /><br />
                <AvField name="lastName" type="text" value={this.state.lastName} onChange={ln => this.lastname(ln)} placeholder="Enter your Last Name" required /><br /><br />
                <AvField name="email" type="email" value={this.state.email} onChange={eml => this.Email(eml)} placeholder="Enter your E-mail" required /><br /><br />
                <Button onClick={() => window.location.href='/picktime'} type="submit" color="primary">Back</Button>
                <Button onClick={() => window.location.href=`/scheduleconf?firstname=${this.state.firstName}&lastname=${this.state.lastName}&email=${this.state.email}`} className="schbtn" color="primary">Schedule Event</Button>
              </AvForm>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SchedulingPage;
