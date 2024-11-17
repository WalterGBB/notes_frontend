import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        /*cuando las solicitudes no tratan de obtener el CSS o JavaScript de la aplicación),
        la solicitud se redirigirá a el servidor en http://localhost:3001*/
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  },
})
