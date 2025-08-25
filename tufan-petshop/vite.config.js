import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["917b27c8bd1a.ngrok-free.app"], // buraya ngrok hostunu ekle
  },
})
