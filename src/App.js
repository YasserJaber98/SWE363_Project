import React, {useState} from 'react';
import './App.css';
import Sidemenu from './components/Sidemenu/Sidemenu';
import NavBar from "./components/navBarComponent/NavBar";
import LoginPage from './Pages/LoginPage/LoginPage';
import MoreDetailsPage from './Pages/MoreDetailsPage/MoreDetailsPage';
import PackageTrackPage from './Pages/PackageTrackPage/PackageTrackPage'
import RateDriverPage from './Pages/RateDriverPage/RateDriverPage';
import StarRating from './components/StarRatingComponent/StarRating';

import PickUpDetail from './Pages/PickUpDetailsPage/PickUpDetailsPage';
//  
function App() {
   const titles=["History","Pickup Details", "Request ride"];
   const[isOpened,setIsOpened]=useState(false);

   const sidemenuClicked= ()=>{
     setIsOpened(true);

   }


  return (
    <div  className="App">

      <StarRating/>
    </div>
  );
}

export default App;
