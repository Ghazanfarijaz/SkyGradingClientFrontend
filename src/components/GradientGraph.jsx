import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  defs,
  linearGradient,
} from "recharts";

const data = [
  { grade: "A", cards: 10 },
  { grade: 1, cards: 10 },
  { grade: 2, cards: 50 },
  { grade: 3, cards: 20 },
  { grade: 4, cards: 85 },
  { grade: 5, cards: 45 },
  { grade: 6, cards: 65 },
  { grade: 7, cards: 85 },
  { grade: 8, cards: 45 },
  { grade: 9, cards: 45 },
  { grade: 10, cards: 50 },
];

const GradientAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height={700}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 50 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="30%" stopColor="#FF928A" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#FF928A" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="grade"
          label={{
            value: "GRADES",
            position: "insideBottom",
            offset: -40, // Adjust label position
            fill: "#FFFFFF",
            style: { fontSize: 20, fontWeight: "semibold" }, // Larger font size
          }}
          tick={{ fill: "#FFFFFF", fontSize: 20 }} // Larger tick font size
          tickMargin={15}
          tickLine={false} // Removes tick lines
          axisLine={false} // Removes X-axis line
        />
        <YAxis
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
          label={{
            value: "Number of Cards",
            angle: -90,
            offset: -10, // Adjust label position
            position: "insideLeft",
            fill: "#FFFFFF",
            style: { fontSize: 20, fontWeight: "semibold" }, // Larger font size
          }}
          tick={{ fill: "#FFFFFF", fontSize: 20 }} // Larger tick font size
          tickMargin={15}
          tickLine={false} // Removes tick lines
          axisLine={false} // Removes X-axis line
        />
        {/* Grid Disabled */}
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          horizontal={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="cards"
          stroke="#FF928A"
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GradientAreaChart;
