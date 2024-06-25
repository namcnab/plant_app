import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Glossary, Home, PlantDetails } from "@pages/index";
import { ResponsiveAppBar } from "@components/index";
import { CustomContext } from "contexts/titleContext";
import { Container } from "@mui/material";
import Footer from "@components/Footer";

function App() {
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
        <Container maxWidth="xl" sx={{ marginBottom: "3%" }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/glossary" element={<Glossary />}></Route>
            <Route path="/plant_details" element={<PlantDetails />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
