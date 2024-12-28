import React, { useState, useEffect, useRef } from 'react';

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

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-90 py-20"
    >
      <div className="container mx-auto">
        <h2
          className={`text-5xl font-bold text-white mb-6 text-center transition-transform duration-[3000ms] ease-out ${
            isVisible ? 'translate-x-0' : '-translate-x-10'
          }`}
        >
          My Projects
        </h2>
        <p
          className={`text-xl text-left text-white mb-10 max-w-2xl transition-transform duration-[3000ms] ease-out ${
            isVisible ? 'translate-y-0' : '-translate-y-10'
          }`}
        >
          Below is a selection of my projects that demonstrate my skills and experiences in software development. 
          These projects reflect my ability to solve real-world problems, build responsive user interfaces, 
          and work with modern technologies to create meaningful applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#130936] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-[3000ms] ease-out delay-${
                isVisible ? index * 300 : 0
              } ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
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
                  className="text-blue-300 hover:text-blue-50 font-semibold underline"
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
