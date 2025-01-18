// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
//   Button,
// } from "@mui/material";

// import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
// import { useGetCardByUserIdQuery } from "../api/apiSlice"; // Import the query hook

// // Sample card data
// const cardData = [
//   {
//     id: "4301955005",
//     name: "Latias & Latios GX",
//     hp: "250",
//     number: "170/81",
//     price: "$2599.00",
//     qty: 1,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: "4285120067",
//     name: "Sylveon GX",
//     hp: "200",
//     number: "92/145",
//     price: "$2599.00",
//     qty: 1,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: "3939762001",
//     name: "Charizard",
//     hp: "120",
//     number: "4/102",
//     price: "$2599.00",
//     qty: 1,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: "1234567890",
//     name: "Pikachu",
//     hp: "60",
//     number: "25/25",
//     price: "$199.99",
//     qty: 1,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: "9876543210",
//     name: "Bulbasaur",
//     hp: "70",
//     number: "45/145",
//     price: "$99.99",
//     qty: 1,
//     image: "https://via.placeholder.com/100",
//   },
// ];

// export default function PastOrder() {

//   const { user, isAuthenticated } = useAuth();

//   // Fetch cards for the authenticated user
//   const { data: cards = [], isLoading, error } = useGetCardByUserIdQuery(user?.id);



//   const itemsPerPage = 2; // Number of items per page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(cardData.length / itemsPerPage);

//   // Slice the data to display items for the current page
//   const paginatedData = cardData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Handle pagination
//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!isAuthenticated) {
//     return (
//       <Typography sx={{ color: "red", textAlign: "center", marginTop: "20px" }}>
//         Please log in to view your cards.
//       </Typography>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: { md: "80vw", xs: "89vw" },
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
//           padding: "4px",
//           background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
//           WebkitMask:
//             "linear-gradient(#000, #000) content-box, linear-gradient(#fff, #fff)",
//           WebkitMaskComposite: "destination-out",
//           maskComposite: "exclude",
//         },
//         zIndex: 1,
//       }}
//     >
//       {/* List of Cards */}
//       <List>
//         {paginatedData.map((card, index) => (
//           <ListItem
//             key={index}
//             sx={{
//               display: "flex",
//               borderRadius: "10px",
//               justifyContent: "space-between",
//               alignItems: "center",
//               padding: "10px 0",
//             }}
//           >
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

//       {/* Pagination Buttons */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: 4,
//         }}
//       >
//         <Button
//           variant="outlined"
//           onClick={handlePrevious}
//           disabled={currentPage === 1}
//           sx={{
//             borderRadius: "50px",
//             padding: "10px 30px",
//             color: "#FFFFFF",
//             borderColor: "#50A1FF",
//             "&:hover": {
//               background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
//               color: "#000",
//             },
//             opacity: currentPage === 1 ? 0.5 : 1, // Fade button when disabled
//           }}
//         >
//           Previous
//         </Button>

//         <Button
//           variant="outlined"
//           onClick={handleNext}
//           disabled={currentPage === totalPages}
//           sx={{
//             borderRadius: "50px",
//             padding: "10px 30px",
//             color: "#FFFFFF",
//             borderColor: "#50A1FF",
//             "&:hover": {
//               background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
//               color: "#000",
//             },
//             opacity: currentPage === totalPages ? 0.5 : 1, // Fade button when disabled
//           }}
//         >
//           Next
//         </Button>
//       </Box>
//     </Box>
//   );
// }




import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";

import { useAuth } from "../authentication/authProvider"; // Import useAuth hook
import { useGetCardByUserIdQuery } from "../api/apiSlice"; // Import the query hook

export default function PastOrder() {
  const { user, isAuthenticated } = useAuth();

  // Fetch cards for the authenticated user
  const { data: cards = [], isLoading, error } = useGetCardByUserIdQuery(user?.id);

  const itemsPerPage = 2; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Filter cards with trackingStatus === 'completed'
  const pastOrders = cards.filter((card) => card.trackingStatus === "delivered");
  console.log("pastOrders => ", pastOrders);

  // Calculate the total number of pages based on filtered data
  const totalPages = Math.ceil(pastOrders.length / itemsPerPage);

  // Slice the data to display items for the current page
  const paginatedData = pastOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle pagination
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!isAuthenticated) {
    return (
      <Typography sx={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Please log in to view your past orders.
      </Typography>
    );
  }

  if (isLoading) {
    return <Typography sx={{ textAlign: "center" }}>Loading...</Typography>;
  }

  if (error) {
    return <Typography sx={{ textAlign: "center", color: "red" }}>Failed to fetch data.</Typography>;
  }

  if (pastOrders.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", marginTop: "20px", color: "#FFF" }}>
        No past orders found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: { md: "80vw", xs: "89vw" },
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
      {/* List of Past Orders */}
      <List>
        {paginatedData.map((card, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              borderRadius: "10px",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
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

      {/* Pagination Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <Button
          variant="outlined"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          sx={{
            borderRadius: "50px",
            padding: "10px 30px",
            color: "#FFFFFF",
            borderColor: "#50A1FF",
            "&:hover": {
              background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
              color: "#000",
            },
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
        >
          Previous
        </Button>

        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          sx={{
            borderRadius: "50px",
            padding: "10px 30px",
            color: "#FFFFFF",
            borderColor: "#50A1FF",
            "&:hover": {
              background: "linear-gradient(to left, #FFFFFF, #50A1FF)",
              color: "#000",
            },
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
