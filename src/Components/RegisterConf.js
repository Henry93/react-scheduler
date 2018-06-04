import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import './css/RegisterConf.css';

class RegisterConf extends Component {

  render() {
    return (
      <div className="registerConf">
          <h3 align="center"><FaCheckCircle /> Your account has been registered successfully!!!</h3><br />
          <h5 align="center">Please check your email to confirm your registration...</h5><br /><br />
            <Button className="backtologin" onClick={() => window.location.href='/'} color="primary">Back to Login Page</Button>
      </div>
    );
  }
}

export default RegisterConf;
