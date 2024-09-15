console.log("a")

import dgram from 'dgram'; // Node.js built-in module for UDP
console.log("b")
import axios from 'axios'; // For making API requests
console.log("c")
import convexClient from './convexClient.js'; // Import convexClient for interacting with Convex backend
console.log("d")

// Create UDP socket server using dgram module
const server = dgram.createSocket('udp4');
console.log(server)

// Define the port for the server to listen for UDP packets
const PORT = 5174;

// Handle incoming UDP packets
server.on('message', async (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port} - ${msg}`);

  try {
    // Assuming the packet contains JSON data
    const payload = JSON.parse(msg);

    // Extract sensor data from the payload
    const { humidity, temp, uv, sensor_id } = payload;

    // Optional: Fetch additional details from Monogoto API (like sensor IP)
    const sensorIP = await getSensorIP(sensor_id); // Optional call to an external API

    // Send parsed data to Convex backend using convexClient
    const recordId = await convexClient.createRecord({
      humidity: parseFloat(humidity),
      temp: parseFloat(temp),
      uv: parseFloat(uv),
      sensorid: sensor_id,
    });

    console.log(`Inserted new record with ID: ${recordId}`);
  } catch (err) {
    console.error('Error processing UDP packet:', err);
  }
});

// Fetch sensor IP from Monogoto API (optional)
async function getSensorIP(sensor_id) {
  const url = `https://api.monogoto.io/v1/sensor/${sensor_id}/ip`; // Replace with actual Monogoto API URL
  try {
    const response = await axios.get(url, {
      headers: { 'Authorization': `Bearer YOUR_API_KEY` }, // Replace with your Monogoto API key
    });
    return response.data.ip;
  } catch (error) {
    console.error('Error fetching sensor IP:', error);
  }
}

// Start the UDP server and listen on the specified port
server.bind(PORT, () => {
  console.log(`UDP server listening on port ${PORT}`);

});

await new Promise(((r) => setTimeout(() => r(), 10_000)))
