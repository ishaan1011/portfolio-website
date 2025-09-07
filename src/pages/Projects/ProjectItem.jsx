import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Button } from "../../components/form/";
import { Cube, Face } from "./ProjectItem.styled";

export const ProjectItem = ({ data, index }) => {
  const { ref, inView } = useInView();
  return (
    <Cube ref={ref} className={inView ? "fadeIn" : null} index={index}>
      <Face className="face-1" image={data.image}>
        <div className="img"></div>
        <div className="content">
          <h3 className="text-h">{data.title}</h3>
          <p className="text-p">{data.description}</p>
          <div className="buttons">
            {data.github && (
              <a href={data.github} target="_blank" rel="noopener noreferrer">
                <Button sm>Github</Button>
              </a>
            )}
            {data.link && (
              <Link to={data.link}>
                <Button sm>Visit</Button>
              </Link>
            )}
          </div>
        </div>
      </Face>
      <Face className="face-2">
        <div className="text">{data.description}</div>
      </Face>
      <Face className="face-3">
        <div className="text">{data.title}</div>
      </Face>
    </Cube>
  );
};
