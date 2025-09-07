import React, { useEffect } from "react";
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
  ImageGallery,
  AdditionalImage,
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const handleBackToPortfolio = () => {
    navigate("/");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects-page");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "instant" });
      }
    }, 100);
  };
  
  if (!project) {
    return (
      <ProjectDetailWrapper>
        <Container>
          <BackButton onClick={handleBackToPortfolio}>← Back to Portfolio</BackButton>
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
        <BackButton onClick={handleBackToPortfolio}>← Back to Portfolio</BackButton>
        
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
              <h2>Technologies Used</h2>
              <TechnologyList>
                {project.technologies.map((tech, index) => (
                  <TechnologyTag key={index}>{tech}</TechnologyTag>
                ))}
              </TechnologyList>
            </Section>
            
            <Section>
              <h2>About This Project</h2>
              <p>{project.fullDescription}</p>
            </Section>
          </MainContent>

          <ImageGallery>
            {project.additionalImages && project.additionalImages.map((image, index) => (
              <AdditionalImage key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
            ))}
          </ImageGallery>
        </ProjectContent>
      </Container>
    </ProjectDetailWrapper>
  );
};
