import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Donationform from "./pages/Donationform";
import Donateindividual from "./pages/Donateindividual";
function App() {
  return (
    <div className="relative w-full h-screen border-2 box-border p-0 m-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<Donationform />} />
      </Routes>
    </div>
  );
}

export default App;
