import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/ContactUs";

import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms/" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactForm />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;