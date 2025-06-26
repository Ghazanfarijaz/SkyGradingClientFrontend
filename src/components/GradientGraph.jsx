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

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const GradeBarChartDensity = ({ allCards, selectedCard }) => {
//   // Debugging: Log the input props
//   console.log("GradeBarChartDensity props:", { allCards, selectedCard });

//   // Safely handle allCards input
//   let cardsArray = [];
//   try {
//     if (Array.isArray(allCards)) {
//       cardsArray = allCards;
//     } else if (allCards && typeof allCards === 'object') {
//       cardsArray = [allCards];
//     }
//   } catch (error) {
//     console.error("Error processing allCards:", error);
//   }

//   // Debugging: Log processed cardsArray
//   console.log("Processed cardsArray:", cardsArray);

//   // Filter cards from the same set
//   const cardsFromSameSet = cardsArray.filter(card => {
//     return card && card.set && selectedCard && card.set === selectedCard.set;
//   });

//   // Debugging: Log filtered cards
//   console.log("Cards from same set:", cardsFromSameSet);

//   // Group cards by grade
//   const gradeGroups = {};
//   cardsFromSameSet.forEach(card => {
//     const grade = Math.floor(Number(card.grade));
//     if (!isNaN(grade) && grade >= 0 && grade <= 10) {
//       gradeGroups[grade] = (gradeGroups[grade] || 0) + 1;
//     }
//   });

//   // Prepare chart data - ensure all grades 0-10 are represented
//   const barData = Array.from({ length: 11 }, (_, grade) => ({
//     grade,
//     count: gradeGroups[grade] || 0,
//   }));

//   // Debugging: Log final barData
//   console.log("Chart data:", barData);

//   // Custom Tooltip
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="custom-tooltip" style={{
//           backgroundColor: "#333",
//           padding: "10px",
//           borderRadius: "5px",
//           color: "#FFF",
//         }}>
//           <p><strong>Grade {label}</strong></p>
//           <p>Number of cards: {payload[0].value}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   // If no data, show a message
//   if (cardsFromSameSet.length === 0) {
//     return (
//       <div style={{
//         height: 500,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         fontSize: '1.2rem'
//       }}>
//         No cards found from the "{selectedCard?.set || 'selected'}" set
//       </div>
//     );
//   }

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart
//         data={barData}
//         margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" vertical={false} />
//         <XAxis
//           dataKey="grade"
//           domain={[0, 10]}
//           ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
//           label={{
//             value: "Grade",
//             position: "insideBottom",
//             offset: -40,
//             fill: "#FFFFFF",
//             style: { fontSize: 20 },
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 14 }}
//         />
//         <YAxis
//           label={{
//             value: "Number of Cards",
//             angle: -90,
//             position: "insideLeft",
//             fill: "#FFFFFF",
//             style: { fontSize: 20 },
//           }}
//           tick={{ fill: "#FFFFFF" }}
//         />
//         <Tooltip content={<CustomTooltip />} />
//         <Bar
//           dataKey="count"
//           fill="#8884d8"
//           name={`Cards from ${selectedCard?.set || 'selected set'}`}
//         />
//         <Legend />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default GradeBarChartDensity;

// last one june 2025

// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from "recharts";

// const GradeBarChartDensity = ({ allCards, selectedCard }) => {
//   // Debugging: Log the input props
//   console.log("GradeBarChartDensity props:", { allCards, selectedCard });

//   // Safely handle allCards input
//   let cardsArray = [];
//   try {
//     if (Array.isArray(allCards)) {
//       cardsArray = allCards;
//     } else if (allCards && typeof allCards === "object") {
//       cardsArray = [allCards];
//     }
//   } catch (error) {
//     console.error("Error processing allCards:", error);
//   }

//   // Debugging: Log processed cardsArray
//   console.log("Processed cardsArray:", cardsArray);

//   // Filter cards from the same set AND with the same certification number
//   const filteredCards = cardsArray.filter((card) => {
//     const sameSet =
//       card && card.set && selectedCard && card.set === selectedCard.set;
//     const sameCertification =
//       card &&
//       card.certificationNumber &&
//       selectedCard &&
//       card.certificationNumber === selectedCard.certificationNumber;
//     return sameSet && sameCertification;
//   });

//   // Debugging: Log filtered cards
//   console.log(
//     "Filtered cards (same set and certification number):",
//     filteredCards
//   );

//   // Group cards by grade
//   const gradeGroups = {};
//   filteredCards.forEach((card) => {
//     const grade = Math.floor(Number(card.grade));
//     if (!isNaN(grade) && grade >= 0 && grade <= 10) {
//       gradeGroups[grade] = (gradeGroups[grade] || 0) + 1;
//     }
//   });

//   // Prepare chart data - ensure all grades 0-10 are represented
//   const barData = Array.from({ length: 11 }, (_, grade) => ({
//     grade,
//     count: gradeGroups[grade] || 0,
//   }));

//   // Debugging: Log final barData
//   console.log("Chart data:", barData);

//   // Custom Tooltip function
//   const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//       return (
//         <div
//           className="custom-tooltip"
//           style={{
//             backgroundColor: "#333",
//             padding: "10px",
//             borderRadius: "5px",
//             color: "#FFF",
//           }}
//         >
//           <p>
//             <strong>Grade {label}</strong>
//           </p>
//           <p>Number of cards: {payload[0].value}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   // If no data, show a message
//   if (filteredCards.length === 0) {
//     return (
//       <div
//         style={{
//           height: 500,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           fontSize: "1.2rem",
//         }}
//       >
//         No cards found from the "{selectedCard?.set || "selected"}" set with
//         certification number "{selectedCard?.certificationNumber || ""}"
//       </div>
//     );
//   }

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <BarChart
//         data={barData}
//         margin={{ top: 20, right: 30, left: 30, bottom: 50 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" vertical={false} />
//         <XAxis
//           dataKey="grade"
//           domain={[0, 10]}
//           ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
//           label={{
//             value: "Grade",
//             position: "insideBottom",
//             offset: -40,
//             fill: "#FFFFFF",
//             style: { fontSize: 20 },
//           }}
//           tick={{ fill: "#FFFFFF", fontSize: 14 }}
//         />
//         <YAxis
//           label={{
//             value: "Number of Cards",
//             angle: -90,
//             position: "insideLeft",
//             fill: "#FFFFFF",
//             style: { fontSize: 20 },
//           }}
//           tick={{ fill: "#FFFFFF" }}
//         />
//         <Tooltip content={<CustomTooltip />} />
//         <Bar
//           dataKey="count"
//           fill="#8884d8"
//           name={`Cards from ${selectedCard?.set || "selected set"} (Cert #${
//             selectedCard?.certificationNumber || ""
//           })`}
//         />
//         <Legend />
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

  // Custom Tooltip function with enhanced styling
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 backdrop-blur-sm bg-opacity-95 p-4 rounded-lg border border-gray-600 shadow-2xl">
          <p className="text-white font-bold text-lg mb-1">Grade {label}</p>
          <p className="text-blue-300">
            Cards:{" "}
            <span className="font-semibold text-white">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Enhanced empty state with better styling
  if (filteredCards.length === 0) {
    return (
      <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-2xl">
        <div className="p-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              No Data Available
            </h3>
            <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
              No cards found from the "{selectedCard?.set || "selected"}" set
              with certification number "
              {selectedCard?.certificationNumber || ""}"
            </p>
          </div>
        </div>

        {/* Custom Responsive Legend */}
        <div className="mt-4 flex items-center justify-center px-4">
          <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-lg px-4 py-3 border border-gray-600">
            <div className="w-4 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-sm mr-3 flex-shrink-0"></div>
            <span className="text-gray-200 text-sm font-medium truncate">
              {selectedCard?.set || "Selected Set"} (Cert #
              {selectedCard?.certificationNumber || "N/A"})
            </span>
          </div>
        </div>
      </div>
    );
  }

  const totalCards = filteredCards.length;
  const avgGrade =
    filteredCards.reduce((sum, card) => sum + Number(card.grade), 0) /
    totalCards;

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Grade Distribution Analysis
            </h2>
            <p className="text-blue-100 text-sm">
              {selectedCard?.set || "Selected Set"} • Cert #
              {selectedCard?.certificationNumber || "N/A"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
              <div className="text-white font-bold text-lg">{totalCards}</div>
              <div className="text-blue-100">Total Cards</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
              <div className="text-white font-bold text-lg">
                {avgGrade.toFixed(1)}
              </div>
              <div className="text-blue-100">Avg Grade</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="p-6">
        <div className="h-96 sm:h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#1e40af" stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#374151"
                strokeOpacity={0.5}
              />
              <XAxis
                dataKey="grade"
                domain={[0, 10]}
                ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                label={{
                  value: "Grade",
                  position: "insideBottom",
                  offset: -45,
                  style: {
                    textAnchor: "middle",
                    fill: "#e5e7eb",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                tick={{
                  fill: "#d1d5db",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
                axisLine={{ stroke: "#6b7280", strokeWidth: 2 }}
                tickLine={{ stroke: "#6b7280", strokeWidth: 1 }}
              />
              <YAxis
                label={{
                  value: "Number of Cards",
                  angle: -90,
                  position: "insideLeft",
                  style: {
                    textAnchor: "middle",
                    fill: "#e5e7eb",
                    fontSize: "16px",
                    fontWeight: "bold",
                  },
                }}
                tick={{
                  fill: "#d1d5db",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
                axisLine={{ stroke: "#6b7280", strokeWidth: 2 }}
                tickLine={{ stroke: "#6b7280", strokeWidth: 1 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
              />
              <Bar
                dataKey="count"
                fill="url(#barGradient)"
                name={`${selectedCard?.set || "Selected Set"} (Cert #${
                  selectedCard?.certificationNumber || ""
                })`}
                radius={[4, 4, 0, 0]}
                stroke="#1e40af"
                strokeWidth={1}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer with additional info */}
      <div className="bg-gray-800 bg-opacity-50 px-6 py-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm text-center">
          Distribution shows cards graded from 0-10 for matching set and
          certification number
        </p>
      </div>
    </div>
  );
};

export default GradeBarChartDensity;
