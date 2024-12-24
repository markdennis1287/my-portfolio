import React from 'react';

function Header({ scrollToSection, sections }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = sections;

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-2xl font-bold">
            <button onClick={() => scrollToSection(homeRef)}>Dennis Miring'u</button>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button onClick={() => scrollToSection(homeRef)} className="hover:underline">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:underline">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(projectsRef)} className="hover:underline">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(contactRef)} className="hover:underline">
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
