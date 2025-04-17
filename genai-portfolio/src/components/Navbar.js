import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #0f172a;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #1e293b;
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #38bdf8;
  text-decoration: none;
  font-family: 'Segoe UI', sans-serif;

  &:hover {
    color: #7dd3fc;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #e2e8f0;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #38bdf8;
  }
`;

const ResumeButton = styled.a`
  padding: 8px 18px;
  background-color: #38bdf8;
  color: white;
  border-radius: 6px;
  font-size: 0.95rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="#hero">B.Kiran Babu</Logo>
      <NavLinks>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#achievements">Achievements</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <ResumeButton href="/Kiran_Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </ResumeButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
