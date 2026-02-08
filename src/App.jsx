import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
          </>
        }/>
          
        <Route path="/project" element={
          <>
            <Project />
          </>
        }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
