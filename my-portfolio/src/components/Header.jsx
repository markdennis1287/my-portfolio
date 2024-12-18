import React from 'react';

function Header({ scrollToSection, sections }) {
  const { homeRef, aboutRef, projectsRef, contactRef } = sections;

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <button onClick={() => scrollToSection(homeRef)}>My Portfolio</button>
        </h1>
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
