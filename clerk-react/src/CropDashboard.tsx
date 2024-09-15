import React, { useState } from 'react';
import './CropDashboard.css';

const aiSuggestions = {
    sensor_1: (
      <>
        - Current humidity is at <strong>45.2%</strong>, which is below optimal for this crop. Increase irrigation by <strong>15%</strong> to prevent dehydration.
        <br />- UV index at <strong>3.5</strong> is moderate; <strong>no UV protection required for now.</strong>
        <br />- Temperature at <strong>22.1°C</strong> is ideal; <strong>no temperature-related adjustments needed.</strong>
        <br />- Drought risk: Medium. <strong>Continuously monitor for sharp humidity declines.</strong>
      </>
    ),
    sensor_2: (
      <>
        - Humidity at <strong>52.5%</strong> is optimal for crop growth; <strong>no irrigation adjustments necessary.</strong>
        <br />- UV index at <strong>4.1</strong> indicates slightly higher UV exposure. <strong>Consider shading for sensitive crops.</strong>
        <br />- Temperature is at <strong>24.3°C</strong>, which is warm but within optimal range. <strong>Continue monitoring for heat spikes.</strong>
        <br />- No signs of disease or drought risk. <strong>Maintain current conditions.</strong>
      </>
    ),
    sensor_3: (
      <>
        - Humidity is at <strong>47%</strong>, which is nearing upper optimal limits. <strong>Decrease irrigation by 10% to prevent over-saturation.</strong>
        <br />- UV index of <strong>3.2</strong> is moderate. <strong>No immediate action needed.</strong>
        <br />- Temperature is a cooler <strong>20.0°C</strong>, ideal for cooler weather crops but <strong>check for frost risk if it drops further.</strong>
        <br />- Risk of fungal diseases like mold due to elevated humidity and moderate temperatures. <strong>Monitor closely and consider preventive treatments.</strong>
      </>
    )
  };
  

const CropDashboard = () => {
  const [sensorData] = useState([
    { sensor_id: 'sensor_1', humidity: 45.2, temp: 22.1, uv: 3.5, location: "Farm 1 - New York" },
    { sensor_id: 'sensor_2', humidity: 52.5, temp: 24.3, uv: 4.1, location: "Farm 2 - California" },
    { sensor_id: 'sensor_3', humidity: 47.0, temp: 20.0, uv: 3.2, location: "Farm 3 - Texas" },
  ]);

  return (
    <div className="crop-dashboard">
      {sensorData.map((sensor) => (
        <div key={sensor.sensor_id} className="crop-container">
          <h3>Sensor <strong>{sensor.sensor_id}</strong></h3>
          <p>Location: <strong>{sensor.location}</strong></p> {/* Display farm location */}
          <p>Humidity: <strong>{sensor.humidity}</strong>%</p>
          <p>Temperature: <strong>{sensor.temp}°C</strong></p>
          <p>UV Index: <strong>{sensor.uv}</strong></p>
        </div>
      ))}

      {/* AI Suggestions Section */}
      <div className="ai-suggestions">
        <h2>AI Suggestions for Better Farming Solutions!</h2>
        {sensorData.map((sensor) => (
          <div key={sensor.sensor_id} className="ai-suggestions-container">
            <h4>Suggestions for Sensor {sensor.sensor_id}</h4>
            <p>{aiSuggestions[sensor.sensor_id as keyof typeof aiSuggestions]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropDashboard;