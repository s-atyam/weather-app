import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import Forcasting from "./Forcasting";
import { iconUrl } from "../services/serviceWeather";

function TemperatureLocation({weather:{dt,main,sys,wind,name,icon,hour},units}) {
    const {feels_like,humidity,temp,temp_max,temp_min} = main;
    const {country,sunset,sunrise} = sys;
    
    const getTime = (y) =>{
      const d = new Date(y*1000);
        return `${d.getHours()>12?d.getHours()-12:d.getHours()}:${d.getMinutes()<=9?`0${d.getMinutes()}`:`${d.getMinutes()} ${d.getHours()>=12?'PM':'AM'}`}`
    }

  return (
    <div className="flex justify-evenly items-center w-11/12 h-full ">
      <div className="h-full w-1/4  rounded-sm flex flex-col items-center">
        <div className=" flex flex-col justify-center items-center w-5/6 h-1/6 shadow-lg rounded-sm shadow-cyan-700">
          <div className="flex text-gray-700 text-lg">
            <UilTemperature />
            {`real feel: ${feels_like.toFixed()} ${units==='metric'?'\u00B0C':'\u00B0F'}`}
          </div>
          <div className="flex my-2 text-gray-700 text-lg">
            <UilTear />
            {`Humidity: ${humidity.toFixed()}%`}
          </div>
          <div className="flex text-gray-700 text-lg">
            <UilWind />
            {`Wind: ${wind.speed.toFixed()}km/h`}
          </div>
        </div>

        <div className="w-80 h-80 rounded-full my-6 shadow-lg shadow-cyan-700 flex flex-col items-center justify-center">
          <img src={iconUrl(icon)} alt="" className="w-28" />
          <p className="text-5xl text-gray-700 my-1">{`${temp.toFixed()} ${units==='metric'?'\u00B0C':'\u00B0F'}`}</p>
          <p className="text-3xl text-gray-700">{`${name}, ${country}`}</p>
        </div>

        <div className=" flex flex-col justify-center items-center w-4/6 h-1/4 shadow-lg rounded-sm shadow-cyan-700">
          <div className="flex text-gray-700 text-xl">
            <UilSun />
            {`Rise: ${getTime(sunrise)}`}
          </div>
          <div className="flex text-gray-700 my-2 text-xl">
            <UilSunset />
            {`Set: ${getTime(sunset)}`}
          </div>
          <div className="flex text-gray-700 mb-2 text-xl">
            <UilSun />
            {`High: ${temp_max.toFixed()} ${units==='metric'?'\u00B0C':'\u00B0F'}`}
          </div>
          <div className="flex text-gray-700 text-xl">
            <UilSun />
            {`Min: ${temp_min.toFixed()} ${units==='metric'?'\u00B0C':'\u00B0F'}`}
          </div>
        </div>
      </div>
      
      <Forcasting type={hour} units={units}/>
    </div>
  );
}

export default TemperatureLocation;
