import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D32F2F", // Darker Red
    },
    secondary: {
      main: "#FFFFFF", // White
    },
    background: {
      default: "#F5F5F5", // Light Gray for background
    },
    text: {
      primary: "#0B1134CC", // Custom color for primary text
      secondary: "#616161", // Gray for secondary text
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
          backgroundColor: "#D32F2F", // Darker Red
          color: "#FFFFFF", // White
          "&:hover": {
            backgroundColor: "#B71C1C", // Even Darker Red for hover effect
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },

  typography: {
    body1: {
      color: "#0B1134CC", // Custom color
    },
    h1: {
      color: "#D32F2F", // Darker Red for headings
    },
    h2: {
      color: "#D32F2F", // Darker Red for headings
    },
    h3: {
      color: "#D32F2F", // Darker Red for headings
    },
    button: {
      textTransform: "none", // Avoid uppercase transformation for buttons
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
