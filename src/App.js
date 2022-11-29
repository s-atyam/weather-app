import "./App.css";
import SearchFields from "./components/SearchFields";
import TemperatureLocation from "./components/TemperatureLocation";
import Time from "./components/Time";
import getFormattedData from "./services/serviceWeather";
import {useState,useEffect} from 'react';

// import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {

  const [query, setQuery] = useState({q:'patna'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeatherData = async ()=>{
      const data = await getFormattedData({...query,units});
        setWeather(data);
        console.log(data); 
    }
    fetchWeatherData();
  }, [query,units]);
  

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-cyan-700 to-cyan-100 flex items-center flex-col">
      <SearchFields setQuery={setQuery} units={units} setUnits={setUnits} />
      
      {weather && (
        <>
        <Time weather={weather}/>
        <TemperatureLocation weather={weather} units={units}/>
        </>
      )}

    </div>
  );
}

export default App;
