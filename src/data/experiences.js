import ucsd_cse from "../assets/images/ucsd_cse.png";
import neuroml from "../assets/images/neuroml.png";
import bajaj from "../assets/images/bajaj.png";
import worldsalon from "../assets/images/worldsalon.png";
import tiptop from "../assets/images/tiptop.png";
import mixlab from "../assets/images/mixlab.png";
import ucsd from "../assets/images/ucsd.png";

import { glaucous, sunset, vanilla, periwinkle, emerald, mindaro, pink, thistle } from "../utils";

export const experiences = [
  {
    logo: tiptop,
    name: "TipTop Technologies",
    joined: "November 2024",
    end: "Present",
    title: "Software Engineer",
    bio: "As a Lead Engineer at TipTop Technologies, I led the development of a full-stack AI platform, Comm360, to automate meeting participation and enable real-time, multilingual communication. I designed and deployed a retrieval-augmented generation (RAG) engine that provides contextual insights by indexing company conversations, transcripts, and chat logs.",
    color: emerald,
  },
  {
    logo: neuroml,
    name: "NeuroML Lab",
    joined: "May 2024",
    end: "March 2025",
    title: "Undergraduate Researcher",
    bio: "As a Research Assistant at the NeuroML Lab, I published a <a href='https://arxiv.org/pdf/2410.14031' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Research Paper</a> that was accepted into <a href='https://2025.ccneuro.org' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>CCN 2025</a>. In this paper, I introduced a novel framework for modeling the human visual system and developed the Semantic Spatial Transformer readout mechanism, which increased prediction accuracy across the visual cortex by 30%.",
    color: mindaro,
  },
  // {
  //   logo: mixlab,
  //   name: "MixLab, UCSD",
  //   joined: "November 2024",
  //   end: "March 2025",
  //   title: "Undergraduate Researcher",
  //   bio: "Designed synthetic video datasets using Blender and OpenCV, enabling precise evaluation of Vision-Language Models (VLMs) on motion recognition and speed differentiation tasks under controlled environmental factors.",
  //   color: vanilla,
  // },
  {
    logo: worldsalon,
    name: "World Salon",
    joined: "May 2024",
    end: "September 2024",
    title: "Software Engineer Intern",
    bio: "At World Salon, I engineered an AI pipeline for discovering and semantically analyzing over 5,000 speaker profiles from the web and LinkedIn. I developed advanced NLP workflows and built a retrieval-augmented generation (RAG) system using vector databases and OpenAI APIs to match speakers to topics for curated events.",
    // color: sunset,
    color: vanilla,
  },
  {
    logo: ucsd_cse,
    name: "UCSD CSE",
    joined: "March 2024",
    end: "December 2024",
    title: "CSE Tutor",
    bio: "At UC San Diego's Computer Science & Engineering department, I served as a CSE Tutor, where I conducted review sessions and held office hours for over 400 students. I also collaborated with faculty on curriculum development and addressed more than 200 student inquiries.",
    color: sunset, //thistle
  },
  // {
  //   logo: ucsd,
  //   name: "UCSD",
  //   joined: "January 2023",
  //   end: "December 2024",
  //   title: "Tutor - Mathematics and Economics",
  //   bio: "Guided students in problem-solving by addressing their questions on course concepts and practice problems. Assisted students in developing course-specific learning skills by offering tailored academic support. Enhanced interpersonal and communication skills while creating a welcoming and inclusive environment for students.",
  //   color: periwinkle,
  // },
  {
    logo: bajaj,
    name: "Bajaj Capital",
    joined: "May 2022",
    end: "September 2022",
    title: "Software Engineer Intern",
    bio: "As a Software Engineer Intern at Bajaj Capital, I improved the cloud infrastructure by optimizing key AWS solutions like EC2, SES, and ELB, which led to increased scalability, streamlined operations, and improved system uptime. I also designed a secure authentication framework using Node.js and MySQL, which reduced unauthorized access by 50% and improved login speeds for over 5,000 users.",
    color: pink,
  },
];
