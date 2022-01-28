import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart(props) {
  return (
    <div
      id="chart"
      className="m-5 p-5 bg-white shadow-lg shadow-indigo-500/50 rounded-xl"
    >
      <h3 id="chartTitle" className="mb-5">
        {props.title}
      </h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={props.data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          {props.dataKeys.map((dataKey) => (
            <Line
              key={dataKey.title}
              type={dataKey.type}
              stroke={dataKey.stroke}
              dataKey={dataKey.title}
            />
          ))}
          {props.grid && <CartesianGrid stroke="#faeaea" />}

          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
