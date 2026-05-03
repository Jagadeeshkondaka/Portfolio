import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;