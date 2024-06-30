import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Glossary, Home, PlantDetails } from "@pages/index";
import { ResponsiveAppBar } from "@components/index";
import { CustomContext } from "contexts/titleContext";
import { Container } from "@mui/material";
import Footer from "@components/Footer";

function App() {
  const appStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const contentStyles = {
    flexGrow: 1,
  };

  function StateProvider({ children }) {
    const [title, setTitle] = useState("");
    return (
      <CustomContext.Provider value={{ title, setTitle }}>
        {children}
      </CustomContext.Provider>
    );
  }

  return (
    <StateProvider>
      <BrowserRouter>
        <ResponsiveAppBar />
        <div style={appStyles}>
          <Container
            maxWidth="xl"
            sx={{ ...contentStyles, marginBottom: "10%" }}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/glossary" element={<Glossary />}></Route>
              <Route path="/plant_details" element={<PlantDetails />}></Route>
            </Routes>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
