import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const App = () => {
    (window as any).hello()
    return <div>Hello world</div>;
  };
   
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Failed to find the root element');
  const root = createRoot(rootElement);
  root.render(<App />);