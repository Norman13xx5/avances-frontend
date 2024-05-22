import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@s': fileURLToPath(new URL('./src/modules/shared', import.meta.url)),
      '@a': fileURLToPath(new URL('./src/modules/auth', import.meta.url)),
      '@pa': fileURLToPath(new URL('./src/modules/patients', import.meta.url)),
      '@pau': fileURLToPath(new URL('./src/modules/patients/submodules/user', import.meta.url)),
      '@pah': fileURLToPath(new URL('./src/modules/patients/submodules/history', import.meta.url)),
      '@pr': fileURLToPath(new URL('./src/modules/professionals', import.meta.url)),
      '@pru': fileURLToPath(
        new URL('./src/modules/professionals/submodules/user', import.meta.url)
      ),
      '@prh': fileURLToPath(
        new URL('./src/modules/professionals/submodules/history', import.meta.url)
      )
    }
  }
})
