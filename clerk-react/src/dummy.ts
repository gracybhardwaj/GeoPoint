// Import the Convex client
import { convex } from "./api/convex"; // assuming this is where Convex client is initialized

// Dummy data
const farmers = [
  { farmer_id: "farmer_1", email: "farmer1@example.com", password: "password123" },
  { farmer_id: "farmer_2", email: "farmer2@example.com", password: "password123" },
];

const crops = [
  { crop_id: "crop_1", farmer_id: "farmer_1" },
  { crop_id: "crop_2", farmer_id: "farmer_1" },
  { crop_id: "crop_3", farmer_id: "farmer_2" },
];

const sensors = [
  { sensor_id: "sensor_1", crop_id: "crop_1" },
  { sensor_id: "sensor_2", crop_id: "crop_2" },
  { sensor_id: "sensor_3", crop_id: "crop_3" },
];

const records = [
  { sensor_id: "sensor_1", humidity: 45.2, uv: 3.5, temp: 22.1 },
  { sensor_id: "sensor_1", humidity: 48.1, uv: 3.8, temp: 21.4 },
  { sensor_id: "sensor_2", humidity: 52.5, uv: 4.1, temp: 24.3 },
  { sensor_id: "sensor_3", humidity: 47.0, uv: 3.2, temp: 20.0 },
];

// Function to insert dummy data
export async function insertDummyData() {
  try {
    // Insert farmers
    for (const farmer of farmers) {
      await convex.mutation("insertFarmer").call(farmer);
    }

    // Insert crops
    for (const crop of crops) {
      await convex.mutation("insertCrop").call(crop);
    }

    // Insert sensors
    for (const sensor of sensors) {
      await convex.mutation("insertSensor").call(sensor);
    }

    // Insert records
    for (const record of records) {
      await convex.mutation("insertRecord").call(record);
    }

    console.log("Dummy data inserted successfully!");
  } catch (error) {
    console.error("Failed to insert dummy data:", error);
  }
}