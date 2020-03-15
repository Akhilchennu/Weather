import React, { useState } from 'react';
import Selectcity from './Components/select';
import Weather from './Components/weather';
import Button from '@material-ui/core/Button';
import { useSelector  } from 'react-redux';
import { service } from './Services/service';
import './App.css';


function App() {
  const weatherData = useSelector(state => state.weatherData);
  const [result,getResult]=useState([])
  const [buttonDisable,getButtonDisable]=useState(false)
  const getUpdates=()=>{
   if(weatherData.length>0){
    getButtonDisable(true);
    const responseData = service.getWeatherData(weatherData);
    responseData.then((data)=>{
     if(data.success){
        getResult(data.weather);
        getButtonDisable(false);
     }else{

     }
    }).catch((error)=>{
      console.log("error");
    })
   }

  }
  return (
    <>
     <div className="boldFont marginAlign">Select city to get weather updates</div>
     <Selectcity />
      <div className="marginAlign">
        <Button disabled={weatherData.length === 0 || buttonDisable} className="buttonStyle" variant="contained" color="primary" 
        onClick={getUpdates}>Get Updates</Button>
      </div>
      {result.length>0 && weatherData.length>0?<><div  className="boldFont marginAlign">CURRENT WEATHER</div>  
      <div className="maindiv">
        {result.map((value)=>{
          return <Weather responseData={value} key={value.id} degress={273.15}/>
        })}
      </div> </>:null} 
    </>
  );
}


export default App;
