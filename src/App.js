import React, { useState } from "react";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Scroll } from "./components/Scroll";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Scroll>
          <Routes></Routes>
        </Scroll>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
