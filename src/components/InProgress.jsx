// import React from "react";
// import {
//   Box,
//   Typography,
//   Divider,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
// } from "@mui/material";

// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook


// // Sample card data
// const cardData = [
//   {
//     id: "4301955005",
//     name: "Latias & Latios GX",
//     hp: "250",
//     number: "170/81",
//     price: "$2599.00",
//     qty: 1,
//     image: "https://via.placeholder.com/100", // Replace with the actual image path
//   },
//   {
//     id: "4285120067",
//     name: "Sylveon GX",
//     hp: "200",
//     number: "92/145",
//     price: "$2599.00",
//     qty: 1,
//     image: "https://via.placeholder.com/100", // Replace with the actual image path
//   },
//   {
//     id: "3939762001",
//     name: "Charizard",
//     hp: "120",
//     number: "4/102",
//     price: "$2599.00",
//     qty: 1,
//     image: "https://via.placeholder.com/100", // Replace with the actual image path
//   },
// ];

// export default function InProgress() {

//     const { user, isAuthenticated } = useAuth();
  
//     console.log(user.id);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         // width: "100%",
//         // width: "1100px", // Uniform width
//         // width: { md: "90%", xs: "100%" },
//         width: { md: "80vw", xs: "100%" },
//         borderRadius: "40px",
//         padding: 4,
//         marginBottom: 4,
//         color: "#FFFFFF",
//         display: "flex",
//         flexDirection: "column",
//         textAlign: "left",
//         background: "transparent",
//         letterSpacing: "5px",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           borderRadius: "40px",
//           padding: "4px", // Adjust thickness of gradient border
//           background: "linear-gradient(to left, #FFFFFF, #50A1FF)", // Gradient for the border
//           WebkitMask:
//             "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)", // Mask to apply gradient only to the border
//           WebkitMaskComposite: "destination-out",
//           maskComposite: "exclude",
//         },
//         zIndex: 1, // Ensure content inside remains above the border
//       }}
//     >
//       {/* List of Cards */}
//       <List>
//         {cardData.map((card, index) => (
//           <ListItem
//             key={index}
//             sx={{
//               display: "flex",
//               width: "75vw",
//               borderRadius: "10px",
//               flexDirection: { md: "row", xs: "column" },
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "10px 0",
//             }}
//           >
//             {/* Left Side - Image and Details */}
//             <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//               <ListItemAvatar>
//                 <Avatar
//                   src={card.image}
//                   variant="rounded"
//                   sx={{ width: 80, height: 80, border: "1px solid #02CCFE" }}
//                 />
//               </ListItemAvatar>
//               <ListItemText
//                 primary={
//                   <Typography sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
//                     {card.id}
//                   </Typography>
//                 }
//                 secondary={
//                   <Typography
//                     sx={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       fontSize: "14px",
//                     }}
//                   >
//                     {card.name} | HP {card.hp} | {card.number}
//                   </Typography>
//                 }
//               />
//             </Box>

//             {/* Right Side - Price and Quantity */}
//             <Box sx={{ textAlign: "right" }}>
//               <Typography
//                 sx={{
//                   color: "#FFFFFF",
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                 }}
//               >
//                 {card.price}
//               </Typography>
//               <Typography
//                 sx={{
//                   color: "rgba(255, 255, 255, 0.7)",
//                   fontSize: "14px",
//                 }}
//               >
//                 Qty: {card.qty}
//               </Typography>
//             </Box>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// }


import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";

import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
import { useGetCardByUserIdQuery } from "../api/apiSlice"; // Import the query hook

export default function InProgress() {
  const { user, isAuthenticated } = useAuth();

  // Fetch cards for the authenticated user
  const { data: cards = [], isLoading, error } = useGetCardByUserIdQuery(user?.id);

  console.log("cards => ", cards);

  if (!isAuthenticated) {
    return (
      <Typography sx={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Please log in to view your cards.
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Typography sx={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        Loading your cards...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography sx={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Failed to fetch cards: {error.message}
      </Typography>
    );
  }

  // Filter cards with trackingStatus === 'inprogress'
  const inProgressCards = cards.filter((card) => card.trackingStatus === "inprogress" || card.trackingStatus === "N/A");
  console.log("trackingStatus => ", inProgressCards);

  return (
    <Box
      sx={{
        position: "relative",
        width: { md: "80vw", xs: "100%" },
        borderRadius: "40px",
        padding: 4,
        marginBottom: 4,
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        background: "transparent",
        letterSpacing: "5px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "40px",
          padding: "4px",
          background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
          WebkitMask:
            "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        },
        zIndex: 1,
      }}
    >
      {/* List of Cards */}
      <List>
        {inProgressCards.map((card, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              width: "75vw",
              borderRadius: "10px",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            {/* Left Side - Image and Details */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ListItemAvatar>
                <Avatar
                  src={card.image}
                  variant="rounded"
                  sx={{ width: 80, height: 80, border: "1px solid #02CCFE" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
                    {card.id}
                  </Typography>
                }
                secondary={
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    {card.name} | HP {card.hp} | {card.number}
                  </Typography>
                }
              />
            </Box>

            {/* Right Side - Price and Quantity */}
            <Box sx={{ textAlign: "right" }}>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {card.price}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "14px",
                }}
              >
                Qty: {card.qty}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
