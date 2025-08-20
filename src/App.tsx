import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { config } from "./constants/config";

import {
  About,
  Contact,
  Experience,
  Education,       // NEW
  Certification,   // NEW
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "./components";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />

        {/* NEW sections */}
        <Education />
        <Certification />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
