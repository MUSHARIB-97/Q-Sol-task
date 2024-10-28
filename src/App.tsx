import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux-store/store.js";
import AppRoute from "./routes/Routing.js";
function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
