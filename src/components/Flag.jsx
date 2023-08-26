import React from 'react'

const Flag = ({countryData}) => {

  return (
    <div>
        <img src={`https://flagsapi.com/${countryData}/flat/64.png`} alt="Country Flag" />
    </div>
  )
}

export default Flag