import React from 'react';

function Projects() {
  const projects = [
    { name: 'Customer Segmentation Project', description: 'This is a web application that makes use of K-means clustering machine learning algorith to group customer from user uploaded customer data to clusters based on related purchase behaviours and demograpgic.', link: 'https://github.com/markdennis1287/Customer-Segmentation.git' },
    { name: 'Project 2', description: 'Description of project 2', link: '#' },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold" href={project.link}>{project.name}</h3>
              <p className="">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
