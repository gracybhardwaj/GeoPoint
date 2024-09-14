import React, { useState, useEffect } from 'react';
import './App.css';

function MyComponent() {
  const [humidity, setHumidity] = useState('Loading...');
  const [mineralComposition, setMineralComposition] = useState('Loading...');
  const [weather, setWeather] = useState('Loading...');
  const [uvi, setUvi] = useState('Loading...');

  useEffect(() => {
    // Fetch the sensor and API data here
    // For now, let's use dummy data
    
    const fetchData = () => {
      setHumidity('45%');
      setMineralComposition('Nitrogen: 20%, Phosphorus: 10%, Potassium: 5%');
      setWeather('Sunny, 24°C');
      setUvi('5 (Moderate)');
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>GeoPoint Agricultural Dashboard</h1>
      </header>

      <section className="data-cards">
        <div className="card">
          <h3>Soil Humidity</h3>
          <p>{humidity}</p>
        </div>
        <div className="card">
          <h3>Mineral Composition</h3>
          <p>{mineralComposition}</p>
        </div>
        <div className="card">
          <h3>Weather Data</h3>
          <p>{weather}</p>
        </div>
        <div className="card">
          <h3>UV Index</h3>
          <p>{uvi}</p>
        </div>
      </section>

      <footer>
        <p>GeoPoint - Optimizing agriculture through innovation</p>
      </footer>
    </div>
  );
}

export default MyComponent;
