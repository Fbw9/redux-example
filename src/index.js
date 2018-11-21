import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducers/index";
import Router from "./components/Router";

import "@fortawesome/fontawesome-free/css/all.css";
import "./css/style.css";

// Create Redux store and initialize the app
const store = createStore(
  appReducer,
  {
      filter: 'all',
      toDoItems: {},
      users: [
        {
            id: 1,
            name: 'Johnny Depp', 
        },
        {
            id: 2,
            name: 'Tony Depp', 
        },
        {
            id: 3,
            name: 'Bony Depp', 
        }
      ],
  }
);

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.querySelector("#main")
);
