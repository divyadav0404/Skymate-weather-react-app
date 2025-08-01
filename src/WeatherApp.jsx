
import {useState} from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp()
{
const [WeatherInfo , setWeatherInfo] =  useState({
    city : "Katni",
    feelslike : 24.84,
    temp : 25.05,
    tempMin : 25.05,
    tempMax : 25.05,
    humidity : 47,
    weather : "haze",

});
let updateInfo = (newInfo) => //re-rendering
{
    setWeatherInfo(newInfo);
}

    return (
    <div style = {{textAlign: "center"}}>
        <h2> Weather App by divyansh </h2>
        <SearchBox updateInfo = {updateInfo} />
        <InfoBox info ={WeatherInfo}/>
    </div>
);

}
