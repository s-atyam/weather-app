import React from "react";
import { iconUrl } from "../services/serviceWeather";

function Forcasting({type:{hourly,daily},units}) {
    console.log(hourly);

    const dateConverter = (d)=>{
        return `${d.getHours()>12?d.getHours()-12:d.getHours()}:${d.getMinutes()<=9?`0${d.getMinutes()}`:`${d.getMinutes()}`} ${d.getHours()>=12?'PM':'AM'}`;
    }

    const getDays = (d)=>{
        const arr =['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
        return arr[d]
    }

  return (
    <div className="custom-height-1 w-2/3  rounded-md flex flex-col items-center justify-center ">
    <div className="w-full custom-height-1 mb-1 flex flex-col justify-center shadow-lg shadow-cyan-700 rounded-sm">
      <p className="text-3xl text-gray-700 ml-8">Hourly Forecast</p>
      <hr className="my-5 w-5/6 ml-8 border-slate-600"/>

      <div className="h-2/3 ml-8 w-11/12 flex flex-row justify-between items-center">
        {hourly.map((item) => (
          <div className="flex flex-col justify-center items-center h-4/5 w-1/6">
            <p className="font-light text-gray-700 text-2xl">{dateConverter(item.date)}</p>
            <img src={iconUrl(item.icon)} alt="" className="w-20 h-20 my-5" />
            <p className="font-medium text-gray-700 text-xl">{item.temp.toFixed()} {units==='metric'?'\u00B0C':'\u00B0F'}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full custom-height-1 mb-1 flex flex-col justify-center shadow-lg shadow-cyan-700 rounded-sm">
      <p className="text-3xl text-gray-700 ml-8">Daily Forecast</p>
      <hr className="my-5 w-5/6 ml-8 border-slate-600"/>
      <div className="h-2/3 ml-8 w-11/12 flex flex-row justify-between items-center">
        {daily.map((item) => (
          <div className="flex flex-col justify-center items-center h-4/5 w-1/6">
            <p className="font-light text-gray-700 text-2xl">{getDays(item.day)}</p>
            <img src={iconUrl(item.icon)} alt="" className="w-20 h-20 my-5" />
            <p className="font-medium text-gray-700 text-xl">{item.temp.toFixed()} {units==='metric'?'\u00B0C':'\u00B0F'}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Forcasting;
