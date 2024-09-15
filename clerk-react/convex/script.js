import axios from 'axios';

const MONOGOTO_API_URL = 'https://api.monogoto.io/v1/satellite/data';
const API_KEY = 'your_api_key_here';

const fetchSatelliteData = async () => {
  try {
    const response = await axios.get(MONOGOTO_API_URL, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const satelliteData = response.data;
    console.log('Satellite Data:', satelliteData);

    await sendDataToConvexBackend(satelliteData);

  } catch (error) {
    console.error('Error fetching satellite data:', error);
  }
};

const sendDataToConvexBackend = async (data) => {
  try {
    const convexBackendUrl = 'https://console.monogoto.io/thing/ThingId_ICCID_89999257300100802967/';
    const response = await axios.post(convexBackendUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Data sent to Convex:', response.data);
  } catch (error) {
    console.error('Error sending data to Convex backend:', error);
  }
};

fetchSatelliteData();