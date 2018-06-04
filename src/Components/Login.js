import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button, Form, Input, FormGroup, Label, Container, Row, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Login.css';

class Register extends Component {

  render() {
    return (
      <div className="login">
        <Container>
          <Row>
            <Col>
              <h2>Please Login</h2><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <AvForm>
                  <AvField type="email" name="email" placeholder="E-mail address" required /><br /><br />
                  <AvField type="password" name="password" placeholder="Password" required /><br /><br />
                </AvForm>
                <Button onClick={() => window.location.href=`/profilepage`} color="primary" block>Sign In</Button><br />
                <FormGroup check className="check">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Remember me
                    </Label>
                </FormGroup>
                <div className="links">
                  <a href="/passwordreset">Forgot your password?</a><br />
                  <a href="/register">Dont have an account?</a>
                </div>
                <br /><br /><br />
                <div className="line"><span>OR</span></div><br />
                <a href="#"><img src="https://www.hamodia.co.uk/images/google-login-button.png" alt="Google_button" /></a>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
