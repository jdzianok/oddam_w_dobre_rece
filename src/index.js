import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./scss/main.scss";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDFjIYlfepKGa_rCYC8stnZMoQu4iur3mc",
  authDomain: "oddam-w-dobre-rece-d2392.firebaseapp.com",
  databaseURL: "https://oddam-w-dobre-rece-d2392.firebaseio.com",
  projectId: "oddam-w-dobre-rece-d2392",
  storageBucket: "oddam-w-dobre-rece-d2392.appspot.com",
  messagingSenderId: "500593978966",
  appId: "1:500593978966:web:d6ab53212ead67192195f7",
  measurementId: "G-F0R4NHRH54"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
