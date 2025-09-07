import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data";
import { 
  ProjectDetailWrapper,
  Container, 
  BackButton, 
  ProjectHeader, 
  ProjectImage, 
  ProjectContent,
  MainContent,
  Sidebar,
  TechnologyList,
  TechnologyTag,
  FeatureList,
  FeatureItem,
  Section
} from "./ProjectDetail.styled";

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <ProjectDetailWrapper>
        <Container>
          <BackButton onClick={() => navigate("/")}>← Back to Portfolio</BackButton>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
          </div>
        </Container>
      </ProjectDetailWrapper>
    );
  }

  return (
    <ProjectDetailWrapper>
      <Container>
        <BackButton onClick={() => navigate("/")}>← Back to Portfolio</BackButton>
        
        <ProjectHeader>
          <ProjectImage src={project.image} alt={project.title} />
          <div className="content">
            <h1>{project.title}</h1>
            <p className="short-description">{project.description}</p>
          </div>
        </ProjectHeader>

        <ProjectContent>
          <MainContent>
            <Section>
              <h2>About This Project</h2>
              <p>{project.fullDescription}</p>
            </Section>
          </MainContent>

          <Sidebar>
            <Section>
              <h2>Technologies Used</h2>
              <TechnologyList>
                {project.technologies.map((tech, index) => (
                  <TechnologyTag key={index}>{tech}</TechnologyTag>
                ))}
              </TechnologyList>
            </Section>
          </Sidebar>
        </ProjectContent>
      </Container>
    </ProjectDetailWrapper>
  );
};
