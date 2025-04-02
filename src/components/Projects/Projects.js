import React from 'react';
import './Projects.css';

function Projects() {
  // --- REPLACE WITH YOUR ACTUAL PROJECTS ---
  const myProjects = [
    { id: 1, title: 'Project One', description: 'Description of project one...', link: '#', tech: ['React', 'CSS'] },
    { id: 2, title: 'Project Two', description: 'Description of project two...', link: '#', tech: ['JavaScript', 'HTML'] },
    // Add more projects here
  ];

  return (
    <section id="projects" className="portfolio-section projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {myProjects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
            {project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;