import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["16a316fa4b2f.ngrok-free.app"], // buraya ngrok hostunu ekle
  },
})
