import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      // This will automatically import React where needed
      jsxRuntime: "automatic",
      jsxImportSource: "react",
    }),
  ],
});
