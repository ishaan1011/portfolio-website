import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, emerald, green } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import ucsd from "../../assets/images/ucsd.png";
import krm from "../../assets/images/krm.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            Hi, I'm <strong>Ishaan Chadha</strong>, and I'm the <strong>6th engineer at Centralize</strong>, building out the company's core intelligence: mapping relationships within companies to uncover the hidden decision-makers in sales using <strong>knowledge graph architectures</strong>. Before that, I founded <strong>Comm360</strong>, an AI platform whose avatars join your meetings to capture the conversation and deliver clear summaries, action items, and translations. Earlier, I conducted research on the human visual system at <strong>UCSD's NeuroML Lab</strong>, where my paper was accepted into <strong>CCN 2025</strong>. You can read it <a href="https://arxiv.org/pdf/2410.14031" target="_blank" rel="noopener noreferrer">here</a>.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "University of California, San Diego",
                p: "B.S. Mathematics & Computer Science, Minor in Data Science (2021-2025)",
                image: ucsd,
              }}
            />
            {/* <AboutItem
              color={green}
              data={{
                title: "K R Mangalam World School",
                p: "High School Education (2017-2021)",
                image: krm,
              }}
            /> */}
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
