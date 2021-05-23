import Loading from "./Loading";
import Header from "./Header";
import Graph from "./Graph";
import QueryFormWrapper from "./QueryForm";

const Components = ({ sqlApiHandler }) => {
  const QueryForm = QueryFormWrapper({ sqlApiHandler });

  return {
    Loading,
    Header,
    Graph,
    QueryForm,
  };
};

export default Components;
