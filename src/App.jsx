import React, { useState } from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";
import Landing from "./components/landing/Landing";
import Projects from "./components/projects/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
