import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Customer Segmentation Project',
      description:
        'A web application that uses K-means clustering to group customers based on purchase behaviors and demographics.',
      link: 'https://github.com/markdennis1287/Customer-Segmentation.git',
      image: '/customer-seg.png',
    },
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      link: 'https://github.com/markdennis1287/my-portfolio.git',
      image: '/portfolio-project.png',
    },
    {
      name: 'E-commerce Store',
      description: 'A fully responsive e-commerce platform with cart and payment integration.',
      link: '#',
      image: '/images/e-commerce-store.png',
    },
  ];

  return (
    <section className="min-h-90 py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-white mb-6 text-center">My Projects</h2>
        <div className="md:w-1/2 px-4">
        <p className="text-white text-xl text-left max-w-full mx-auto mb-12">
          Below is a collection of projects that highlight my skills and experience in web development, data analysis, and building user-friendly applications. These projects are built using modern technologies and showcase my ability to solve real-world problems effectively.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-cyan-50">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#130936] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {project.image && (
                <div className="overflow-hidden rounded-lg p-1">
                  <img
                    src={project.image}
                    alt={`Preview of ${project.name}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">{project.name}</h3>
                <p className="text-white mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-50 font-semibold underline rounded-lg"
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
