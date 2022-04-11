import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';
import './index.css'

const config = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// init firebase
initializeApp(config);
const app = createApp(App);

//app use
app.use(createPinia());

//app mount
app.mount('#app');

