import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl border mx-auto bg-[#1A1A1A]">
      <App />
    </div>
  </React.StrictMode>
);
