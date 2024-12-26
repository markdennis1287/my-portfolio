import React from 'react';
import myPicture from '../assets/myself-ish.jpg';

function Home() {
  return (
    <section
      className="min-h-98 flex items-center justify-center text-white"
      id="home"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Dennis Miring'u
          </h1>
          <p className="text-lg md:text-xl">
            A passionate web developer creating engaging
            <br></br>
            and modern user friendly web applications.
          </p>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-grey">
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
