import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Project from "./Pages/Project";
import Footer from "./Components/Footer";
import CanvasCursorComponent from "./Components/CanvasComponent";
function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[7vw]">
        <Navbar />
        <CanvasCursorComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
