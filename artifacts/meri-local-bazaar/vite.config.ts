import path from 'node:path';
import { defineConfig } from 'vite';
import rootConfig from '../../vite.config';

export default defineConfig({
  ...rootConfig,
  root: path.resolve(import.meta.dirname, '../..'),
  base: process.env.BASE_PATH || '/',
  build: {
    ...rootConfig.build,
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
});