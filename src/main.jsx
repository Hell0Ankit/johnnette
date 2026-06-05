import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './App.css'    
import App from './App' 
import '@fortawesome/fontawesome-free/css/all.min.css';

// React Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);