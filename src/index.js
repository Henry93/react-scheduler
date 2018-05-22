import React, { Component } from 'react';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';
import Reactstrap from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import CalendarPage from './Components/CalendarPage';
import TimeTable from './Components/TimeTable';
import SchedulingPage from './Components/SchedulingPage';
import ConfirmationPage from './Components/ConfirmationPage';
import Login from './Components/Login';

const App = ({ pathname }) => {
  switch(pathname) {
    case '/':
      return <Login />
    case '/calendar':
      return <CalendarPage />
    case '/time-table':
      return <TimeTable />
    default:
      return <Login />
  }
}

let pathname = window.location.pathname;

ReactDOM.render(
  <App pathname={pathname} />,
  document.getElementById('root')
)

window.addEventListener('popstate', () => {
  pathname = window.location.pathname
})
