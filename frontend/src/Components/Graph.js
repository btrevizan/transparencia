/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLabel,
  VictoryStack,
  VictoryTooltip,
} from "victory";
import logo from "../Style/Icons/transparency-color.png";

const colors = [
  "#07594a",
  "#212121",
  "#BA1200",
  "#8D5A97",
  "#FF8C61",
  "#c2f970",
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

const compare = (a, b) => {
  if (a.x < b.x) {
    return -1;
  }
  if (a.x > b.x) {
    return 1;
  }
  return 0;
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

const exampleVictoryGroupChart = () => (
  <VictoryChart
    style={{
      axis: { stroke: "black" },
      grid: { stroke: "none", fill: "none" },
    }}
    domainPadding={20}
  >
    <VictoryAxis
      // tickFormat={() => ""}
      style={{ tickLabels: { angle: 50 } }}
    />
    <VictoryAxis dependentAxis tickFormat={(y) => formatValue(y)} />
    <VictoryGroup
      offset={20}
      colorScale={colors}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      style={{
        axis: { stroke: "black", fill: "black" },
        grid: { stroke: "none", fill: "none" },
        labels: { fontSize: 10, fontWeight: "bold", fill: "white" },
      }}
      labelComponent={<VictoryLabel dy={15} textAnchor="middle" />}
    >
      <VictoryStack
      // labelComponent={<VictoryLabel angle={-50} textAnchor="start" />}
      // labels={({ datum }) => datum.x}
      >
        <VictoryBar
          // barWidth={10}
          data={[
            { x: "org1", y: 1000000, label: "2014" },
            { x: "org2", y: 2000000, label: "2014" },
            { x: "org3", y: 5000000, label: "2014" },
          ]}
        />
        <VictoryBar
          data={[
            { x: "org1", y: 2000000, label: "2015" },
            { x: "org2", y: 1000000, label: "2015" },
            { x: "org3", y: 7000000, label: "2015" },
          ]}
        />
        <VictoryBar
          data={[
            { x: "org1", y: 3000000, label: "2016" },
            { x: "org2", y: 4000000, label: "2016" },
            { x: "org3", y: 9000000, label: "2016" },
          ]}
        />
      </VictoryStack>
    </VictoryGroup>
  </VictoryChart>
);

const AxisGraph = (result) => {
  const labelOnTop = result[0].x.length > 4 || result.length > 11;

  return (
    <VictoryChart
      domainPadding={30}
      width={700}
      height={500}
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
          labels: { fontSize: 10, fontWeight: "bold", fill: "black" },
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

const GroupGraph = (result) => {
  // TEST DATA
  const data = [
    { x: 2013, y: 24956.18, z: "Advocacia-Geral da Uni�o" },
    { x: 2013, y: 4442.84, z: "CONTROLADORIA GERAL DA UNI�O" },
    {
      x: 2013,
      y: 416694.08,
      z: "Minist�rio da Agricultura; Pecu�ria e Abastec",
    },
    { x: 2013, y: 3655.12, z: "Minist�rio da Cidadania" },
    {
      x: 2013,
      y: 48339.42,
      z: "Minist�rio da Ci�ncia; Tecnologia; Inova��es ",
    },
    { x: 2013, y: 301960.84, z: "Minist�rio da Defesa" },
    { x: 2013, y: 1015243.26, z: "Minist�rio da Economia" },
    { x: 2013, y: 323627, z: "Minist�rio da Educa��o" },
    { x: 2013, y: 23649.37, z: "Minist�rio da Infraestrutura" },
    { x: 2013, y: 86285.27, z: "Minist�rio da Justi�a e Seguran�a P�blica" },
    { x: 2013, y: 7691.36, z: "Minist�rio da Pesca e Aquicultura" },
    { x: 2013, y: 158954.26, z: "Minist�rio da Sa�de" },
    { x: 2013, y: 1384.3, z: "Minist�rio das Comunica��es" },
    { x: 2013, y: 295, z: "Minist�rio das Rela��es Exteriores" },
    { x: 2013, y: 72166.52, z: "Minist�rio de Minas e Energia" },
    { x: 2013, y: 75151.57, z: "Minist�rio do Desenvolvimento Regional" },
    { x: 2013, y: 42900, z: "Minist�rio do Meio Ambiente" },
    { x: 2013, y: 90431.66, z: "Minist�rio do Trabalho e Emprego" },
    { x: 2013, y: 30481.78, z: "Presid�ncia da Rep�blica" },
    { x: 2014, y: 2850832237.1, z: "Advocacia-Geral da Uni�o" },
    { x: 2014, y: 4795, z: "CONS. REG. DE CORRETORES DE IMOVEIS DE MG" },
    { x: 2014, y: 15465.24, z: "CONS.REG.DE FIS.E TERAPIA OCUP.DA 13� RG" },
    { x: 2014, y: 3325.5, z: "CONSELHO DE ARQUITETURA E URBANISMO DO RS" },
    { x: 2014, y: 209327.23, z: "CONSELHO FEDERAL DE ECONOMIA" },
    { x: 2014, y: 1876568, z: "CONSELHO FEDERAL DE ENGENHARIA E AGRONOMIA" },
    { x: 2014, y: 4783793.39, z: "CONSELHO FEDERAL DE MEDICINA" },
    { x: 2014, y: 806242093.68, z: "CONTROLADORIA GERAL DA UNI�O" },
    { x: 2014, y: 1367984.06, z: "Defensoria Pública da União" },
    { x: 2014, y: 4357993.47, z: "Ministério das Cidades" },
    {
      x: 2014,
      y: 14750386092.7806,
      z: "Minist�rio da Agricultura; Pecu�ria e Abastec",
    },
    { x: 2014, y: 30016550523.38, z: "Minist�rio da Cidadania" },
    {
      x: 2014,
      y: 12609639458.22,
      z: "Minist�rio da Ci�ncia; Tecnologia; Inova��es ",
    },
    { x: 2014, y: 6083472.01, z: "Minist�rio da Cultura" },
    { x: 2014, y: 85202355993.7369, z: "Minist�rio da Defesa" },
    { x: 2014, y: 1312943162944.5, z: "Minist�rio da Economia" },
    { x: 2014, y: 116264347323.9364, z: "Minist�rio da Educa��o" },
    {
      x: 2014,
      y: 5972634.71,
      z: "Minist�rio da Ind�stria; Com�rcio Exterior e ",
    },
    { x: 2014, y: 17678927336.82, z: "Minist�rio da Infraestrutura" },
    {
      x: 2014,
      y: 10028217662.8194,
      z: "Minist�rio da Justi�a e Seguran�a P�blica",
    },
    {
      x: 2014,
      y: 31272848.48,
      z: "Minist�rio da Mulher; Fam�lia e Direitos Huma",
    },
    { x: 2014, y: 126733745.09, z: "Minist�rio da Pesca e Aquicultura" },
    { x: 2014, y: 371067787832.16, z: "Minist�rio da Previd�ncia Social" },
    { x: 2014, y: 99841088126.2187, z: "Minist�rio da Sa�de" },
    { x: 2014, y: 1640285491.39, z: "Minist�rio das Comunica��es" },
    { x: 2014, y: 326100, z: "Minist�rio das Mulheres; Igualdade Racial; da" },
    { x: 2014, y: 2826476008.67, z: "Minist�rio das Rela��es Exteriores" },
    { x: 2014, y: 38958802664.22, z: "Minist�rio de Minas e Energia" },
    { x: 2014, y: 401540849.43, z: "Minist�rio do Desenvolvimento Agr�rio" },
    {
      x: 2014,
      y: 27465858139.168,
      z: "Minist�rio do Desenvolvimento Regional",
    },
    { x: 2014, y: 31813645.96, z: "Minist�rio do Esporte" },
    { x: 2014, y: 2194592201.61, z: "Minist�rio do Meio Ambiente" },
    {
      x: 2014,
      y: 63764717.5,
      z: "Minist�rio do Planejamento; Desenvolvimento e",
    },
    { x: 2014, y: 2770676487.486, z: "Minist�rio do Trabalho e Emprego" },
    { x: 2014, y: 1223145398.6826, z: "Minist�rio do Turismo" },
    { x: 2014, y: 2086573478.51, z: "Presid�ncia da Rep�blica" },
    { x: 2014, y: 259671883.3516, z: "REPUBLICA FEDERATIVA DO BRASIL" },
    { x: 2014, y: 0, z: "Sem informa��o" },
  ];

  /**
   * Function to change data keys for victory charts
   */
  // const labeledData = data.map(({ x, y, z }) => {
  //   return { x: z, y: y, label: x };
  // });

  /**
   * Function to get only organizations that have data on at least two years
   * in hope of getting something to work, but didnt help
   */
  // const sortedData = labeledData.sort(compare).filter((value, index, array) => {
  //   const pair = array.filter((elem) => elem.x == value.x);
  //   return pair.length === 2 ? true : false;
  // });

  // EXAMPLE DATA FROM RECHARTS
  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  // ];

  /**
   * Reducer to make data as data example from recharts
   */
  const groupedData = data.reduce((r, a) => {
    const index = r.findIndex((x) => x.name === a.z);
    if (index === -1) {
      r.push({ name: a.z, [`${a.x}`]: a.y });
    } else {
      r[index][a.x] = a.y;
    }
    return r;
  }, []);

  // group data by year so we now how many stacks we need
  const groupedDateData = groupBy("x", data);

  // RECHARTS TRY
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={700}
        height={500}
        data={groupedData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Create one bar for each year */}
        {Object.keys(groupedDateData).map((date, idx) => {
          return (
            <Bar
              key={idx}
              dataKey={date}
              // data={groupedDateData[date]}
              fill={colors[idx]}
            />
          );
        })}

        {/* 
          // example bars from recharts
        <Bar dataKey="label" stackId="a" fill="#8884d8" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  );

  /// VICTORY CHARTS TRY
  // return (
  //   <VictoryChart theme={VictoryTheme.material} width={800} height={500}>
  //     <VictoryAxis
  //       // tickFormat={() => ""}
  //       style={{ tickLabels: { angle: -50, lineHeight: 40 } }}
  //     />
  //     <VictoryAxis dependentAxis tickFormat={(y) => formatValue(y)} />
  //     <VictoryGroup
  //       offset={20}
  //       colorScale={colors}
  //       animate={{
  //         duration: 2000,
  //         onLoad: { duration: 1000 },
  //       }}
  //       style={{
  //         axis: { stroke: "black", fill: "black" },
  //         grid: { stroke: "none", fill: "none" },
  //         labels: { fontSize: 10, fontWeight: "bold", fill: "white" },
  //       }}
  //       labelComponent={<VictoryLabel dy={15} textAnchor="middle" />}
  //     >
  //       <VictoryStack
  //       // labelComponent={<VictoryLabel angle={-50} textAnchor="start" />}
  //       // labels={({ datum }) => datum.x}
  //       >
  //         {/* Create one bar for each year */}
  //         {Object.keys(groupedDateData).map((date, idx) => {
  //           return (
  //             <VictoryBar
  //               barRatio={0.25}
  //               key={idx}
  //               data={groupedDateData[date]}
  //               x="x"
  //               y="y"
  //               labelComponent={<VictoryTooltip />}
  //             />
  //           );
  //         })}
  //         {/* <VictoryBar data={groupedDateData[2014]} /> */}
  //         {/* <VictoryBar data={groupedDateData[2013]} /> */}
  //       </VictoryStack>
  //     </VictoryGroup>
  //   </VictoryChart>
  // );
};

const Graph = () => {
  const storeResult = useSelector((store) => store.result);
  const [result, setResult] = useState(storeResult);

  useEffect(() => {
    // setResult([{ x: "o", y: "s", z: "a" }]); // force app to go to groupchart
    if (storeResult && storeResult.length > 0) {
      setResult(storeResult);
    }
  }, [storeResult]);

  if (result) {
    // If result does not have 3 dimensions, call AxisGraph
    if (!result[0].z) {
      return AxisGraph(result);
    } else {
      return GroupGraph(result);
    }
    // WORKING VICTORY CHARTS GROUP EXAMPLE CHART
    // return exampleVictoryGroupChart();
  } else {
    return <img src={logo} className="graph-logo" alt="logo" />;
  }
};

export default Graph;
