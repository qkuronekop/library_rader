import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'library_rader',
  plugins: [
    vue(),
    VitePWA({ manifest: {
      lang: 'ja',
      name: '図書館レーダー',
      short_name: '図書館',
      background_color: '#fff',
      theme_color: '#50C1E9',
      display: 'standalone',
      scope: 'library_rader',
      start_url: 'library_rader',
      icons: [
        {
          src: 'icon.png',
          size: '72x72',
          type: 'image/png',
        },
        {
          src: 'icon192.png',
          size: '192x192',
          type: 'image/png',
        },
        {
          src: 'icon512.png',
          size: '512x512',
          type: 'image/png',
        }
      ]
    } }),
  ],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.calil.jp',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // }
})
