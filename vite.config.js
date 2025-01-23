import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import bableComp from 'babel-plugin-react-compiler'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react({
    babel: {
      plugins: [bableComp]
    }
  })],
  server: {
    host: true
  }
})
