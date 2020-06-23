import React from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import WideButton from './components/WideButtonComponent/WideButton';
import DatePicker from './components/DatePickerComponent/DatePicker';
import TimePicker from './components/TimePickerComponent/TimePicker';
import PhoneNum from './components/phoneNumComponent/PhoneNum';
import NavBar from './components/navBarComponent/NavBar'
import FloatingLogo from './components/floatingLogoComponent/FloatingLogo';
import RadioImgBackground from './components/RadioImgBackgroundComponent/RadioImgBackground';
import CarComponent from './components/CarComponent/CarComponent';
import Customer from './components/CustomerComponent/Customer'

import PackageTrack from './components/PackageTrackComponent/PackageTrack';
import Cap from './components/CarAndPerson/Cap';
import Ut from './components/UpcomingTripsComponent/Ut'
import RequestRide from './Pages/RequestRidePage/RequestRide';
import SelectService from './components/SelectServiceComponent/SelectService';

//
function App() {
   const titles=["History","Pickup Details", "Request ride"];
  return (
    <div  className="App">
            <SelectService/>
            






    </div>
  );
}

export default App;
