import React, { useState } from 'react'

const show = ({getdata}) => {
  const hotWeather = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEXanJz1FyJOcr45XBlNQxix2swDUv5yX1Q&s";
  const coldWeather = "data:image/jpeg;base64,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";
  const RainyWeather = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXXzIr5Nc6DFhqTzgsxWy-1w5DfBDOZyKtQ&s";
  console.log(getdata);
  return (
    <div >
      <br />
        <div className="card" style={{width: "25rem",borderRadius:"14px",marginTop:"10px",backgroundColor:"black"}}>
  <div className="card-body">
       <img style={{width:"20rem",marginLeft:"14px",borderRadius:"5px"}} src={getdata.humidity>85 ?RainyWeather : getdata.temp<14 ? coldWeather : hotWeather}/>
        <br /><br />
        <div style={{color:"white"}}>
       <h2>City- {getdata.city}</h2>
       <br />
       <h5>Feels_like: {getdata.feels_like}</h5>
       <h5>Humidity: {getdata.humidity}</h5>
       <h5>Temperature: {getdata.temp} degree C</h5>
       </div>
  </div>
</div>
    </div>
  )
}

export default show