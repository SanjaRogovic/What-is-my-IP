import React, {useState} from 'react';
import axios from "axios";


const FetchIp = () => {
    const [ipAddress, setIPAddress] = useState("")

    const fetchingLocation = async () => {
        try {
            const key = import.meta.env.VITE_REACT_APP_KEY
            const getLocation = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${key}`)

            if(!getLocation) throw new Error (`${getLocation.status} - fetching data unsuccessful.`)
                 
            setIPAddress(getLocation.data.ip)
        } catch (error) {
            console.error(error)
        }
    }

    // fetchingLocation()

  return (
    <div>
        <h2>What is my IP location?</h2>
        <p>Your IP location is: {ipAddress}</p>
        <p>Your country is:</p>
        <p>Local time:</p>
    </div>
  )
}

export default FetchIp