import axios from "axios";

const SQLApiHandler = ({ engine }) => {
  const {
    store: { dispatch },
    actions: { resultLoaded },
  } = engine;

  const BaseUrl = "http://127.0.0.1:5000";
  const getQueryResult = (query) => {
    const url = `${BaseUrl}/${query}`;
    return axios.get(url).then((res) => {
      console.log("res: ", res);
      dispatch(resultLoaded(res.data.result));
    });
  };

  return {
    getQueryResult,
  };
};

export default SQLApiHandler;
