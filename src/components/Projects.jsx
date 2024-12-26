import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Customer Segmentation Project',
      description:
        'A web application that uses K-means clustering to group customers based on purchase behaviors and demographics.',
      link: 'https://github.com/markdennis1287/Customer-Segmentation.git',
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      link: 'https://github.com/markdennis1287/my-portfolio.git',
    },
    {
      name: 'E-commerce Store',
      description: 'A fully responsive e-commerce platform with cart and payment integration.',
      link: '#',
    },
  ];

  return (
    <section className="min-h-90 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
              style={{ height: '50vh' }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">{project.name}</h3>
                <p className="text-white mb-6">{project.description}</p>
              </div>
              <div className="p-6 bg-blue-50 text-right">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-semibold underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
