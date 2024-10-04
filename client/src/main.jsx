import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
import App from './App.jsx';
import './index.css';

axios.defaults.baseURL = 'http://localhost:3001/'; //pasar a archivo .env

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </StrictMode>,
)
