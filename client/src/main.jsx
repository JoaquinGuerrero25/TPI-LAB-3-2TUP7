import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './components/Context/AuthContext.jsx';
import { Provider } from 'react-redux';  
import { store } from './redux/store.js'

axios.defaults.baseURL = 'http://localhost:5190/api';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <NextUIProvider>
    <App />
    </NextUIProvider>
  </AuthProvider>
    </Provider>
  </StrictMode>,
      
)
