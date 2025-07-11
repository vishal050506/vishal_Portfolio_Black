import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Project from "./Pages/Project";
import Footer from "./Components/Footer";
import CanvasCursorComponent from "./Components/CanvasComponent";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  // --------------Simulate a loading effect-----------------------------
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust timeout as needed
  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="text-center">
  //         <div className="loader"></div>
  //         <p>Loading, please wait...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // -------------------------------------------------------------------

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
