import React from 'react';
import "../styles/CurrentWeather.css";
function CurrentWeather({ weatherData, unit }) {
    if (!weatherData) return null;

    const { temp, temp_min, temp_max, humidity } = weatherData.main;
    const { speed, deg } = weatherData.wind;
    const { description, icon } = weatherData.weather[0];

    return (
        <div className="current-weather">
            <h2>Current Weather in {weatherData.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
            <b><p>{description}</p>
            <p>Temperature: {temp}° {unit === 'metric' ? 'C' : 'F'}</p>
            <p>Min: {temp_min}° / Max: {temp_max}°</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind: {speed} m/s, {deg}°</p></b>
        </div>
    );
}

export default CurrentWeather;
