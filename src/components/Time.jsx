import React, {useState, useEffect} from 'react'
import { DateTime } from 'luxon'

const Time = ({countryData}) => {

    const [date, setDate] = useState("")

    useEffect(()=> {
        setDate(DateTime.now())
    }, [])
    
  return (
    <div>
        <p>{date} {countryData}</p> 
    </div>
  )
}

export default Time