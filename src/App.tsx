import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Glossary, Home, PlantCare } from "@pages/index";
import { ResponsiveAppBar } from "@components/index";
import { CustomContext } from "contexts/titleContext";

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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/glossary" element={<Glossary />}></Route>
          <Route path="/care" element={<PlantCare />}></Route>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
