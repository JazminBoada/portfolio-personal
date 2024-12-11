import "./App.css";
import MouseLight from "./components/effects/MouseLight";
import Aboutme from "./components/layouts/Aboutme";
import Contact from "./components/layouts/Contact";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import Projects from "./components/layouts/Projects";
import Skills from "./components/layouts/Skills";

function App() {
  return (
    <div className="relative min-h-screen bg-darkBlack overflow-hidden">
      <MouseLight className="z-0" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
