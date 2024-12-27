import React from 'react';
import myPicture from '../assets/myself-ish.jpg';

function Home() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-white"
      id="home"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 font-serif">
            Hello,<span className='text-[#2455af]'>I'm Dennis Miring'u</span>
          </h1>
          <p className="text-lg md:text-3xl">
            A passionate web developer creating engaging
            <br></br>
            modern and user friendly web applications.
          </p>
          <div className="w-80 h-80 md:w-90 md:h-90 rounded-full overflow-hidden shadow-lg">
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
