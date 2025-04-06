import React from 'react';
import './Projects.css';

function Projects() {
  const myProjects = [
    {
      id: 1,
      title: 'MediBot - AI Assistant using LLM',
      description: 'Developed an end-to-end medical query assistant using Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG) via Langchain. Fine-tuned with Huggingface for enhanced domain accuracy. Features vector embeddings, similarity search, and a Streamlit-based UI.',
      link: '#',
      tech: ['GenAI', 'RAG', 'Huggingface', 'Langchain', 'Vector Database', 'Streamlit']
    },
    {
      id: 2,
      title: 'MoodMate - Mobile App with Real-Time Sentiment Insights',
      description: 'Designed a cross-platform journaling app using React Native and Expo with an intuitive mobile-first interface. Integrated on-device TensorFlow Lite for immediate sentiment analysis, with Firebase and Google Cloud for scalable data management and real-time sync.',
      link: '#',
      tech: ['React Native', 'Expo', 'TensorFlow Lite', 'Firebase', 'Google Cloud']
    },
    {
      id: 3,
      title: 'Sidewalk Assist [Capstone Project]',
      description: 'Built a real-time computer vision solution for visually impaired users using YOLOv8 for object detection and video captioning. Fine-tuned a GPT model for natural alerts. Leveraged PyTorch, Huggingface, and Roboflow on Google Colab for rapid prototyping and optimization.',
      link: '#',
      tech: ['PyTorch', 'Huggingface', 'Roboflow', 'YOLOv8', 'GPT']
    }
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