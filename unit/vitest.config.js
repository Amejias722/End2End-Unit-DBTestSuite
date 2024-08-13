import { defineConfig } from 'vitest/config';
import { configDefaults } from 'vitest/dist/config.js';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      exclude: [
        ...(configDefaults?.coverage?.exclude || []),
        'serializer.js',
        'setup.js'
      ]
    },
    environment: 'happy-dom',
    globals: true,
    root: '.',
    setupFiles: [
      './setup.js'
    ]
  }
});
