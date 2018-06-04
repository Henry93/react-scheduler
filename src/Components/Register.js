import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Register.css';

class Register extends Component {

  render() {
    return (
      <div className="register">
        <Container>
          <Row>
            <Col>
              <h2>Please Register Below</h2><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <AvForm>
                <AvField name="firstName" type="text" placeholder="First Name" required /><br /><br />
                <AvField name="lastName" type="text" placeholder="Last Name" required /><br /><br />
                <AvField name="email" type="email" placeholder="E-mail address" required /><br /><br />
                <AvField name="password" type="password" placeholder="Password" required /><br /><br />
                <AvField name="passwordConf" type="password" placeholder="Repeat Password" validate={{match:{value:'password'}}} required /><br /><br />
                <Button onClick={() => window.location.href='/registerconf'} color="primary" block>Register</Button><br /><br />
                <a href="/" className="haveacct">Have an account?</a><br /><br />
              </AvForm>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
