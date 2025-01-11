import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02CCFE", // Replace with your Tailwind primary color
    },
    secondary: {
      main: "#1e293b", // Replace with Tailwind's secondary color
    },
    text: {
      primary: "#F2F2F2", // Tailwind white for text
    },
  },
});

export default theme;
