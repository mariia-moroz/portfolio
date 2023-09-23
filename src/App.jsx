import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import {
  About,
  Contact,
  Education,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Tech />
        <Works />
        <Contact />
        <StarsCanvas />
        <div className='absolute inset-0 z-[-3] w-full h-full gradient-01 opacity-20'></div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
