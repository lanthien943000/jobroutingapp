import React, { useState } from "react";
// import SearchAppBar from "./components/SearchAppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import LoginForm from "./pages/LoginForm";
import { AuthProvider } from "./auth-context/AuthContext";
import RequireAuth from "./layout-require/RequiredAuth";
import Layout from "./layout-require/layouts";

function App() {
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
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/login" element={<HomePage />} />
              <Route path="/jobs/:id" element={<HomePage />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/jobs/:id"
              element={<RequireAuth children={<DetailPage />}></RequireAuth>}
            />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
