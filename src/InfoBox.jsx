/*import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css" ;
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function Infobox({ info }){
const INIT_URL = "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF";

const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL = "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return ( < div className = "InfoBox" >
        <div className = "cardContainer">

        </div>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image ={info.humidity > 70  ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 70  ? <ThunderstormIcon/> : info.temp > 18 ? <SunnyIcon/> : <AcUnitIcon/> 
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
     <p> Temperature = {info.temp}&deg;C</p>
        <p> Humidity = {info.humidity}</p>
          <p> Min Temp = {info.tempMin}&deg;C</p>
            <p> Max Temp = {info.tempMax}&deg;C</p>
              <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  </div>
        );
}
        */
       import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=1169&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=687&auto=format&fit=crop";

  // Dynamic icon and background image
  const weatherIcon =
    info.humidity > 70 ? <ThunderstormIcon fontSize="large" /> : info.temp > 18 ? <WbSunnyIcon fontSize="large" /> : <AcUnitIcon fontSize="large" />;
  const weatherImg =
    info.humidity > 70 ? RAIN_URL : info.temp > 18 ? HOT_URL : COLD_URL;

  return (
    <Card sx={{ mt: 3, borderRadius: 3, boxShadow: 4 }}>
      <CardMedia component="img" height="180" image={weatherImg} alt="weather" />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h5" fontWeight="bold">
            {info.city}
          </Typography>
          {weatherIcon}
        </Box>

        <Typography variant="body1" component="div">
          <p>🌡️ Temperature: {info.temp}&deg;C</p>
          <p>💧 Humidity: {info.humidity}%</p>
          <p>🔻 Min Temp: {info.tempMin}&deg;C</p>
          <p>🔺 Max Temp: {info.tempMax}&deg;C</p>
          <p>🌥️ Weather: <i>{info.weather}</i></p>
          <p>🤒 Feels Like: {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
