import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImports from 'unplugin-auto-import/vite'
import { dirResolver, DirResolverHelper } from 'vite-auto-import-resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DirResolverHelper(),
    AutoImports({
      imports: ['vue', 'vitest'],
      resolvers: [
        dirResolver()
      ]
    })
  ],

  test: {

  }
})
