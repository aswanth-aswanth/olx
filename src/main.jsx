import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FirebaseContext } from "./store/context.jsx";
import Context from "./store/context.jsx";
import firebase from "./firebase/config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ firebase }}>
      <Context>
        <App />
      </Context>
    </FirebaseContext.Provider>
  </BrowserRouter>
);
