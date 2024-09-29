 import React, { useState } from 'react'
 import Cloud from "../images/clouds.png"
 import Mist from "../images/mist.png"
 import Clear from "../images/clear.png"
 import Rain from "../images/rain.png"


 const WeatherApp=()=> {
 const [search, setSearch]= useState("")
 const [data, setData]= useState()
 const [error, setError]= useState()
 const API ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
 const API_key ="bd80ec944503ba4ce510b72dbd9f7d7e"

 const handleInput = (event)=>{
   setSearch(event.target.value)
   console.log(event.target.value);
 }
 
 const myFun = async() =>{
   const get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
   const jsonData = await get.json()
   console.log(jsonData);
   setData(jsonData)


   if (search == ""){
    alert("Please Enter name ")
   }
   setSearch("")
 }


   return (
 <>
     <div className='container'>
     <div className='inputs'>
     <input placeholder='Enter city, Country'value={search}onChange={handleInput}/>
     <button onClick={myFun}>Search</button>  
     </div>

     <div>
    {
      data && data.weather ?
      <div className='weathers text-center'> 
        <h2>{data.name}</h2>
        <img src={data.weather[0].main=="Clouds" ? Cloud : ""}/>
        <img src={data.weather[0].main=="Mist" ? Mist : ""}/>
        <img src={data.weather[0].main=="Rain" ? Rain : ""}/>
        <img src={data.weather[0].main=="Clear" ? Clear : ""}/>

        <h2>{Math.trunc(data.main.temp)}°C</h2>
        <h4>{data.weather[0].description}</h4>
      </div>:""
    }
    
      </div>  
    </div>
 </>
       )
 }

 export default WeatherApp