// src/components/Projects.jsx
import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 60px 20px;
  background-color: #1e293b;
  color: #e2e8f0;
  text-align: center;
`;

const ProjectCard = styled.div`
  background-color: #2d3748;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const TechList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 15px;
`;

const TechTag = styled.span`
  background-color: #3b82f6;
  padding: 6px 12px;
  border-radius: 5px;
  color: white;
  font-size: 0.875rem;
`;

const DemoVideo = styled.div`
  margin-top: 20px;

  iframe {
    width: 100%;
    max-width: 600px;
    height: 340px;
    border: none;
    border-radius: 8px;
  }
`;

export default function Projects() {
  const projects = [
    {
      title: 'AI-enabled Smart Blood Donation System',
      description: `A smart system that uses AI to match blood donors with recipients based on type and location.`,
      detailedDescription: `
        Problem:
        Blood donation is a critical healthcare service, but finding a compatible donor quickly can be difficult.

        Solution:
        This AI-enabled system collects data about donors and recipients (blood type, medical history, location). 
        ML models predict the best donor-recipient match.

        Technologies:
        Python, TensorFlow, Flask

        Impact:
        Optimizes donation, improves success rates, and reduces response times.
      `,
      demoEmbed: 'https://drive.google.com/file/d/13d8RneZ9L8-k10fL6_5hVIHRJcNP12-_/preview',
      tech: ['Python', 'TensorFlow', 'Flask', 'AI'],
    },
    {
      title: 'Generative AI Chatbot',
      description: `A chatbot powered by Gemini that provides real-time conversational responses.`,
      detailedDescription: `
        Problem:
        Rule-based chatbots can't handle diverse queries.

        Solution:
        This AI-powered chatbot uses the Gemini Model for natural, intelligent conversation.

        Technologies:
        Gemini, Python, Streamlit

        Impact:
        Real-time customer support, task automation, scalable conversation flow.
      `,
      demoEmbed: 'https://drive.google.com/file/d/13v7XfChb4tqrZfEqP7KHuR1B2cFCKnFF/preview',
      tech: ['Gemini Model', 'streamlit', 'python', 'stable diffusion'],
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechList>
            {project.tech.map((tech, idx) => (
              <TechTag key={idx}>{tech}</TechTag>
            ))}
          </TechList>
          <p>{project.detailedDescription}</p>
          {project.demoEmbed && (
            <DemoVideo>
              <h4>Watch Demo</h4>
              <iframe
                src={project.demoEmbed}
                allow="autoplay"
                allowFullScreen
                title={`${project.title} Demo`}
              />
            </DemoVideo>
          )}
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}
