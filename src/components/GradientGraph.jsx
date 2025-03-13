// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   defs,
//   linearGradient,
// } from "recharts";

// const data = [
//   { grade: "A", cards: 10 },
//   { grade: 1, cards: 10 },
//   { grade: 2, cards: 50 },
//   { grade: 3, cards: 20 },
//   { grade: 4, cards: 85 },
//   { grade: 5, cards: 45 },
//   { grade: 6, cards: 65 },
//   { grade: 7, cards: 85 },
//   { grade: 8, cards: 45 },
//   { grade: 9, cards: 45 },
//   { grade: 10, cards: 50 },
// ];

// const GradientAreaChart = ({allCards}) => {

//   console.log("all carsd" , allCards)

//   const formattedData = allCards.map((item) => ({
//     grade: item.grade || "N/A",
//     cards: item.cardNumber || 0, // Use a property suitable for the chart
//   }));

//   console.log("data format" , formattedData)


//   return (
//     <ResponsiveContainer width="100%" height={700}>
//       <AreaChart
//         data={formattedData}
//         margin={{ top: 10, right: 30, left: 30, bottom: 50 }}
//       >
//         <defs>
//           <linearGradient id="colorGradient" x1="0" x2="0" y1="0" y2="1">
//             <stop offset="30%" stopColor="#FF928A" stopOpacity={0.3} />
//             <stop offset="95%" stopColor="#FF928A" stopOpacity={0.05} />
//           </linearGradient>
//         </defs>
//         <XAxis
//           dataKey="grade"
//           label={{
//             value: "GRADES",
//             position: "insideBottom",
//             offset: -40, // Adjust label position
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" }, // Larger font size
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 20 }} // Larger tick font size
//           tickMargin={15}
//           tickLine={false} // Removes tick lines
//           axisLine={false} // Removes X-axis line
//         />
//         <YAxis
//           domain={[0, 100]}
//           ticks={[0, 20, 40, 60, 80, 100]}
//           label={{
//             value: "Number of Cards",
//             angle: -90,
//             offset: -10, // Adjust label position
//             position: "insideLeft",
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" }, // Larger font size
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 20 }} // Larger tick font size
//           tickMargin={15}
//           tickLine={false} // Removes tick lines
//           axisLine={false} // Removes X-axis line
//         />
//         {/* Grid Disabled */}
//         <CartesianGrid
//           strokeDasharray="3 3"
//           vertical={false}
//           horizontal={false}
//         />
//         <Tooltip />
//         <Area
//           type="monotone"
//           dataKey="cards"
//           stroke="#FF928A"
//           fill="url(#colorGradient)"
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// };

// export default GradientAreaChart;



//=========================================



// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   defs,
//   linearGradient,
// } from "recharts";

// // Sample data with "A" replaced by 0
// const data = [
//   { grade: 0, cards: 10 }, // "A" replaced by 0
//   { grade: 1, cards: 10 },
//   { grade: 2, cards: 50 },
//   { grade: 3, cards: 20 },
//   { grade: 4, cards: 85 },
//   { grade: 5, cards: 45 },
//   { grade: 6, cards: 65 },
//   { grade: 7, cards: 85 },
//   { grade: 8, cards: 45 },
//   { grade: 9, cards: 45 },
//   { grade: 10, cards: 50 },
// ];

// const GradientAreaChart = ({ allCards }) => {
//   // Format the data
//   const formattedData = allCards.map((item) => ({
//     grade: item.grade === "A" ? 0 : Number(item.grade), // Convert "A" to 0 and others to numbers
//     cards: item.cardNumber || 0,
//   }));

//   // Sort data by grade
//   formattedData.sort((a, b) => a.grade - b.grade);

//   return (
//     <ResponsiveContainer width="100%" height={700}>
//       <AreaChart
//         data={formattedData}
//         margin={{ top: 10, right: 30, left: 30, bottom: 50 }}
//       >
//         <defs>
//           <linearGradient id="colorGradient" x1="0" x2="0" y1="0" y2="1">
//             <stop offset="30%" stopColor="#FF928A" stopOpacity={0.3} />
//             <stop offset="95%" stopColor="#FF928A" stopOpacity={0.05} />
//           </linearGradient>
//         </defs>
//         <XAxis
//           dataKey="grade"
//           type="number" // Use numeric type for the x-axis
//           domain={[0, 10]} // Set domain from 0 to 10
//           ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} // Explicitly set ticks
//           label={{
//             value: "GRADES",
//             position: "insideBottom",
//             offset: -40,
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" },
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 20 }}
//           tickMargin={15}
//           tickLine={false}
//           axisLine={false}
//         />
//         <YAxis
//           domain={[0, 100]}
//           ticks={[0, 20, 40, 60, 80, 100]}
//           label={{
//             value: "Number of Cards",
//             angle: -90,
//             offset: -10,
//             position: "insideLeft",
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" },
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 20 }}
//           tickMargin={15}
//           tickLine={false}
//           axisLine={false}
//         />
//         <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
//         <Tooltip
//           contentStyle={{
//             backgroundColor: "#333",
//             border: "none",
//             borderRadius: "5px",
//             color: "#FFF",
//           }}
//           formatter={(value) => [`Cards: ${value}`, ""]}
//         />
//         <Area
//           type="monotone"
//           dataKey="cards"
//           stroke="#FF928A"
//           fill="url(#colorGradient)"
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// };

// export default GradientAreaChart;


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
  linearGradient
} from "recharts";

const GradientAreaChart = ({ allCards }) => {
  // Transform data with X-axis as card sequence
  const transformedData = allCards.map((card, index) => ({
    x: index + 1, // 1, 2, 3...
    grade: card.grade // Actual grade value
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        data={transformedData}
        margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="30%" stopColor="#FF928A" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#FF928A" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="x"
          domain={[1, allCards.length]}
          ticks={Array.from({ length: allCards.length }, (_, i) => i + 1)}
          label={{
            value: "Card Sequence",
            position: "insideBottom",
            offset: -40,
            fill: "#FFFFFF",
            style: { fontSize: 20, fontWeight: "semibold" }
          }}
          tick={{ fill: "#FFFFFF", fontSize: 20 }}
          tickMargin={15}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          domain={[0, 10]}
          ticks={[0, 2, 4, 6, 8, 10]}
          label={{
            value: "GRADES",
            angle: -90,
            offset: -10,
            position: "insideLeft",
            fill: "#FFFFFF",
            style: { fontSize: 20, fontWeight: "semibold" }
          }}
          tick={{ fill: "#FFFFFF", fontSize: 20 }}
          tickMargin={15}
          tickLine={false}
          axisLine={false}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#333",
            border: "none",
            borderRadius: "5px",
            color: "#FFF",
          }}
          formatter={(value) => [`Grade: ${value}`]}
        />
        <Area
          type="linear" // Changed from "stepAfter" to "linear"
          dataKey="grade"
          stroke="#FF928A"
          fill="url(#colorGradient)"
          dot={{ fill: "#FF928A", strokeWidth: 2 }}
          connectNulls={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default GradientAreaChart;