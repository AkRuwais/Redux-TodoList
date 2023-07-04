import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./Component/Form.jsx";
import Header from "./Component/Header.jsx";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import ShowList from "./Component/ShowList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Header />
    <Form />
    <ShowList/>
   
    <App />
  </Provider>
);
