import FetchIp from './components/FetchIp'
import React, {useState} from "react"
import UserMap from './components/UserMap'
// import Time from "./components/Time"
import Flag from "./components/Flag"
import './App.css'

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [countryData, setCountryData] = useState("");
  // console.log(lat, lng)

  return (
    <>
      <div>
        <FetchIp setLat={setLat} setLng={setLng} setCountryData={setCountryData}/>
        <Flag countryData={countryData} />  
        {lat > 0 && lng > 0 ? <UserMap lat={lat} lng={lng} /> : null}
       
      </div>
    </>
  );
}

export default App
