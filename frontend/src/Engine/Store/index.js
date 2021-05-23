import { createStore } from "redux";

const Store = (reducer) => {
  return createStore(reducer);
};

export default Store;
