import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Svg, Path } from "react-native-svg";

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
      <Svg height="100" width="100">
        <Polyline
          points="10,10 20,12 30,20 40,60 60,70 95,90"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      </Svg>
    </View>
  );
};

export default RealTimeLineGraph;
