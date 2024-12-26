import React from 'react';

function About() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About myself:</h2>
        <p className="text-lg">
        I'm a passionate software developer with experience and skills in Python, a bit of C++ and Web development.
        I can comfortably work with web frameworks such as Flask and I'm currently learning React for web development.
        I can work collaboratively with teams and clients to develop effecient and user friendly solutions.
        </p>
      </div>
      <div className="container mx-auto">
          <h3 className="text-2xl font-semibold">Fun Facts</h3>
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>I love hiking.</li>
            <li>I'm a coffee enthusiast.</li>
            <li>I enjoy solving puzzles.</li>
          </ul>
        </div>
    </section>
  );
}

export default About;
