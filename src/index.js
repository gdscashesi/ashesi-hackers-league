// libraries
import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";

// styles
import "scss/global.scss";
import { ErrorBoundary } from "pages/errors/errorboundary/ErrorBoundary";

// utils

// redux

// miscillaneous

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
