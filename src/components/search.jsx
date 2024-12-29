import React from 'react'
import { useState,useEffect } from 'react';
const search = ({sendtoparent}) => {
    const apikey = "ddfec0f271344642fd08661e2f9129f8";
    const api = "https://api.openweathermap.org/data/2.5/weather";
   
       let[name,setname]= useState('');
       async function getdata(){
        let url = await fetch(`${api}?q=${name}&appid=${apikey}&units=metric`);
        let obtain = await url.json();
        let result = {
            city:name,
            temp:obtain.main.temp,
            feels_like:obtain.main.feels_like,
            humidity:obtain.main.humidity
        };
        return result;
    }
      async function handleSubmit(e){
             e.preventDefault();
             console.log('submitted');
            setname('');
           let result= await getdata();
           sendtoparent(result); 
       }
     return (
       <div>
           <form onSubmit={handleSubmit}>
               <input style={{width:"20rem",fontSize:"20px"}} value={name} placeholder='Enter City' onChange={(e)=>{setname(e.target.value)}}/>
               <br />
               <br />
                  <button style={{width:"18rem",marginLeft:"10px"}} className='btn btn-primary'>Search City</button>
           </form>
       </div>
  )
}

export default search