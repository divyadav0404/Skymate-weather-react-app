/*
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
*/
import { useState } from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Katni",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 4, borderRadius: 3 }}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Weather App by Divyansh
          </Typography>
        </Box>

        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={WeatherInfo} />
      </Paper>
    </Container>
  );
}
