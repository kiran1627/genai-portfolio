// src/components/Achievements.jsx
import React from 'react';
import styled from 'styled-components';
import { FaTrophy } from 'react-icons/fa';

const Section = styled.section`
  background-color: #0f172a;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #38bdf8;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: auto;
`;

const Card = styled.div`
  background-color: #1e293b;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 2rem;
    color: #38bdf8;
    flex-shrink: 0;
  }

  h3 {
    font-size: 1.3rem;
    color: #f8fafc;
    margin: 0 0 8px;
  }

  p {
    color: #cbd5e1;
    font-size: 0.95rem;
    margin: 0;
  }
`;

export default function Achievements() {
    return (
        <Section id="achievements">
            <Title>Achievements</Title>
            <Grid>
                <Card>
                    <FaTrophy />
                    <div>
                        <h3>Innovation Marathon Finalist</h3>
                        <p>
                            Selected as one of the top finalists in the Innovation Marathon organized by TASK in partnership with Code Unnati, Edunet Foundation, and SAP. Recognized for developing impactful AI solutions addressing real-world challenges.
                        </p>
                    </div>
                </Card>
            </Grid>
        </Section>
    );
}
