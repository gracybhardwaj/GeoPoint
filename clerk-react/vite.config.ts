import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // Specify dgram (and other Node.js built-ins if necessary) as external
      external: ['dgram'],
    },
  },
  // You can add other Vite configurations here for your frontend if necessary
});
