import React from 'react';
import "../styles/Forecast.css";

function Forecast({ forecastData, unit }) {
    if (!forecastData) return null;

    // Extract the forecast data for one entry per day
    const dailyForecasts = forecastData.list.filter((reading) =>
        reading.dt_txt.includes("12:00:00")
    );

    return (
        <div className="forecast">
            <h2>5-Day Forecast</h2>
            <div className="forecast-cards">
                {dailyForecasts.map((day, index) => (
                    <div key={index} className="forecast-card">
                        <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt="weather-icon"
                        />
                        <p>{day.weather[0].description}</p>
                        <p>Avg Temp: {day.main.temp}° {unit === 'metric' ? 'C' : 'F'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
