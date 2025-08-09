import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    strictPort: true,
    allowedHosts: [/\.csb\.app$/, /\.codesandbox\.io$/],
    hmr: {
      protocol: "wss",
      host: "https://mjqlf9-8080.csb.app",
      clientPort: 443,
    },
    origin: "https://mjqlf9-8080.csb.app",
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
