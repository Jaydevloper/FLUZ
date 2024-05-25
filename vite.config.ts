import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      data: path.resolve(__dirname, "./src/data"),
      store: path.resolve(__dirname, "./src/app"),
      routes: path.resolve(__dirname, "./src/routes"),
      modules: path.resolve(__dirname, "./src/modules"),
      pages: path.resolve(__dirname, "./src/pages"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      services: path.resolve(__dirname, "./src/services"),
      features: path.resolve(__dirname, "./src/features"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
  build: {
    rollupOptions: {
      external: ["app/store"],
    },
  },
});
