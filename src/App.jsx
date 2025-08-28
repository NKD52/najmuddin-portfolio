import { LoadingScreeen } from "./components/LoadingScreen";
import React, { useState, useEffect } from "react";
import { Navbar } from "./components/sections/Navbar";
import { MobileMenu } from "./components/sections/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

import "./index.css";

function App() {
  const [isloading, setIsLoading] = useState(false);
  const [menu, setMenuOpen] = useState(false);

  return (
    <div>
      {!isloading && (
        <LoadingScreeen
          onComplete={() => {
            setIsLoading(true);
          }}
        />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menu} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menu} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
