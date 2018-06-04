import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, Container, Row, Col } from 'reactstrap';
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaEdit from 'react-icons/lib/fa/edit'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PickTime.css';

class PickTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cSelected: []
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div className="TimeTable">
      <Container>
        <Row>
          <Col>
            <h4>Please select a time for a meeting</h4><br /><br />
          </Col>
        </Row>
        <Row>
          <Col>
            <h5><strong><FaEdit /> Title of the meeting: <span></span></strong></h5><br />
            <h6><FaClockO /> Date and Timezone Picked: <span></span></h6><br />
          </Col>
        </Row>

      <hr /><br />

        <Row>
          <Col>
            <h5 className="selectTime">Select a Time From Available Times</h5><br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => this.onButtonClick('7:00am')} active={this.state.cSelected.includes('7:00am')} outline color="primary" block>7:00 am</Button>
            <Button onClick={() => this.onButtonClick('7:30am')} active={this.state.cSelected.includes('7:30am')} outline color="primary" block>7:30 am</Button>
            <Button onClick={() => this.onButtonClick('8:00am')} active={this.state.cSelected.includes('8:00am')} outline color="primary" block>8:00 am</Button>
            <Button onClick={() => this.onButtonClick('8:30am')} active={this.state.cSelected.includes('8:30am')} outline color="primary" block>8:30 am</Button>
            <Button onClick={() => this.onButtonClick('9:00am')} active={this.state.cSelected.includes('9:00am')} outline color="primary" block>9:00 am</Button>
            <Button onClick={() => this.onButtonClick('9:30am')} active={this.state.cSelected.includes('9:30am')} outline color="primary" block>9:30 am</Button>
            <Button onClick={() => this.onButtonClick('10:00am')} active={this.state.cSelected.includes('10:00am')} outline color="primary" block>10:00 am</Button>
            <Button onClick={() => this.onButtonClick('10:30am')} active={this.state.cSelected.includes('10:30am')} outline color="primary" block>10:30 am</Button>
            <Button onClick={() => this.onButtonClick('11:00am')} active={this.state.cSelected.includes('11:00am')} outline color="primary" block>11:00 am</Button>
            <Button onClick={() => this.onButtonClick('11:30am')} active={this.state.cSelected.includes('11:30am')} outline color="primary" block>11:30 am</Button>
        </Col>
      </Row>

      <br /><div className="line"><span>Noon</span></div><br />

      <Row>
        <Col>
          <Button onClick={() => this.onButtonClick('12:00pm')} active={this.state.cSelected.includes('12:00pm')} outline color="primary" block>12:00 pm</Button>
          <Button onClick={() => this.onButtonClick('12:30pm')} active={this.state.cSelected.includes('12:30pm')} outline color="primary" block>12:30 pm</Button>
          <Button onClick={() => this.onButtonClick('1:00pm')} active={this.state.cSelected.includes('1:00pm')} outline color="primary" block>1:00 pm</Button>
          <Button onClick={() => this.onButtonClick('1:30pm')} active={this.state.cSelected.includes('1:30pm')} outline color="primary" block>1:30 pm</Button>
          <Button onClick={() => this.onButtonClick('2:00pm')} active={this.state.cSelected.includes('2:00pm')} outline color="primary" block>2:00 pm</Button>
          <Button onClick={() => this.onButtonClick('2:30pm')} active={this.state.cSelected.includes('2:30pm')} outline color="primary" block>2:30 pm</Button>
          <Button onClick={() => this.onButtonClick('3:00pm')} active={this.state.cSelected.includes('3:00pm')} outline color="primary" block>3:00 pm</Button>
          <Button onClick={() => this.onButtonClick('3:30pm')} active={this.state.cSelected.includes('3:30pm')} outline color="primary" block>3:30 pm</Button>
          <Button onClick={() => this.onButtonClick('4:00pm')} active={this.state.cSelected.includes('4:00pm')} outline color="primary" block>4:00 pm</Button>
          <Button onClick={() => this.onButtonClick('4:30pm')} active={this.state.cSelected.includes('4:30pm')} outline color="primary" block>4:30 pm</Button>
          <Button onClick={() => this.onButtonClick('5:00pm')} active={this.state.cSelected.includes('5:00pm')} outline color="primary" block>5:00 pm</Button>
          <Button onClick={() => this.onButtonClick('5:30pm')} active={this.state.cSelected.includes('5:30pm')} outline color="primary" block>5:30 pm</Button>
          <Button onClick={() => this.onButtonClick('6:00pm')} active={this.state.cSelected.includes('6:00pm')} outline color="primary" block>6:00 pm</Button>
          <Button onClick={() => this.onButtonClick('6:30pm')} active={this.state.cSelected.includes('6:30pm')} outline color="primary" block>6:30 pm</Button>
          <Button onClick={() => this.onButtonClick('7:00pm')} active={this.state.cSelected.includes('7:00pm')} outline color="primary" block>7:00 pm</Button>
          <Button onClick={() => this.onButtonClick('7:30pm')} active={this.state.cSelected.includes('7:30pm')} outline color="primary" block>7:30 pm</Button>
          <Button onClick={() => this.onButtonClick('8:00pm')} active={this.state.cSelected.includes('8:00pm')} outline color="primary" block>8:00 pm</Button>
          <Button onClick={() => this.onButtonClick('8:30pm')} active={this.state.cSelected.includes('8:30pm')} outline color="primary" block>8:30 pm</Button>
          <Button onClick={() => this.onButtonClick('9:00pm')} active={this.state.cSelected.includes('9:00pm')} outline color="primary" block>9:00 pm</Button>
        </Col>
      </Row>


      <Row>
        <Col>
          <br /><br /><Button onClick={() => window.location.href='/pickdate'} color="primary">Back</Button>
          <Button className="nextbtn" onClick={() => window.location.href=`/schedule?time=${this.state.cSelected}`} color="primary">Next</Button>
        </Col>
      </Row>
      </Container>
      </div>
    );
  }
}

export default PickTime;
