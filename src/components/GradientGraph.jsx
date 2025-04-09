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

const GradeBarChartDensity = ({ allCards, selectedCard }) => {
  // Debugging: Log the input props
  console.log("GradeBarChartDensity props:", { allCards, selectedCard });

  // Safely handle allCards input
  let cardsArray = [];
  try {
    if (Array.isArray(allCards)) {
      cardsArray = allCards;
    } else if (allCards && typeof allCards === "object") {
      cardsArray = [allCards];
    }
  } catch (error) {
    console.error("Error processing allCards:", error);
  }

  // Debugging: Log processed cardsArray
  console.log("Processed cardsArray:", cardsArray);

  // Filter cards from the same set AND with the same certification number
  const filteredCards = cardsArray.filter((card) => {
    const sameSet =
      card && card.set && selectedCard && card.set === selectedCard.set;
    const sameCertification =
      card &&
      card.certificationNumber &&
      selectedCard &&
      card.certificationNumber === selectedCard.certificationNumber;
    return sameSet && sameCertification;
  });

  // Debugging: Log filtered cards
  console.log(
    "Filtered cards (same set and certification number):",
    filteredCards
  );

  // Group cards by grade
  const gradeGroups = {};
  filteredCards.forEach((card) => {
    const grade = Math.floor(Number(card.grade));
    if (!isNaN(grade) && grade >= 0 && grade <= 10) {
      gradeGroups[grade] = (gradeGroups[grade] || 0) + 1;
    }
  });

  // Prepare chart data - ensure all grades 0-10 are represented
  const barData = Array.from({ length: 11 }, (_, grade) => ({
    grade,
    count: gradeGroups[grade] || 0,
  }));

  // Debugging: Log final barData
  console.log("Chart data:", barData);

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#333",
            padding: "10px",
            borderRadius: "5px",
            color: "#FFF",
          }}
        >
          <p>
            <strong>Grade {label}</strong>
          </p>
          <p>Number of cards: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  // If no data, show a message
  if (filteredCards.length === 0) {
    return (
      <div
        style={{
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "1.2rem",
        }}
      >
        No cards found from the "{selectedCard?.set || "selected"}" set with
        certification number "{selectedCard?.certificationNumber || ""}"
      </div>
    );
  }

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
          dataKey="count"
          fill="#8884d8"
          name={`Cards from ${selectedCard?.set || "selected set"} (Cert #${
            selectedCard?.certificationNumber || ""
          })`}
        />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GradeBarChartDensity;
