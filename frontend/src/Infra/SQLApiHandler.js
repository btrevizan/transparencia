import axios from "axios";

const SQLApiHandler = ({ engine }) => {
  const {
    store: { dispatch },
    actions: { resultLoaded },
  } = engine;
  //   const buildOptions = (headerOptions = null) => {
  //     return {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         ...headerOptions
  //       }
  //     };
  //   };

  //   const getQueryResult = (query) => {
  //     const url = `${BaseUrl}/query`;
  //     return axios
  //       .get(url, buildOptions())
  //       .then((res) => dispatch(resultLoaded(res.data)));
  //   };

  //   return {
  //     getQueryResult,
  //   };
};

export default SQLApiHandler;
