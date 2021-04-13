import Loading from "./Loading";
import Header from "./Header";
import Graph from "./Graph";
import QueryFormWrapper from "./QueryForm";

const Components = () => {

  const QueryForm = QueryFormWrapper();

  return {
    Loading,
    Header,
    Graph,
    QueryForm
  };
};

export default Components;
