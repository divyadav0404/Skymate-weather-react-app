import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css" ;
export default function Infobox({ info }){
const INIT_URL = "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF";


    return ( < div className = "InfoBox" >
        <div className = "cardContainer">

        </div>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image ={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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