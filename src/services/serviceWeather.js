const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const URL_main = "https://api.openweathermap.org/data/2.5/";

const getData= async (infoType,searchParameter) => {
    const url = new URL(URL_main+infoType);
    url.search = new URLSearchParams({...searchParameter,appid:API_KEY});
    const res = await fetch(url);

    return await res.json();
}

const formattedData = (data) =>{
    const {coord,weather,main,wind,dt,sys,timezone,name} = data;
    const{main:details,description,icon} = weather[0];
    
    return {coord,weather,main,wind,dt,sys,timezone,name,details,description,icon};
}

const getHourlyFormated = (data) =>{
    const {list,city} = data;

    const {timezone} = city;

    const hourly = list.slice(0,5).map(d=>{
        return {date:new Date(d.dt*1000+timezone*1000),temp:d.main.temp,icon:d.weather[0].icon}
    })
    const daily = [list[7],list[15],list[23],list[31],list[39]].map(d=>{
        return {day:new Date(d.dt*1000+timezone*1000).getDay() ,icon:d.weather[0].icon,temp:d.main.temp}
    })

    // console.log(hourly,daily)
    return {timezone,hourly,daily};
}

const getFormattedData = async (searchParameter) =>{
    const forCurWeather =  await getData('weather',searchParameter).then(formattedData);

    const {coord} = forCurWeather;
    const {lat,lon} = coord;
    const {units} = searchParameter;

    // now getting the hourly forecast
    const hour = await getData('forecast',{lat,lon,units}).then(getHourlyFormated);
    // console.log(hourly)
    
    return ({...forCurWeather,hour});
}

const iconUrl = (code)=> `https://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedData;

export {iconUrl};