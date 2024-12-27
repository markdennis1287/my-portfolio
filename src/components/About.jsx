import React from 'react';

function About() {
  const skills = [
    {
      name: 'Web Development',
      icon: '/web-dev.png',
      description: 'I have knowledge of process of designing, building, and maintaining websites and web applications that are visually appealing, highly functional, and optimized for user experience. This includes front-end development for user interfaces, back-end development for server-side functionality, and database management to ensure seamless data flow.',
    },
    {
      name: 'Python Deleloper',
      icon: '/python-logo-24080.svg',
      description: 'Expertise in using Python, a powerful and versatile programming language, for creating dynamic web applications, automating tasks, data analysis, machine learning, and software development.',
    },
    {
      name: 'Git',
      icon: '/git.png',
      description: 'Proficiency in Git, a distributed version control system, to track changes in code, collaborate with other developers, and manage project versions effectively. Git ensures code integrity, enables efficient team collaboration, and simplifies deployment processes, making it an essential tool for modern software development.',
    },
  ];
  

  const tools = [
    { name: 'VS Code', icon: '/visual-studio-code-blue-15304.svg' },
    { name: 'HTML', icon: '/html-BlhLRGzY.png' },
    { name: 'CSS', icon: '/css-DlZE0Yf0.png' },
    { name: 'Git', icon: '/git.png' },
    { name: 'GitHub', icon: '/github-logo-6532.svg' },
    { name: 'Flask', icon: '/flask-7.png' },
    { name: 'Python', icon: '/python-logo-24080.svg' },
    { name: 'React', icon: '/react-blue-logo-24670.svg' },
    { name: 'Tailwind', icon: '/tailwind-css.png' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center text-white px-8 py-10" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 w-full mb-10">
        <div className="md:w-1/2 px-4">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl mb-6">
            I’m Dennis Miring'u, a passionate software developer specializing in modern web technologies like React and Django.
            I enjoy solving problems, creating CRUD applications, and delivering impactful user experiences. I aim to
            contribute to meaningful projects and grow my expertise with every opportunity.
          </p>
        </div>
      </div>

      <div className="w-full mb-10 px-8">
        <h3 className="text-5xl font-semibold text-center mb-6">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-centre justify-centre align-middle">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#130936] shadow-md p-6 rounded-lg flex flex-col items-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4 rounded"
              />
              <h4 className="text-xl font-bold mb-2">{skill.name}</h4>
              <p className="text-m text-white text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h3 className="text-5xl font-semibold text-center mb-6">Tools and Technologies</h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 justify-center place-items-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-200"
            >
              <img src={tool.icon} alt={tool.name} className="w-17 h-17 md:w-20 md:h-20 mb-2" />
              <p className="text-sm">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
