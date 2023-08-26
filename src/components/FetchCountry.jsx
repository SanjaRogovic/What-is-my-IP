import React, {useState, useEffect} from 'react'
import axios from "axios"

const FetchCountry = ({countryData}) => {
    const [countryInfo, setCountryInfo] = useState([])

    const fetchCountryInfo = async () => {
        try {
             const getInfo = await axios.get(`https://restcountries.com/v3.1/alpha/${data.location.country}`)

             console.log(getInfo)
            
             setCountryInfo(getInfo.data)
        }
        catch (error){
            console.error("Fetching country unsuccessful", error)
        }
    }

    useEffect(() => {
        fetchCountryInfo()
        }, [])


  return (
    <div>
      {/* <p>Country Info: {countryInfo}</p> */}
    </div>
  )
}

export default FetchCountry