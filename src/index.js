import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import store from './Redux/Store'
// import { Provider } from 'react-redux';8
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
    <App />
    </Router>
    {/* </Provider> */}
   </React.StrictMode>
);
