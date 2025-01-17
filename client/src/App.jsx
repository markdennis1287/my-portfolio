import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BlogPage from "./components/Blogs";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Invalid reference provided to scrollToSection");
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Main Page with Header */}
          <Route
            path="/"
            element={
              <>
                <Header
                  scrollToSection={scrollToSection}
                  sections={{ homeRef, aboutRef, projectsRef, contactRef }}
                />
                <main className="flex-grow">
                  <div>
                    <section ref={homeRef}>
                      <Home />
                    </section>
                    <section ref={aboutRef}>
                      <About />
                    </section>
                    <section ref={projectsRef}>
                      <Projects />
                    </section>
                    <div className="text-center mt-8">
                      <Link to="/blogs">
                        <button className="w-60 py-3 bg-blue-950 text-white rounded hover:bg-blue-900 transition-transform duration-200 hover:scale-105">
                          Blogs I have written ~
                        </button>
                      </Link>
                    </div>
                    <section ref={contactRef}>
                      <Contact />
                    </section>
                  </div>
                </main>
              </>
            }
          />
          {/* Blogs Page */}
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
