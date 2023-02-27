import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //配置Scss
  css: {
    preprocessorOptions: {
      scss: {
        //地址
        additionalData: `@import "./src/styles/sassConfig.scss";`
      }
    }
  }
})
