import React, { Component } from 'react';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';
import Reactstrap from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './Components/ProfilePage';
/* User components */
import CalendarPage from './Components/User/CalendarPage';
import SetAvailableTimes from './Components/User/SetAvailableTimes';
import SaveConf from './Components/User/SaveConf';
import DateTimeConf from './Components/User/DateTimeConf';
/* Client components */
import PickDate from './Components/Client/PickDate';
import PickTime from './Components/Client/PickTime';
import SchedulingPage from './Components/Client/SchedulingPage';
import ScheduleConf from './Components/Client/ScheduleConf';
/* Authorization components */
import Login from './Components/Login';
import Register from './Components/Register';
import PasswordReset from './Components/PasswordReset';
import PasswordResetConf from './Components/PasswordResetConf';
import RegisterConf from './Components/RegisterConf';

const App = ({ pathname }) => {
  switch(pathname) {
    /* Authorization pathnames */
    case '/':
      return <Login />
    case '/register':
      return <Register />
    case '/registerconf':
      return <RegisterConf />
    case '/passwordreset':
      return <PasswordReset />
    case '/passwordrestconf':
      return <PasswordResetConf />
    /* User pathnames */
    case '/calendar':
      return <CalendarPage />
    case '/setavailabletimes':
      return <SetAvailableTimes />
    case '/saveconf':
      return <SaveConf />
    case '/datetimeconf':
      return <DateTimeConf />
    /* Client pathnames */
    case '/pickdate':
      return <PickDate />
    case '/picktime':
      return <PickTime />
    case '/schedule':
      return <SchedulingPage />
    case '/scheduleconf':
      return <ScheduleConf />
    case '/profilepage':
      return <ProfilePage />
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
