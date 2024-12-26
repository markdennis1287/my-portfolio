import React from 'react';

function Header({ scrollToSection, sections }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = sections;

  return (
    <header className=" text-white sticky top-0 z-50 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-black"
          />
          <h1 className="text-2xl font-bold">
            <button onClick={() => scrollToSection(homeRef)}> Dennis Miring'u</button>
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
