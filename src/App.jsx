import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header2 from "./Components/Header2";
import Studio from "./Pages/Studio";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App w-full h-screen">
      <BrowserRouter>
        <Header2 />
        <Routes>
          <>
            <Route path="/" element={<Home />}></Route>
            <Route path="/studio" element={<Studio />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
