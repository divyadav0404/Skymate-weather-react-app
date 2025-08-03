import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: "/skymate-weather-react-app/",  // 👈 this line is the key!
  plugins: [react()],
})
