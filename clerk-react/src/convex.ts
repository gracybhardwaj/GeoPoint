// src/api/convex.ts
import { ConvexReactClient } from "convex/react";

const convexUrl = import.meta.env.VITE_CONVEX_URL as string;

if (!convexUrl) {
  throw new Error("Missing Convex URL in environment variables");
}

const convex = new ConvexReactClient(convexUrl);

export { convex };