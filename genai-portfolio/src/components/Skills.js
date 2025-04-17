import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
    FaPython, FaComments, FaUsers, FaLightbulb, FaRobot, FaTools,
} from 'react-icons/fa';
import {
    SiPytorch, SiTensorflow, SiOpenai, SiFastapi,
    SiHuggingface, SiLangchain, SiScikitlearn,
    SiStreamlit, SiOpencv, SiGithub, SiGoogle,
} from 'react-icons/si';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const Section = styled.section`
  background-color: #0f172a;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #38bdf8;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const Card = styled.div`
  background-color: #1e293b;
  border-radius: 12px;
  padding: 30px 20px;
  width: 240px;
  animation: ${fadeIn} 0.6s ease forwards;
  opacity: 0;
  transform: scale(0.9);
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: forwards;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #334155;
  }

  svg {
    font-size: 2.5rem;
    color: #38bdf8;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.3rem;
    color: #f8fafc;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
    color: #cbd5e1;
  }
`;

const Skills = () => {
    return (
        <Section id="skills">
            <Title>Skill Set</Title>
            <Grid>

                {/* Technical Skills */}
                <Card delay="0s">
                    <FaPython />
                    <h4>Python</h4>
                    <p>Core language for AI scripting, automation, and ML model development.</p>
                </Card>
                <Card delay="0.1s">
                    <SiPytorch />
                    <h4>PyTorch</h4>
                    <p>Training deep learning models, GANs, and custom LLMs.</p>
                </Card>
                <Card delay="0.2s">
                    <SiTensorflow />
                    <h4>TensorFlow</h4>
                    <p>End-to-end deep learning workflows for GenAI applications.</p>
                </Card>
                <Card delay="0.3s">
                    <SiHuggingface />
                    <h4>Hugging Face</h4>
                    <p>Transformers, tokenization, fine-tuning, and deployment.</p>
                </Card>
                <Card delay="0.4s">
                    <SiLangchain />
                    <h4>LangChain</h4>
                    <p>Building agents, tools, and RAG pipelines with LLMs.</p>
                </Card>
                <Card delay="0.5s">
                    <SiOpenai />
                    <h4>OpenAI APIs</h4>
                    <p>GPT integration for embeddings, completions, and chatbots.</p>
                </Card>
                <Card delay="0.6s">
                    <FaRobot />
                    <h4>Prompt Engineering</h4>
                    <p>Designing effective prompts for zero-shot and CoT tasks.</p>
                </Card>
                <Card delay="0.7s">
                    <SiStreamlit />
                    <h4>Streamlit</h4>
                    <p>Deploying interactive GenAI prototypes and demos quickly.</p>
                </Card>
                <Card delay="0.8s">
                    <SiFastapi />
                    <h4>FastAPI</h4>
                    <p>Serving GenAI models with APIs and webhooks.</p>
                </Card>
                <Card delay="0.9s">
                    <SiOpencv />
                    <h4>Computer Vision</h4>
                    <p>Text-to-image models, vision-language transformers.</p>
                </Card>
                <Card delay="1.0s">
                    <SiScikitlearn />
                    <h4>ML Pipelines</h4>
                    <p>Data preprocessing, classification, and evaluation.</p>
                </Card>
                <Card delay="1.1s">
                    <SiGithub />
                    <h4>Git & GitHub</h4>
                    <p>CI/CD, version control, and collaborative workflows.</p>
                </Card>

                {/* Advanced Skills */}
                <Card delay="1.2s">
                    <FaTools />
                    <h4>MLOps</h4>
                    <p>Model deployment, monitoring, and lifecycle management.</p>
                </Card>
                <Card delay="1.3s">
                    <SiHuggingface />
                    <h4>Fine-Tuning</h4>
                    <p>Custom training of LLMs and transformers on specific datasets.</p>
                </Card>
                <Card delay="1.4s">
                    <SiGoogle />
                    <h4>Gemini Models</h4>
                    <p>Hands-on with Google's Gemini multimodal LLMs and APIs.</p>
                </Card>

                {/* Soft Skills */}
                <Card delay="1.5s">
                    <FaComments />
                    <h4>Communication</h4>
                    <p>Explaining complex AI systems clearly to all audiences.</p>
                </Card>
                <Card delay="1.6s">
                    <FaUsers />
                    <h4>Team Collaboration</h4>
                    <p>Working in agile, cross-functional AI product teams.</p>
                </Card>
                <Card delay="1.7s">
                    <FaLightbulb />
                    <h4>Creative Problem Solving</h4>
                    <p>Innovating generative AI use-cases and solving ambiguity.</p>
                </Card>

            </Grid>
        </Section>
    );
};

export default Skills;
