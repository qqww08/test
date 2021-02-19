import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styled from "styled-components";

const COLORS = ["#424755", "#878064", "#746161"];

const RADIAN = Math.PI / 180;

const Chart = ({ data, title }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    id,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        {Math.floor(percent * 100) > 0 && (
          <text
            x={x}
            y={y}
            fill="black"
            textAnchor={"middle"}
            dominantBaseline="central"
            style={{ fontWeight: "bold", fontSize: "16.5px" }}
          >
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        )}
      </>
    );
  };
  return (
    <__ChartWrapper>
      <__Title>{title}</__Title>
      <PieChart width={290} height={290}>
        <Pie
          data={data}
          innerRadius={40}
          outerRadius={110}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </__ChartWrapper>
  );
};
const __ChartWrapper = styled.div`
  width: 100%;
`;
const __Title = styled.p`
  text-align: center;
`;
export default Chart;
