import React, { useState } from 'react'
import Search from './search';
import Show from './show';
const Weather = () => {
    let[recive,setrecieve]= useState({
        city:"null",
        temp: "null",
        feels_like: "null",
        humidity:"null"
    });
    function ok(data){
        setrecieve(data);
        recive = data;
    }
  return (
    <div style={{display:'flex',alignItems:"center",flexDirection:"column"}}>
        <h1>Weather App</h1>
        <Search sendtoparent={ok}/>
        <Show getdata={recive}/>
    </div>

  )
}

export default Weather