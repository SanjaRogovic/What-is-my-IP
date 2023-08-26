import React, {useState, useEffect} from 'react';
import axios from "axios";


const FetchIp = ({setLat, setLng, setCountryData, countryData}) => {
    const [ip, setIP] = useState("")

    const fetchingLocation = async () => {
        try {
            const key = import.meta.env.VITE_REACT_APP_KEY
            const userIp = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${key}`)
            const response = userIp.data 

            console.log(userIp.data)

            setIP(response.ip)
            setLat(response.location.lat);
            setLng(response.location.lng);
            setCountryData(response.location.country)
        } 

        catch (error){
            console.error("Fetching country unsuccessful", error)
        }
    }

    useEffect(() => {
    fetchingLocation()
    }, [])
   

  return (
    <div>
        <h2>What is my IP location?</h2>
        <p>Your IP location is: {ip}</p>
        <p>Country: {countryData}</p>     
    </div>
  )
}

export default FetchIp