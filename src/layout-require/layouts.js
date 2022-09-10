import React from "react";
import { Outlet } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);
  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#d63031",
      },
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <>
        <SearchAppBar
          handleChange={handleChange}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <CssBaseline />
        <Outlet />
      </>
    </ThemeProvider>
  );
}

export default Layout;
