import ucsd_cse from "../assets/images/ucsd_cse.png";
import neuroml from "../assets/images/neuroml.png";
import bajaj from "../assets/images/bajaj.png";
import worldsalon from "../assets/images/worldsalon.png";
import tiptop from "../assets/images/tiptop.png";
import mixlab from "../assets/images/mixlab.png";
import ucsd from "../assets/images/ucsd.png";

import { blue, green, pink, yellow, red, orange, purple, teal } from "../utils";

export const experiences = [
  {
    logo: tiptop,
    name: "Tip Top Technologies",
    joined: "November 2024",
    end: "Present",
    title: "Software Engineer",
    bio: "Currently developing a feed matching algorithm to match users to different AI products on the platform.",
    color: yellow,
  },
  {
    logo: mixlab,
    name: "MixLab, Halıcıoğlu Data Science Institute, UCSD",
    joined: "November 2024",
    end: "March 2025",
    title: "Undergraduate Researcher",
    bio: "Designed synthetic video datasets using Blender and OpenCV, enabling precise evaluation of Vision-Language Models (VLMs) on motion recognition and speed differentiation tasks under controlled environmental factors.",
    color: teal,
  },
  {
    logo: neuroml,
    name: "NeuroML Lab, Department of Cognitive Science, UCSD",
    joined: "May 2024",
    end: "March 2025",
    title: "Undergraduate Researcher",
    bio: "Co-authored a research paper submitted to ICLR 2025, introducing a novel framework for modeling the human visual system by comparing Task-Optimized, Large Language, and Response-Optimized Models. Developed the Semantic Spatial Transformer readout mechanism, achieving a 30% increase in prediction accuracy across the visual cortex.",
    color: green,
  },
  {
    logo: worldsalon,
    name: "World Salon",
    joined: "May 2024",
    end: "September 2024",
    title: "Software Engineer Intern",
    bio: "Developed web scrapers using Selenium and BeautifulSoup to extract over 5,000 speaker profiles, integrating OpenAI's API to adapt to website layout changes. Engineered a keyword generation tool with OpenAI's API, boosting speaker recommendation accuracy by 40%. Utilized scikit-learn and spaCy for NLP preprocessing, achieving 35% precision improvement in profile matching. Developed an unsupervised speaker-event matching model with 85% accuracy using Word2Vec embeddings and Sentence Transformers.",
    color: blue,
  },
  {
    logo: ucsd_cse,
    name: "UC San Diego Computer Science and Engineering",
    joined: "March 2024",
    end: "December 2024",
    title: "CSE Tutor",
    bio: "Conducted review sessions and facilitated office hours for over 400 students, boosting exam performance. Collaborated with faculty on curriculum development and addressed over 200 student inquiries, enhancing the learning community.",
    color: purple,
  },
  {
    logo: ucsd,
    name: "UC San Diego",
    joined: "January 2023",
    end: "December 2024",
    title: "Tutor - Mathematics and Economics",
    bio: "Guided students in problem-solving by addressing their questions on course concepts and practice problems. Assisted students in developing course-specific learning skills by offering tailored academic support. Enhanced interpersonal and communication skills while creating a welcoming and inclusive environment for students.",
    color: pink,
  },
  {
    logo: bajaj,
    name: "Bajaj Capital Limited",
    joined: "May 2022",
    end: "September 2022",
    title: "Software Engineer Intern",
    bio: "Gained deep insights into product and service development processes, playing a key role in crafting Bajaj Capital's innovative retirement tool. Mapped user engagement patterns across over 200 website pages, leveraging design thinking methodologies. Designed and executed an innovative authentication framework leveraging Sequelize, Node.js, and MySQL, enhancing security measures and reducing unauthorized access attempts by 50%.",
    color: orange,
  },
];
