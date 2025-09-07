import autoconnect from "../assets/images/autoconnect.png";
import dinofusion from "../assets/images/dinofusion.png";
import plantdisease from "../assets/images/plantdisease.png";
import textanalysis from "../assets/images/textanalysis.png";
import reciperevamp from "../assets/images/reciperevamp.png";
import nbapredictor from "../assets/images/nbapredictor.png";
import vaxtrack from "../assets/images/vaxtrack.png";

export const projects = [
  {
    id: "autoconnect",
    title: "AutoConnect",
    image: autoconnect,
    link: "/project/autoconnect",
    description: "LinkedIn Bot that connects with recruiters and sends targeted messages.",
    fullDescription: "AutoConnect is an intelligent LinkedIn automation tool that streamlines the networking process for job seekers and professionals. The bot uses advanced algorithms to identify relevant recruiters and industry professionals, then sends personalized connection requests and follow-up messages. Built with Python and Selenium, it features smart targeting based on job titles, companies, and industries, while maintaining LinkedIn's usage policies to ensure account safety.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "LinkedIn API", "Machine Learning"],
    // additionalImages: [
    //   autoconnect,
    //   autoconnect,
    //   autoconnect
    // ],
    features: [
      "Automated recruiter discovery and targeting",
      "Personalized message generation",
      "Smart connection request timing",
      "Analytics and success tracking",
      "Account safety protocols"
    ]
  },
  {
    id: "dinofusion",
    title: "Dino Fusion",
    image: dinofusion,
    link: "/project/dinofusion",
    description: "Website for building hybrid dinosaurs by morphing species and learning dino facts.",
    fullDescription: "Dino Fusion is an interactive educational web application that allows users to create unique hybrid dinosaurs by combining features from different species. The platform combines entertainment with learning, featuring a comprehensive database of dinosaur facts, evolutionary timelines, and scientific information. Users can experiment with different combinations and learn about the resulting hybrid's theoretical characteristics.",
    technologies: ["React", "Node.js", "MongoDB", "CSS3", "Paleontology API"],
    features: [
      "Interactive dinosaur hybrid creator",
      "Comprehensive dinosaur database",
      "Educational content and quizzes",
      "3D visualization of hybrids",
      "Scientific accuracy validation"
    ]
  },
  {
    id: "disease-detector",
    title: "Disease Detector",
    image: plantdisease,
    link: "/project/disease-detector",
    description: "Crop health platform using image recognition for early detection.",
    fullDescription: "Disease Detector is an AI-powered agricultural platform that helps farmers identify plant diseases early through image analysis. Using computer vision and machine learning, the system can analyze photos of crops and provide instant diagnosis with treatment recommendations. The platform supports multiple crop types and diseases, helping farmers reduce crop loss and optimize their harvest yields.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Computer Vision", "AWS"],
    features: [
      "Real-time disease detection from photos",
      "Multi-crop support (corn, wheat, tomato, etc.)",
      "Treatment recommendations",
      "Disease progression tracking",
      "Mobile-responsive web interface"
    ]
  },
  {
    id: "text-analysis",
    title: "Text Analysis",
    image: textanalysis,
    link: "/project/text-analysis",
    description: "Text analysis tool that predicts word sequences to uncover language patterns.",
    fullDescription: "Text Analysis is a sophisticated natural language processing tool that analyzes text patterns and predicts word sequences. The platform uses advanced NLP algorithms to identify linguistic patterns, sentiment analysis, and predictive text generation. It's designed for researchers, writers, and linguists who want to understand language structure and improve their writing through data-driven insights.",
    technologies: ["Python", "NLTK", "spaCy", "Transformers", "React", "D3.js"],
    features: [
      "Advanced text pattern recognition",
      "Sentiment analysis and emotion detection",
      "Predictive text generation",
      "Language model training",
      "Interactive visualization dashboards"
    ]
  },
  {
    id: "recipe-revamp",
    title: "Recipe Revamp",
    image: reciperevamp,
    link: "/project/recipe-revamp",
    description: "Recipe analytics revealing ingredient factors that drive higher ratings.",
    fullDescription: "Recipe Revamp is a data analytics platform that analyzes thousands of recipes to identify the key ingredients and techniques that lead to higher ratings and better reviews. Using machine learning algorithms, it provides insights into flavor combinations, cooking methods, and ingredient substitutions that can improve recipe success rates. Perfect for chefs, food bloggers, and cooking enthusiasts.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Django", "PostgreSQL"],
    features: [
      "Recipe rating prediction algorithms",
      "Ingredient impact analysis",
      "Flavor pairing recommendations",
      "Nutritional optimization suggestions",
      "Trend analysis and insights"
    ]
  },
  {
    id: "nba-predictor",
    title: "NBA Win Predictor",
    image: nbapredictor,
    link: "/project/nba-predictor",
    description: "Leveraging deep learning and stats to forecast game outcomes.",
    fullDescription: "NBA Win Predictor is a sophisticated sports analytics platform that uses deep learning and historical statistics to forecast basketball game outcomes. The system analyzes player performance, team dynamics, injury reports, and historical matchups to provide accurate predictions. It features real-time updates and detailed analysis breakdowns for sports enthusiasts and analysts.",
    technologies: ["Python", "TensorFlow", "Keras", "NBA API", "React", "Chart.js"],
    features: [
      "Game outcome prediction with confidence scores",
      "Player performance analytics",
      "Team comparison tools",
      "Historical trend analysis",
      "Real-time data integration"
    ]
  },
  {
    id: "vaxtrack",
    title: "VaxTrack",
    image: vaxtrack,
    link: "/project/vaxtrack",
    description: "COVID-19 vaccination tracker analyzing global trends and effectiveness.",
    fullDescription: "VaxTrack is a comprehensive COVID-19 vaccination tracking and analysis platform that provides real-time insights into global vaccination trends, effectiveness rates, and distribution patterns. The platform aggregates data from multiple sources to provide accurate, up-to-date information for researchers, policymakers, and the general public interested in vaccination progress worldwide.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "COVID APIs", "Data Visualization"],
    features: [
      "Real-time global vaccination tracking",
      "Interactive data visualizations",
      "Effectiveness analysis by vaccine type",
      "Geographic distribution mapping",
      "Trend prediction and forecasting"
    ]
  },
];
