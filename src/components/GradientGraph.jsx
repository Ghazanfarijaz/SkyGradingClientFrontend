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
//   linearGradient
// } from "recharts";

// const GradientAreaChart = ({ allCards }) => {

//   console.log("all carsd", allCards)
//   // Transform data with X-axis as card sequence
//   const transformedData = allCards.map((card, index) => ({
//     x: index + 1, // 1, 2, 3...
//     grade: card.grade // Actual grade value
//   }));

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <AreaChart
//         data={transformedData}
//         margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
//       >
//         <defs>
//           <linearGradient id="colorGradient" x1="0" x2="0" y1="0" y2="1">
//             <stop offset="30%" stopColor="#FF928A" stopOpacity={0.3} />
//             <stop offset="95%" stopColor="#FF928A" stopOpacity={0.05} />
//           </linearGradient>
//         </defs>
//         <XAxis
//           dataKey="x"
//           domain={[1, allCards.length]}
//           ticks={Array.from({ length: allCards.length }, (_, i) => i + 1)}
//           label={{
//             value: "Card Sequence",
//             position: "insideBottom",
//             offset: -40,
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" }
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 20 }}
//           tickMargin={15}
//           tickLine={false}
//           axisLine={false}
//         />
//         <YAxis
//           domain={[0, 10]}
//           ticks={[0, 2, 4, 6, 8, 10]}
//           label={{
//             value: "GRADES",
//             angle: -90,
//             offset: -10,
//             position: "insideLeft",
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" }
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
//           formatter={(value) => [`Grade: ${value}`]}
//         />
//         <Area
//           type="linear" // Changed from "stepAfter" to "linear"
//           dataKey="grade"
//           stroke="#FF928A"
//           fill="url(#colorGradient)"
//           dot={{ fill: "#FF928A", strokeWidth: 2 }}
//           connectNulls={true}
//         />
//       </AreaChart>
//     </ResponsiveContainer>
//   );
// };

// export default GradientAreaChart;


// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
//   LabelList,
// } from "recharts";

// const GradeBarChartDensity = ({ allCards }) => {

//   console.log("all carsd", allCards)
//   // 1. Group Cards by Grade
//   const gradeGroups = {};
//   allCards.forEach((card) => {
//     const grade = card.grade;
//     if (!gradeGroups[grade]) {
//       gradeGroups[grade] = { count: 0, cardNumbers: [] };
//     }
//     gradeGroups[grade].count++;
//     gradeGroups[grade].cardNumbers.push(card.cardNumber);
//   });

//   // 2. Prepare Data for Bar Chart
//   const barData = Object.keys(gradeGroups).map((grade) => ({
//     grade: parseInt(grade),
//     count: gradeGroups[grade].count,
//     cardNumbers: gradeGroups[grade].cardNumbers,
//   }));

//   // Ensure all grades 0-10 are included
//   for (let i = 0; i <= 10; i++) {
//     if (!barData.find((item) => item.grade === i)) {
//       barData.push({ grade: i, count: 0, cardNumbers: [] });
//     }
//   }

//   // Sort by grade
//   barData.sort((a, b) => a.grade - b.grade);

//   // 3. Custom Tooltip
//   const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       const cardNumbers = payload[0].payload.cardNumbers.join(", ");
//       return (
//         <div className="custom-tooltip" style={{ backgroundColor: "#333", padding: "10px", borderRadius: "5px", color: "#FFF" }}>
//           <p>{`Grade: ${payload[0].payload.grade}`}</p>
//           <p>{`Card Numbers: ${cardNumbers}`}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   // 4. Custom Label for Count
//   const renderCustomLabel = ({ x, y, width, value }) => {
//     return (
//       <g>
//         <text x={x + width / 2} y={y - 10} fill="#666" textAnchor="middle">{value}</text>
//       </g>
//     );
//   };

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart data={barData} margin={{ top: 20, right: 30, left: 30, bottom: 50 }}>
//         <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
//         <XAxis
//           dataKey="grade"
//           domain={[0, 10]}
//           ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
//           label={{
//             value: "Grade",
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
//           tickFormatter={() => ""}
//           label={{
//             value: "Number of Cards",
//             angle: -90,
//             offset: -10,
//             position: "insideLeft",
//             fill: "#FFFFFF",
//             style: { fontSize: 20, fontWeight: "semibold" },
//           }}
//           tickLine={false}
//           axisLine={false}
//         />
//         <Tooltip content={<CustomTooltip />} />
//         <Bar dataKey="count" fill="#8884d8">
//           <LabelList dataKey="count" content={renderCustomLabel} />
//         </Bar>
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default GradeBarChartDensity;



import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Categorize cards into A/B/C tiers
const categorizeCard = (card) => {
  if (card.holographic && card.grade >= 9) {
    return "A";
  } else if (card.grade >= 9 && (card.trackingStatus === "shipped" || card.trackingStatus === "completed")) {
    return "A";
  } else if (card.grade >= 7 || card.trackingStatus === "checking") {
    return "B";
  } else {
    return "C";
  }
};

const GradeBarChartDensity = ({ allCards }) => {
  // 1. Group Cards by Grade AND Tier (A/B/C)
  const gradeTierGroups = {};
  allCards.forEach((card) => {
    const grade = card.grade;
    const tier = categorizeCard(card);

    if (!gradeTierGroups[grade]) {
      gradeTierGroups[grade] = { A: 0, B: 0, C: 0 };
    }
    gradeTierGroups[grade][tier]++;
  });

  // 2. Prepare Stacked Bar Chart Data
  const barData = [];
  for (let grade = 0; grade <= 10; grade++) {
    const group = gradeTierGroups[grade] || { A: 0, B: 0, C: 0 };
    barData.push({
      grade,
      "A-tier (Premium)": group.A,  // Key matches legend name
      "B-tier (Mid)": group.B,
      "C-tier (Basic)": group.C,
    });
  }

  // 3. Custom Tooltip (Fixed: Now reads A/B/C counts correctly)
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Get the full data object for the hovered grade
      const data = payload[0].payload;
      const total = data["A-tier (Premium)"] + data["B-tier (Mid)"] + data["C-tier (Basic)"];
      
      return (
        <div className="custom-tooltip" style={{ 
          backgroundColor: "#333", 
          padding: "10px", 
          borderRadius: "5px", 
          color: "#FFF",
        }}>
          <p><strong>Grade {label}</strong></p>
          <p>A-tier: {data["A-tier (Premium)"]}</p>
          <p>B-tier: {data["B-tier (Mid)"]}</p>
          <p>C-tier: {data["C-tier (Basic)"]}</p>
          <p>Total: {total}</p>
        </div>
      );
    }
    return null;
  };

  // Colors for tiers (matching your original)
  const tierColors = {
    "A-tier (Premium)": "#4CAF50",  // Green
    "B-tier (Mid)": "#FFC107",      // Yellow
    "C-tier (Basic)": "#F44336",    // Red
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      
      <BarChart
        data={barData}
        margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
      >
          
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="grade"
          domain={[0, 10]}
          ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          label={{
            value: "Grade",
            position: "insideBottom",
            offset: -40,
            fill: "#FFFFFF",
            style: { fontSize: 20 },
          }}
          tick={{ fill: "#FFFFFF", fontSize: 14 }}
        />
        <YAxis
          label={{
            value: "Number of Cards",
            angle: -90,
            position: "insideLeft",
            fill: "#FFFFFF",
            style: { fontSize: 20 },
          }}
          tick={{ fill: "#FFFFFF" }}
        />
        <Tooltip content={<CustomTooltip />} />
     
        <Bar 
          dataKey="A-tier (Premium)" 
          stackId="a" 
          fill={tierColors["A-tier (Premium)"]} 
          name="A-tier (Premium)" 
        />
        <Bar 
          dataKey="B-tier (Mid)" 
          stackId="a" 
          fill={tierColors["B-tier (Mid)"]} 
          name="B-tier (Mid)" 
        />
        <Bar 
          dataKey="C-tier (Basic)" 
          stackId="a" 
          fill={tierColors["C-tier (Basic)"]} 
          name="C-tier (Basic)" 
        />
        
         <Legend 
          verticalAlign="top"
          layout="vertical"
          />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GradeBarChartDensity;