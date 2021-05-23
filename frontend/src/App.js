import React from "react";
import { Provider } from "react-redux";
import Engine from "./Engine";
import Pages from "./Pages";
import Components from "./Components";
import Infra from "./Infra";

const App = () => {
  const engine = Engine();
  const { store } = engine;
  const { sqlApiHandler } = Infra({ engine });
  const components = Components({ engine, sqlApiHandler });
  const { HomePage } = Pages({ components });
  const { Header } = components;

  return (
    <Provider store={store}>
      <div className="page">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
};

export default App;
