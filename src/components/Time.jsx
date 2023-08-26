import React, {useState, useEffect} from 'react'
import { DateTime } from 'luxon'

const Time = ({countryData}) => {
    const [localTime, setLocalTime] = useState("")
    // const [timezone, setTimezone] = useState("")
   
    const now = DateTime.now()

    useEffect(()=> {
        setLocalTime(now.toLocaleString(DateTime.DATETIME_MED))
       
    }, [])

  return (
    <div>
        <p>Date & Time: {countryData.countrydata} : {localTime}</p> 
    </div>
  )
}

export default Time