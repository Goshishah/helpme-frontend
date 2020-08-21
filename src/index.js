import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { loginAction } from "./redux/userReducer";
import { getAuthToken, verifyService } from "./services/authService";

verifyService()
  .then((response) => {
    const { success, data } = response;
    if (success) {
      store.dispatch(loginAction({ ...data, isAuthenticated: true }));
    }
  })
  .catch((error) => console.log(error));

// store.dispatch(loginAction({ isAuthenticated: false }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
