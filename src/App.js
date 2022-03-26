import { useState } from "react";

import Home from "./components/sections/Home";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./styles.css";

export default function App() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      <main id="main">
        <Home setActiveItem={setActiveItem} />
        <Features setActiveItem={setActiveItem} />
        <Pricing setActiveItem={setActiveItem} />
        <Contact setActiveItem={setActiveItem} />
      </main>
      <Footer />
    </>
  );
}
