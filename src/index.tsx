import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "../styles/main.css";


   
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Failed to find the root element');
  const root = createRoot(rootElement);
  root.render(<App />);