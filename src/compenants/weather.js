import { useState, useEffect } from 'react';
import axios from 'axios';
import clearSky from "../assests/clear-sky.png";
import cloud from "../assests/cloud.png";
import cloudy from "../assests/cloudy.png";
import lightRain from "../assests/weather.png";
import '../App.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('New York');
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0bdd3043a2b751ec19bc5ea896b5996a`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [cityName]);

  const handleSearch = () => {
    const cityValue = document.getElementById('cityInput').value;
    setCityName(cityValue);
  };

  const toggleTemperature = () => {
    setIsFahrenheit((prev) => !prev);
  };

  const weatherIcon = () => {
    let icon;
    switch (weatherData?.weather[0]?.icon) {
      case "01d":
      case "01n":
      case "02d":
        icon = clearSky;
        break;
      case "03d":
        icon = cloud;
        break;
      case "04d":
      case "04n":
        icon = cloudy;
        break;
      case "10n":
        icon = lightRain;
        break;
      default:
        icon = clearSky;
    }
    return icon;
  };

  const convertTemp = (kelvin) => {
    if (isFahrenheit) {
      return Math.round((kelvin - 273.15) * 9/5 + 32) + "°F";
    } else {
      return Math.round(kelvin - 273.15) + "°C";
    }
  };

  return (
    <div className="App">
      <div className="container">
        <input type="text" id="cityInput" placeholder="Enter city name" />
        <button onClick={handleSearch}>Search</button>
        <button className="temp-toggle" onClick={toggleTemperature}>
          {isFahrenheit ? "F°" : "C°"}
        </button>

        {weatherData && (
          <div>
            <div className="top">
              <div className="location">
                <h3 className='temp'>{weatherData.name}</h3>
              </div>
              <div className="temp">
                {convertTemp(weatherData.main.temp)}
              </div>
              <div className="description">
                {weatherData.weather[0].description} <br />
                <img src={weatherIcon()} className='img' alt="Weather icon" />
              </div>
            </div>
            <div className="bottom">
              <div className="feels">
                <p>Feels like: {convertTemp(weatherData.main.feels_like)}</p>
              </div>
              <div className="additional-info">
                <p>Min Temp: {convertTemp(weatherData.main.temp_min)}</p>
                <p>Max Temp: {convertTemp(weatherData.main.temp_max)}</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Visibility: {weatherData.visibility / 1000} km</p>
                <p>Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
