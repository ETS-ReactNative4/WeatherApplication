import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather.js"




const API_KEY = "6f9cc741cc2425971dc77371fa02ab17";


class App extends React.Component
{
  state = {

    longitude: undefined,
    latitude: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    windSpeed: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);

    this.setState({
      
      longitude: data.coord.lon,
      latitude: data.coord.lat,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
      error: ""

    });

  }
  render() 
  {
    
    return (

      <div>
      
      <Titles />
      <Form getWeather={this.getWeather}/>          
      <Weather
       longitude={this.state.longitude}
       latitude={this.state.latitude} 
       city={this.state.city}
       country={this.state.country}
       humidity={this.state.humidity}
       description={this.state.description}
       windSpeed={this.state.windSpeed}
       error={this.state.error}

      />

      </div>
    
    );
  
  
  }

};

export default App;