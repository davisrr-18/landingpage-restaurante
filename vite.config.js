import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  // No GitHub Pages o workflow define VITE_BASE_PATH a partir do nome do repositório.
  base:
    command === 'build' || isPreview
      ? (process.env.VITE_BASE_PATH ?? '/landingpage-restaurante/')
      : '/',
}));
