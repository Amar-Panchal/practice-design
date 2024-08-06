/** @format */

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
import { AppRoutes } from "./Routes";
import Box from "@mui/material/Box";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [mode, setMode] = React.useState("dark");
  const currentTheme = mode === "light" ? lightTheme : darkTheme;

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Router>
          <Box sx={{ display: "flex" }}>
            <Navbar toggleColorMode={toggleColorMode} mode={mode} />
            <Box component='main' className='main' sx={{ flexGrow: 1 }}>
              <AppRoutes />
            </Box>
          </Box>
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
