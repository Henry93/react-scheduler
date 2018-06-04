import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';
import './css/PasswordResetConf.css';

class PasswordResetConf extends Component {

  render() {
    return (
      <div className="passwordResetConf">
          <h3 align="center"><FaCheckCircle /> Your password was reset successfully!!!</h3><br />
          <h5 align="center">Please check your email for details...</h5><br /><br />
            <Button className="backtologin" onClick={() => window.location.href='/'} color="primary">Back to Login Page</Button>
      </div>
    );
  }
}

export default PasswordResetConf;
