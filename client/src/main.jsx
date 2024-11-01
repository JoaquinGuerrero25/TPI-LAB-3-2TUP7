import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
import App from './App.jsx';
import './index.css';

axios.defaults.baseURL = 'https://localhost:7238/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </StrictMode>,
)
