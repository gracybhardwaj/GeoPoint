import esbuild from 'esbuild'; // Use ES module import for esbuild

// Build configuration for ESBuild
esbuild.build({
  entryPoints: ['./udpServer.js'], // Path to your backend file
  bundle: true,
  platform: 'node', // Important: Specify Node.js as the platform
  target: ['node14'], // Optionally specify the Node.js version you're targeting
  outfile: './dist/udpServer.js', // Output file
  external: ['axios'], // Mark axios as external to prevent bundling
}).catch(() => process.exit(1));
