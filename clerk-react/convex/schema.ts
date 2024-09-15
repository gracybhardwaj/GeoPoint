import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  records: defineTable({
    humidity: v.float64(),
    uv: v.float64(),
    temp: v.float64(),
    sensor_id: v.string(),
  }),
  sensors: defineTable({
    sensor_id: v.string(),
    crop_id: v.string(),
  }),
  crops: defineTable({
    crop_id: v.string(),
    farmer_id: v.string()
  }),
  farmers: defineTable({
    farmer_id: v.string(),
    email: v.string(),
    password: v.string(),
  }),
});
