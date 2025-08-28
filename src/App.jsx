import { LoadingScreeen } from "./components/LoadingScreen";
import React, { useState } from "react";
import { Navbar } from "./components/sections/Navbar";
import { MobileMenu } from "./components/sections/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden w-full">
      {isLoading && (
        <LoadingScreeen
          onComplete={() => {
            setIsLoading(false);
          }}
        />
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        }  text-gray-100`}
      >
        <Navbar menuOpen={menu} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menu} setMenuOpen={setMenuOpen} />
        <main className="flex flex-col items-center w-full max-w-screen overflow-x-hidden">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
