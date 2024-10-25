import React from "react";
import AppRoute from "./routes/Routing";
import { Provider } from "react-redux";
import { store } from "./redux-store/store.js";
function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
