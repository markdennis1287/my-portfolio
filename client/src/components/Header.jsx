import React, { useState } from 'react';

function Header({ scrollToSection, sections }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = sections;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="text-white sticky top-0 z-50 bg-[#160a1a] shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/dm-high-resolution-logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-black"
          />
          <h1 className="text-2xl font-bold">
            <button
              onClick={() => scrollToSection(homeRef)}
              className="hover:text-[#4b9fee] transition-colors duration-300"
            >
              Dennis Miring'u
            </button>
          </h1>
        </div>

        <button
          className="md:hidden flex flex-col space-y-1 p-2 rounded bg-[#210d31] hover:bg-[#0c2033] transition-colors duration-300"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        <nav
          className={`absolute top-16 right-0 bg-[#1a1121] md:bg-transparent md:static md:flex rounded-lg shadow-inner px-6 py-2 md:py-0 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <button
                onClick={() => {
                  scrollToSection(aboutRef);
                  setMenuOpen(false);
                }}
                className="text-lg font-medium hover:text-[#4b9fee] transition-colors duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(projectsRef);
                  setMenuOpen(false);
                }}
                className="text-lg font-medium hover:text-[#4b9fee] transition-colors duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(contactRef);
                  setMenuOpen(false);
                }}
                className="text-lg font-medium hover:text-[#4b9fee] transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
