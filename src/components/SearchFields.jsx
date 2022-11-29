import React,{useState} from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

function SearchFields({setQuery,units,setUnits}) {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if(city!=='') setQuery({q:city})
        setCity('')
    }

    const handleLocationClick = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({lat,lon});
            })
        }
    }

    const handleUnitsChange = (e) =>{
        const selectedUnits = e.currentTarget.name;
        if(units!==selectedUnits) setUnits(selectedUnits);

    }

  return (
    <div className="flex w-2/3 h-14 rounded-sm mt-10 flex-row justify-center items-center">
      <div className="flex w-3/5 h-full flex-row items-center">
        <input
          value={city}
          onChange={(e)=> setCity(e.currentTarget.value)}
          type="text"
          className=" w-10/12 h-full pl-6 text-lg rounded-sm text-slate-300 focus:outline-none bg-cyan-700"
          placeholder="Search cities . . ."
        ></input>

        <UilSearch onClick={handleSearchClick}
          className="text-slate-600 cursor-pointer ml-4 transition ease-out hover:scale-125"
          size={25}
        />
        <UilMapMarker onClick={handleLocationClick}
          className="text-slate-600 cursor-pointer ml-10 transition ease-out hover:scale-125"
          size={25}
        />
      </div>
      <div className="flex flex-row ml-20 w-20 h-full justify-center items-center">
        <button name="metric" className="text-2xl text-gray-700" onClick={handleUnitsChange}>&#176;C</button>
        <p className="text-2xl text-gray-700 mx-2">|</p>
        <button name="imperial" className="text-2xl text-gray-700" onClick={handleUnitsChange}>&#176;F</button>
      </div>
    </div>
  );
}

export default SearchFields;
