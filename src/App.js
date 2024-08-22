import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import UnitToggle from './components/UnitToggle';
import './styles/App.css';

const API_KEY = '85fc858b70cd9169067097161468821e';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric');

  const handleSearch = async (city) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`);
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`);
      setForecastData(forecastResponse.data);
    } catch (error) {
      console.error("City not found or other error:", error);
      alert("City not found or there was an error. Please try again.");
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app">
      <h1>Weather Forecast Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <UnitToggle unit={unit} toggleUnit={toggleUnit} />
      <CurrentWeather weatherData={weatherData} unit={unit} />
      <Forecast forecastData={forecastData} unit={unit} />
    </div>
  );
}

export default App;
