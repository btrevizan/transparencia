const Actions = () => {
  const resultLoaded = (payload) => ({
    type: "RESULT_LOADED",
    payload,
  });

  return {
    resultLoaded,
  };
};
export default Actions;
