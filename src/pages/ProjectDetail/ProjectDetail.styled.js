import styled from "styled-components";
import { typeScale, blue } from "../../utils";

export const ProjectDetailWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: rgba(255, 255, 255, 0.9);
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media screen and (max-width: 720px) {
    padding: 1rem;
  }
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: ${typeScale.paragraph};
  cursor: pointer;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectHeader = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 3rem;
  margin-bottom: 3rem;
  display: flex;
  gap: 3rem;
  align-items: center;

  .content {
    flex: 1;
  }

  h1 {
    font-size: ${typeScale.display};
    margin-bottom: 1.5rem;
    background: white;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    line-height: 1.2;
  }

  .short-description {
    font-size: ${typeScale.text};
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-weight: 400;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    text-align: center;

    h1 {
      font-size: ${typeScale.headline};
    }

    .short-description {
      font-size: ${typeScale.paragraph};
    }
  }
`;

export const ProjectImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media screen and (max-width: 720px) {
    width: 280px;
    height: 280px;
  }
`;

export const ProjectContent = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;

  @media screen and (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AdditionalImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem 2.5rem 3rem 2.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.15);
  }

  h2 {
    font-size: ${typeScale.subtitle};
    background: white;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 2rem;
    font-weight: 600;
    line-height: 1.4;
    padding-bottom: 0.2rem;
  }

  p {
    font-size: ${typeScale.paragraph};
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 400;
  }
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const TechnologyTag = styled.span`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), rgba(167, 139, 250, 0.1));
  color: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: ${typeScale.helperText};
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(167, 139, 250, 0.2));
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const FeatureList = styled.div`
  display: grid;
  gap: 1rem;
`;

export const FeatureItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid #60a5fa;
  font-size: ${typeScale.text};
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(4px);
  }
  
  &::before {
    content: "✓";
    color: #60a5fa;
    font-weight: bold;
    font-size: 1.1rem;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
`;
