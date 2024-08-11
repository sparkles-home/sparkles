import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 15000,
    css: true,
    coverage: {
      reporter: ['text', 'json', 'json-summary', 'html']
    }
  }
})
