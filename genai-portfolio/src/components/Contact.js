// src/components/Contact.jsx
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 60px 20px;
  background-color: #1e293b; /* dark background */
  color: #e2e8f0; /* light text */
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #38bdf8; /* blue text for title */
`;

const ContactButton = styled.a`
  padding: 12px 30px;
  background-color: #3b82f6; /* blue background */
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-bottom: 30px;
  
  &:hover {
    background-color: #2563eb; /* darker blue on hover */
  }

  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const SocialIconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  font-size: 2rem;
  color: #38bdf8; /* blue icons */
  transition: color 0.3s ease;
  
  &:hover {
    color: #2563eb; /* darker blue on hover */
  }
`;

export default function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactButton href="mailto:kiranbabubandela6@gmail.com">
        <FaEnvelope /> Email Me
      </ContactButton>

      <SocialIconsContainer>
        <SocialIcon href="https://www.instagram.com/Virat.kiran18" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="https://wa.me/9381342247" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/kiranbabu18" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
      </SocialIconsContainer>
    </ContactContainer>
  );
}
