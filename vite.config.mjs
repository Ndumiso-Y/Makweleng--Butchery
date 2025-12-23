
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Base path strategy:
  // - GitHub Pages: /Makweleng--Butchery/ (subpath deployment)
  // - cPanel/Local: / (root deployment)
  const base = process.env.GITHUB_PAGES === 'true' ? '/Makweleng--Butchery/' : '/'

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            icons: ['lucide-react']
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            if (/\.(mp4|webm|avi|mov)$/.test(assetInfo.name)) {
              return `assets/videos/[name]-[hash].${ext}`
            }
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/.test(assetInfo.name)) {
              return `assets/images/[name]-[hash].${ext}`
            }
            return `assets/[name]-[hash].${ext}`
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      assetsDir: 'assets'
    },
    publicDir: 'public',
    server: {
      port: 3000,
      host: true
    }
  }
})
