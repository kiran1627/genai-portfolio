import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaEnvelope, FaBrain, FaKeyboard, FaRobot } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import profileImage from '../assets/profile.jpg';

// 🔥 Keyframes for smooth entrance animation
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f172a;
  color: #ffffff;
  min-height: 100vh;
  padding: 60px 40px;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
`;

const LeftContent = styled.div`
  flex: 1;
  max-width: 600px;
  animation: ${fadeInUp} 1s ease forwards;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TypedRole = styled.div`
  font-size: 1.5rem;
  color: #38bdf8;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 40px;

  a {
    font-size: 1.8rem;
    color: #ffffff;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.3);
      color: #38bdf8;
      text-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
    }
  }
`;

const CompetencyGrid = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
`;

const CompetencyCard = styled.div`
  background: #1e293b;
  padding: 25px;
  border-radius: 12px;
  width: 220px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transition: 0.3s;

  &:hover {
    background: #334155;
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: #38bdf8;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.2rem;
    color: #f8fafc;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9rem;
    color: #cbd5e1;
  }
`;

const ResumeButton = styled.a`
  padding: 12px 30px;
  background-color: #38bdf8;
  color: white;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 40px;
  transition: 0.3s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-3px);
  }
`;

const ProfileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${fadeInUp} 1.2s ease forwards;
`;

const ProfileImage = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 24px;
  object-fit: cover;
  border: 8px solid #3b82f6;
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.4), 0 12px 32px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 60px rgba(59, 130, 246, 0.6), 0 16px 40px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 1024px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper id="hero">
      <LeftContent>
        <Name>B. Kiran Babu</Name>
        <TypedRole>
          <ReactTyped
            strings={[
              'AI/ML Engineer',
              'Prompt Engineer',
              'Generative AI Engineer',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </TypedRole>
        <Description>
          Specialized in developing and optimizing large language models, creating intelligent AI systems, and designing effective prompt engineering solutions for enterprise applications.
        </Description>

        <IconRow>
          <a href="https://www.linkedin.com/in/kiranbabu18" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:kiranbabubandela6@gmail.com"><FaEnvelope /></a>
        </IconRow>

        <CompetencyGrid>
          <CompetencyCard>
            <FaBrain />
            <h4>Machine Learning</h4>
            <p>Expertise in training, optimizing, and deploying ML models.</p>
          </CompetencyCard>
          <CompetencyCard>
            <FaKeyboard />
            <h4>Prompt Engineering</h4>
            <p>Crafting effective prompts for high performance in LLMs.</p>
          </CompetencyCard>
          <CompetencyCard>
            <FaRobot />
            <h4>AI Development</h4>
            <p>Designing smart systems using modern deep learning tools.</p>
          </CompetencyCard>
        </CompetencyGrid>

        <ResumeButton href="/Kiran_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </ResumeButton>
      </LeftContent>

      <ProfileContainer>
        <ProfileImage src={profileImage} alt="Profile" />
      </ProfileContainer>
    </HeroWrapper>
  );
}
