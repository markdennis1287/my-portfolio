import React, { useState, useEffect } from 'react';
import myPicture from '../assets/myself-ish.jpg';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`min-h-screen flex items-center justify-center text-white transition-opacity duration-1500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      id="home"
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center space-y-6 transition-transform duration-1000 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-10'
        }`}
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 font-serif">
            Hello, <span className="text-[#2455af]">I'm Dennis Miring'u</span>
          </h1>
          <p className="text-lg md:text-3xl">
            A passionate software developer creating engaging
            <br />
            modern and user-friendly applications.
          </p>
          <div
            className={`w-80 h-80 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg mt-6 transition-transform duration-1000 delay-300 ${
              isVisible ? 'translate-y-0' : '-translate-y-10'
            }`}
          >
            <img
              src={myPicture}
              alt="Your Name"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
