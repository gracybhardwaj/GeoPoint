import React, { useState, useEffect } from 'react';
import './CropDashboard.css';

function CropDashboard() {
  const [crops, setCrops] = useState([
    { name: 'Wheat', humidity: 'Loading...', mineralComposition: 'Loading...', weather: 'Loading...', uvi: 'Loading...' },
    { name: 'Corn', humidity: 'Loading...', mineralComposition: 'Loading...', weather: 'Loading...', uvi: 'Loading...' },
    { name: 'Rice', humidity: 'Loading...', mineralComposition: 'Loading...', weather: 'Loading...', uvi: 'Loading...' },
  ]);

  useEffect(() => {
    const fetchData = () => {
      const updatedCrops = crops.map(crop => ({
        ...crop,
        humidity: '45%',
        mineralComposition: 'Nitrogen: 20%, Phosphorus: 10%, Potassium: 5%',
        weather: 'Sunny, 24°C',
        uvi: '5 (Moderate)'
      }));
      setCrops(updatedCrops);
    };

    fetchData();
  }, []);

  return (
    <section className="data-cards">
      {crops.map((crop, index) => (
        <div key={index} className="card">
          <h3>{crop.name}</h3>
          <p><strong>Soil Humidity:</strong> {crop.humidity}</p>
          <p><strong>Mineral Composition:</strong> {crop.mineralComposition}</p>
          <p><strong>Weather Data:</strong> {crop.weather}</p>
          <p><strong>UV Index:</strong> {crop.uvi}</p>
        </div>
      ))}
    </section>
  );
}

export default CropDashboard;
