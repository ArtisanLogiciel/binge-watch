import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { UserContextProvider } from "./userContext";

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

const AppContextProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>{children}</UserContextProvider>
    </ThemeProvider>
  );
};

export { AppContextProviders };
