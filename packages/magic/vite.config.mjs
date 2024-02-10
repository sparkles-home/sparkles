import path from 'node:path'

import { defineConfig as defineViteConfig } from 'vite'
import viteDts from 'vite-plugin-dts'

/*
|==========================================================================
| vite
|==========================================================================
|
| Build tool for modern web development.
|
*/

/**
 * Vite config
 *
 * @link https://vitejs.dev/config/
 */
export default defineViteConfig({
  base: '/',
  plugins: [viteDts({ rollupTypes: true })],
  build: {
    outDir: path.join(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'unicorn',
      fileName: 'unicorn'
    }
  }
})
