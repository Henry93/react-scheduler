import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FaCheckSquareO from 'react-icons/lib/fa/check-square-o'
import './css/SaveConf.css';

class SaveConf extends Component {

  render() {
    return (
      <div align="center" className="SaveConf">

        <div>
          <h3 className="main"><FaCheckSquareO /> Your Available Times Have Been Saved Successfully!</h3>
          <br />

          <Button onClick={() => window.location.href='/calendar'}>Back to the calendar</Button>
        </div>
      </div>
    );
  }
}

export default SaveConf;
