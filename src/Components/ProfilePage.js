import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, Label, Input, bsStyle, Container, Row, Col, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ProfilePage.css';

class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

  render() {
    return (
      <div className="profilePage">
          <Container>
            <Row>
              <Col>
                <h2 className="header">Welcome back John</h2>
              </Col>
            </Row>
              <hr bsStyle="color:#b2bec3;" /><br />
            <Row>
              <Col xl="12" lg="12" md="12" sm="12">
                <Button className="newMeeting" onClick={() => window.location.href='/calendar'} color="success">Set Up A New Meeting</Button>
              </Col>
            </Row>
            <br /><br />
            <Row>
              <Col xl="5" lg="4" md="4" sm="4">
                <div className="userInfo">
                  <img id="target" src={this.state.image} width="100px" height="100px" /><br /><br />
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeader toggle={this.toggle}>Choose your image</ModalHeader>
                      <ModalBody>
                        <img id="target" src={this.state.image} width="100px" height="100px" /><br /><br />
                        <input type="file" onChange={this.onImageChange.bind(this)} className="filetype"/>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
                      </ModalFooter>
                    </Modal>
                  <a href="#" onClick={this.toggle}>Change Profile Image</a>
                  <br /><br />
                  <Label for="firstName">First Name: </Label><span> John</span><br />
                  <Label for="lastName">Last Name: </Label><span> Doe</span><br />
                  <Label for="email">E-mail: </Label><span> johndoe@gmail.com</span><br />
                </div>
              </Col>
              <Col xl="7" lg="8" md="8" sm="8">
                <ListGroup className="events">
                  <ListGroupItem active>Meeting Requests</ListGroupItem>
                  <ListGroupItem>Date night with Maria Doe | <a href="pickdate">Schedule Meeting</a> | <a href="#">Reject</a></ListGroupItem>
                  <ListGroupItem>Business conference with Derek Blue | <a href="pickdate">Schedule Meeting</a> | <a href="#">Reject</a></ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default ProfilePage;
