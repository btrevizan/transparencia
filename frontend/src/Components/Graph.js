import React, { useState, useEffect } from "react";
import { useStore } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
} from "victory";
import logo from "../Style/Icons/transparency-color.png";

const Graph = () => {
  const store = useStore();
  const storeResult = store.getState().result;
  const [result, setResult] = useState(storeResult);

  useEffect(() => {
    setResult([
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ]);
  }, [storeResult]);

  if (result) {
    return (
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryBar data={result} x="quarter" y="earnings" />
      </VictoryChart>
    );
  } else {
    return <img src={logo} className="graph-logo" alt="logo" />;
  }
};

export default Graph;
