import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BlogPage from "./pages/Blogs"; // Separate blogs page

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          scrollToSection={scrollToSection}
          sections={{ homeRef, aboutRef, projectsRef, contactRef }}
        />
        <main className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div>
                  <div ref={homeRef}>
                    <Home />
                  </div>
                  <div ref={aboutRef}>
                    <About />
                  </div>
                  <div ref={projectsRef}>
                    <Projects />
                  </div>
                  <div className="text-center mt-8">
                    <Link to="/blogs">
                      <button className="bg-blue-800 text-white px-4 py-2 rounded">
                        View My Blogs
                      </button>
                    </Link>
                  </div>
                  <div ref={contactRef}>
                    <Contact />
                  </div>
                </div>
              }
            />
            {/* Blogs Page */}
            <Route path="/blogs" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
