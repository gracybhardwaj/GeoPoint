// src/components/CropDashboard.tsx
import React, { useState, useEffect } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api'; // Import the auto-generated API from Convex

// Define the interface for the query result
interface Record {
  sensor_id: string;
  humidity: number;
  temp: number;
  uv: number;
}

interface CropDashboardProps {
  farmerId: string; // Explicitly defining the type for farmerId
}

function CropDashboard({ farmerId }: CropDashboardProps) {
  // Fetch records from the Convex backend for the given farmerId
  const records = useQuery(api.myFunctions.cropToFarmer, { farmer_id: farmerId }); // Pass function reference, not string
  
  const [crops, setCrops] = useState<Record[]>([]); // Using Record type

  useEffect(() => {
    if (records) {
      // Update the crop data based on the records fetched
      setCrops(records);
    }
  }, [records]);

  return (
    <div>
      {/* Render the crop data */}
      {crops.map((crop, index) => (
        <div key={index}>
          <h3>Sensor ID: {crop.sensor_id}</h3>
          <p>Humidity: {crop.humidity}%</p>
          <p>Temperature: {crop.temp}°C</p>
          <p>UV Index: {crop.uv}</p>
        </div>
      ))}
    </div>
  );
}

export default CropDashboard;