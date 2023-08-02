import React, { useState } from "react";
import "./App.css";
import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import Home from "../src/components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteApp from "./RouteApp";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar} />
    <Sidebar
      openSidebarToggle={openSidebarToggle}
      OpenSidebar={OpenSidebar}
    />
    <Home />
  </div>
      <BrowserRouter>
        <Routes>
          <Route path="/routeapp" element={<RouteApp />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
