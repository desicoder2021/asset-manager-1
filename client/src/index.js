import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//theme
import "primereact/resources/themes/lara-light-blue/theme.css";
// import "primereact/resources/themes/tailwind-light/theme.css";
//core
import "primereact/resources/primereact.min.css";
// prime icons
import "primeicons/primeicons.css";

import "/node_modules/primeflex/primeflex.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
