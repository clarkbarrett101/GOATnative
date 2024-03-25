import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import * as d3Scale from "d3-scale";

const RealTimeLineGraph = ({ data, width, height }) => {
  const [path, setPath] = useState("");

  useEffect(() => {
    const xScale = d3Scale
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3Scale.scaleLinear().domain([0, 100]).range([height, 0]);

    const line = data.map((d, i) => `${xScale(i)},${yScale(d)}`).join(" L ");

    setPath(`M ${line}`);
  }, [data, width, height]);

  return (
    <View>
      <Svg width={width} height={height}>
        <Path d={path} fill="none" stroke="blue" strokeWidth="2" />
      </Svg>
    </View>
  );
};

export default RealTimeLineGraph;
