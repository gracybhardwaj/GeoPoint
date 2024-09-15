import { ConvexHttpClient } from "convex/browser";

const convexClient = new ConvexHttpClient("https://handsome-possum-4.convex.cloud"); 
export const createRecord = async ({ humidity, temp, uv, sensorid }) => {
  try {
    const recordId = await convexClient.mutation("createRecord", { humidity, temp, uv, sensorid });
    return recordId;
  } catch (err) {
    console.error("Error creating record:", err);
    throw err;
  }
};

export default { createRecord };
