import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLabel,
  VictoryStack,
} from "victory";
import logo from "../Style/Icons/transparency-color.png";

const colors = [
  "#c2f970",
  "#07594a",
  "#212121",
  "#FF8C61",
  "#8D5A97",
  "#BA1200",
  "#F4AC32",
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const formatValue = (value) => {
  if (value >= 1000000000000) {
    return `${value / 1000000000000} T`;
  } else if (value >= 1000000000) {
    return `${value / 1000000000} B`;
  } else if (value >= 1000000) {
    return `${value / 1000000} M`;
  } else {
    return `${value / 1000} K`;
  }
};

const groupBy = (key, array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const getTheme = (condition) => {
  return condition ? VictoryTheme.material : VictoryTheme.grayscale;
};
const AxisGraph = (result) => {
  const labelOnTop = result.length > 10;

  return (
    <VictoryChart
      domainPadding={20}
      // width={700}
      // height={500}
      theme={getTheme(labelOnTop)}
      style={{ grid: { stroke: "none" } }}
    >
      <VictoryAxis
        tickFormat={(x) => {
          return labelOnTop ? "" : `${x}`;
        }}
      />
      <VictoryAxis dependentAxis tickFormat={(y) => formatValue(y)} />
      <VictoryBar
        animate={{
          duration: 2000,
          easing: "bounce",
        }}
        style={{
          data: { fill: colors[getRandomInt(0, 6)] },
          labels: { fontSize: 10, fontWeight: "bold", fill: "white" },
        }}
        labels={({ datum }) => {
          return labelOnTop ? `${datum.x}` : "";
        }}
        labelComponent={<VictoryLabel angle={-50} textAnchor="start" />}
        data={result}
        x="x"
        y="y"
      />
    </VictoryChart>
  );
};

const GroupGraph = (result) => {};

const Graph = () => {
  const storeResult = useSelector((store) => store.result);
  const [result, setResult] = useState(storeResult);

  useEffect(() => {
    if (storeResult && storeResult.length > 0) {
      setResult(storeResult);
    }
  }, [storeResult]);

  if (result) {
    if (!result[0].z) {
      return AxisGraph(result);
    } else {
      return GroupGraph(result);
    }
    // return (
    //   <VictoryChart
    //     // adding the material theme provided with Victory
    //     // theme={VictoryTheme.material}
    //     domainPadding={20}
    //   >
    //     {/* <VictoryGroup
    //       offset={20}
    //       colorScale={colors}
    //       // categories={["2014", "2015", "2016", "2017"]}
    //     >
    //       <VictoryBar
    //         data={[
    //           { x: "org1", y: 1, label: "2014" },
    //           { x: "org2", y: 2, label: "2015" },
    //           { x: "org3", y: 5, label: "2016" },
    //         ]}
    //       />
    //       <VictoryBar
    //         data={[
    //           { x: "org1", y: 2, label: "2016" },
    //           { x: "org3", y: 1, label: "2014" },
    //           { x: "org2", y: 7, label: "2014" },
    //         ]}
    //       />
    //       <VictoryBar
    //         data={[
    //           { x: "org1", y: 3, label: "2017" },
    //           { x: "org3", y: 4, label: "2015" },
    //           { x: "org2", y: 9, label: "2016" },
    //         ]}
    //       />
    //     </VictoryGroup> */}
    //   </VictoryChart>
    // );
  } else {
    return <img src={logo} className="graph-logo" alt="logo" />;
  }
};

export default Graph;
