import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
