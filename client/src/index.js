import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//theme
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
//core
import "primereact/resources/primereact.min.css";
// prime icons
import "primeicons/primeicons.css";

import "/node_modules/primeflex/primeflex.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
