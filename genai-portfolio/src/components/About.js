import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: #1e293b;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #38bdf8;
`;

const Content = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #cbd5e1;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Title>About Me</Title>
      <Content>
        I am a passionate AI/ML developer and prompt engineer, skilled in designing intelligent systems and building
        real-world applications using deep learning and natural language processing. With a strong foundation in machine
        learning, I specialize in creating solutions that are efficient, scalable, and impactful. My work bridges
        research with application, empowering products with the latest in generative AI technology.
      </Content>
    </AboutSection>
  );
};

export default About;
