import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    testTimeout: 15000,
    css: true,
    coverage: {
      reporter: ['text', 'json', 'json-summary', 'html'],
    },
  },
});
