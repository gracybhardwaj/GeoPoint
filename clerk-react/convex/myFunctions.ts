import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Mutation to create a new record for sensor data
// fetch all the data for a farmer
// for each farmer, get crops
// for each crop, get sensors that is assigned to the crop
// for each sensor, get the data (like humidity, temp, ...)

export const createRecord = mutation({
  args: { humidity: v.float64(), temp: v.float64(), sensorid: v.string(), uv: v.float64()},
  handler: async (ctx, args) => {
    const newRecordId = await ctx.db.insert("records", {
      humidity: args.humidity,
      temp: args.temp,
      uv: args.uv,
      sensor_id: args.sensorid,
    });
    return newRecordId;
  },
});

export const recordToSensor = mutation({
    args: { sensor_id: v.string(), crop_id: v.string()},
    handler: async (ctx, args) => {
        const newSensorId = await ctx.db.insert("sensors", {
            sensor_id: args.sensor_id,
            crop_id: args.crop_id,
          });
          return newSensorId;
    },
});

export const sensorToCrops = mutation({
    args: { farmer_id: v.string(), crop_id: v.string()},
    handler: async (ctx, args) => {
        const newCropId = await ctx.db.insert("crops", {
            farmer_id: args.farmer_id,
            crop_id: args.crop_id,
          });
          return newCropId;
    },
});

export const cropToFarmer = query({
  args: { farmer_id: v.string() },
  handler: async (ctx, args) => {
    // Step 1: Get all crops for the farmer
    const crops = await ctx.db.query("crops").filter(q => q.eq("farmer_id", args.farmer_id)).collect();
    const cropIds = crops.map(crop => crop.crop_id);
    
    // Step 2: Get all sensors related to those crops using q.or() to compare each field directly
    const sensors = await ctx.db.query("sensors").filter(q => q.or(...cropIds.map(id => q.eq(q.field("crop_id"), id)))).collect();
    const sensorIds = sensors.map(sensor => sensor.sensor_id);

    // Step 3: Fetch all records related to the sensor ids using q.or() as well
    const records = await ctx.db.query("records").filter(q => q.or(...sensorIds.map(id => q.eq(q.field("sensor_id"), id)))).collect();

    // Returning the records
    return records;
  },
});