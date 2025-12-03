import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <div className="relative z-0 bg-primary" id="top">
      <div className="bg-(image:--bg-hero-pattern) bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div>
        <About />
        <Experience />
        <Tech />
      </div>
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
