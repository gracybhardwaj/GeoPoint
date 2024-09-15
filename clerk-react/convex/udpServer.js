import dgram from 'dgram'; // ES module import
import axios from 'axios'; // ES module import
import convexClient from './convexClient.js'; // Use .js extension for ES modules

// Create UDP socket server
const server = dgram.createSocket('udp4');

// Define a port to listen to UDP packets (change as needed)
const PORT = 41234;

server.on('listening', () => {
    console.log('UDP server is up and listening on port', PORT);
  });

// Handle incoming UDP packets
server.on('message', async (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port} - ${msg}`);

  try {
    // Assuming the packet contains JSON data
    const payload = JSON.parse(msg);

    // Extract sensor data
    const { humidity, temp, uv, sensor_id } = payload;

    // Optional: Fetch additional details from Monogoto API, like IP addresses
    const sensorIP = await getSensorIP(sensor_id);

    // Send parsed data to Convex backend
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
  const url = `https://api.monogoto.io/v1/sensor/${sensor_id}/ip`; // Replace with actual Monogoto API
  try {
    const response = await axios.get(url, {
      headers: { 'Authorization': `Bearer YOUR_API_KEY` },
    });
    return response.data.ip;
  } catch (error) {
    console.error('Error fetching sensor IP:', error);
  }
}

// Start listening for UDP packets
server.bind(PORT, () => {
  console.log(`UDP server listening on port ${PORT}`);
});

