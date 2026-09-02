import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fieldtrace.app',
  appName: 'Field Trace',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      saveToGallery: true
    },
    Media: {
      androidGalleryMode: true
    }
  }
};

export default config;
