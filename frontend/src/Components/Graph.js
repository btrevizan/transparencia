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

const colors = [
  "#c2f970",
  "#07594a",
  "#212121",
  "#FF8C61",
  "#8D5A97",
  "#BA1200",
  "#F4AC32",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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
      // theme={VictoryTheme.material}
      // domainPadding={10}
      >
        <VictoryGroup
          offset={20}
          colorScale={colors}
          // categories={["2014", "2015", "2016", "2017"]}
        >
          <VictoryBar
            data={[
              { x: "org1", y: 1, label: "2014" },
              { x: "org2", y: 2, label: "2015" },
              { x: "org3", y: 5, label: "2016" },
            ]}
          />
          <VictoryBar
            data={[
              { x: "org1", y: 2, label: "2016" },
              { x: "org3", y: 1, label: "2014" },
              { x: "org2", y: 7, label: "2014" },
            ]}
          />
          <VictoryBar
            data={[
              { x: "org1", y: 3, label: "2017" },
              { x: "org3", y: 4, label: "2015" },
              { x: "org2", y: 9, label: "2016" },
            ]}
          />
        </VictoryGroup>
        {/* <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
        <VictoryBar
          animate={{
            duration: 2000,
            easing: "bounce",
          }}
          style={{
            data: { fill: colors[getRandomInt(0, 6)], width: 25 },
          }}
          data={result}
          x="quarter"
          y="earnings"
        />{" "}
        */}
      </VictoryChart>
    );
  } else {
    return <img src={logo} className="graph-logo" alt="logo" />;
  }
};

export default Graph;
