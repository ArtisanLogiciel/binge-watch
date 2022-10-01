import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#111",
    },
    secondary: {
      main: "#000",
    },
  },
});

const AppProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppProviders };
