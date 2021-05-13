import SQLApiHandler from "./SQLApiHandler";

const Infra = ({ engine }) => {
  const sqlApiHandler = SQLApiHandler({ engine });
  return {
    sqlApiHandler,
  };
};

export default Infra;
