import React, { useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DetailPage from "./pages/DetailPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <SearchAppBar
        handleChange={handleChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
