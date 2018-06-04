import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PasswordReset.css';

class ForgotPassword extends Component {

  render() {
    return (
      <div className="forgotPassword">
        <Container>
          <Row>
            <Col>
              <h2>Reset Password</h2><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <AvForm>
                <AvField name="email" type="email" placeholder="E-mail address" required /><br /><br />
                <AvField name="password" type="password" placeholder="Password" required /><br /><br />
                <AvField name="passwordConf" type="password" placeholder="Repeat Password" validate={{match:{value:'password'}}} required /><br /><br />
                <Button onClick={() => window.location.href='/passwordrestconf'} color="primary">Reset Password</Button>
                <Button className="back" onClick={() => window.location.href='/'} color="primary">Back</Button>
              </AvForm>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ForgotPassword;
