import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'url'

// const aliasConfig = {
//   '@icons': path.resolve(__dirname, 'src/path/to/icons'),
// };
// https://vitejs.dev/config/

const aliasConfig = {
  "@" : fileURLToPath(new URL("./src", import.meta.url)),
  "@images" : fileURLToPath(new URL ("./src/static/images", import.meta.url)),
  "@icons" : fileURLToPath(new URL ("./src/static/icons", import.meta.url)),
  "@shared" : fileURLToPath(new URL ("./src/components/shared", import.meta.url)),
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasConfig
  }
})
