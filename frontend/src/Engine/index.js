import reducer from "./Reducer";
import Actions from "./Actions";
import Store from "./Store";

const Engine = () => {
  const actions = Actions();
  const store = Store(reducer);
  return {
    store,
    actions,
  };
};

export default Engine;
