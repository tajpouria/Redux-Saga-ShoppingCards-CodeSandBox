import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./redux/store";
import ShoppingCard from "./ShoppingCard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Provider store={configureStore({})}>
        <ShoppingCard />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
