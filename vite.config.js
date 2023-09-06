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
  "@elements" : fileURLToPath(new URL ("./src/components/elements", import.meta.url)),
  "@api" : fileURLToPath(new URL ("./src/api", import.meta.url)),
  "@components" :fileURLToPath(new URL ("./src/components/components", import.meta.url)),
  "@store" :fileURLToPath(new URL ("./src/store/slices", import.meta.url)),
  "@Js" : fileURLToPath(new URL ("./src/Js", import.meta.url)),
  "@static" :fileURLToPath(new URL ('./src/static', import.meta.url)),
  "@pages" : fileURLToPath(new URL ('./src/pages', import.meta.url)),
  "@css" : fileURLToPath(new URL ('./src/assets/css', import.meta.url))
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasConfig
  }
})
