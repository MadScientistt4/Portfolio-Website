const projects = [
  {
    id: "rfp-bidassist-ai",

    name: "RFP BidAssist AI",

    tagline:
      "AI-powered platform for analysing RFPs and assisting with bid preparation",

    description:
      "A full-stack AI application designed to help users analyse Request for Proposal documents and streamline the bid preparation workflow using LLM-powered features.",

    highlights: [
      {
        text:
          "Built a FastAPI backend to handle application logic, API endpoints, and AI-powered document processing workflows.",
        skills: ["Python", "FastAPI", "REST APIs"],
      },
      {
        text:
          "Integrated Google Gemini APIs to analyse documents and generate AI-assisted responses for bid-related workflows.",
        skills: ["Gemini API", "LLM Integration", "Generative AI"],
      },
      {
        text:
          "Built the frontend using React, creating an interface for interacting with documents and AI-generated outputs.",
        skills: ["React", "JavaScript"],
      },
      {
        text:
          "Used Supabase for backend data storage and application data management.",
        skills: ["Supabase", "PostgreSQL"],
      },
    ],

    stack: [
      "Python",
      "FastAPI",
      "React",
      "Supabase",
      "PostgreSQL",
      "Gemini API",
      "LLM Integration",
      "REST APIs",
    ],

    githubUrl: "https://github.com/MadScientistt4/RFP-BidAssist-AI",

    liveUrl: null,

    videoUrl: null,

    imagePath: "/images/rfp-bidassist.png",
  },

  {
    id: "story-to-comic",

    name: "StoryToComic",

    tagline:
      "AI-powered application that transforms stories into comic experiences",

    description:
      "A generative AI application that converts written stories into comic-style content through an AI-powered generation pipeline.",

    highlights: [
      {
        text:
          "Built an AI-powered pipeline to transform user-provided story content into generated comic experiences.",
        skills: ["Generative AI", "LLM Integration"],
      },
      {
        text:
          "Used MongoDB GridFS to manage and store generated media and large application assets.",
        skills: ["MongoDB", "GridFS"],
      },
      {
        text:
          "Developed the application as a full-stack project with backend processing and a user-facing interface.",
        skills: ["Full Stack Development", "JavaScript"],
      },
    ],

    stack: [
      "JavaScript",
      "MongoDB",
      "MongoDB GridFS",
      "Generative AI",
      "LLM Integration",
      "Full Stack Development",
    ],

    githubUrl: "https://github.com/MadScientistt4/StoryToComic",

    liveUrl: null,

    videoUrl: null,

    imagePath: "/images/storyToComic.png",
  },

  {
    id: "goalconnect",

    name: "GoalConnect",

    tagline:
      "Hackathon-winning full-stack platform",

    description:
      "A full-stack MERN application developed during a hackathon, focused on solving a real-world problem through a complete web product.",

    highlights: [
      {
        text:
          "Built a full-stack web application using the MERN stack within a hackathon environment.",
        skills: ["MongoDB", "Express", "React", "Node.js"],
      },
      {
        text:
          "Designed and implemented both frontend and backend components, including APIs and application data flows.",
        skills: ["React", "Node.js", "REST APIs"],
      },
      {
        text:
          "Won the Best Hack Award at Manipal Hackathon and received a prize of ₹10,000.",
        skills: [],
      },
    ],

    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JavaScript",
      "REST APIs",
    ],

    githubUrl: "https://github.com/MadScientistt4/Goal-Connect",

    liveUrl: null,

    videoUrl: null,

    imagePath: "/images/goalconnect.png",
  },

  {
    id: "predictive-maintenance",

    name: "Predictive Maintenance System",

    tagline:
      "Deep learning-based equipment fault detection",

    description:
      "A predictive maintenance system that uses vibration sensor data and deep learning to detect equipment faults and support early failure identification.",

    highlights: [
      {
        text:
          "Developed a 1D CNN model for equipment fault detection, achieving approximately 88% detection accuracy on the evaluated dataset.",
        skills: ["Python", "Deep Learning", "CNN"],
      },
      {
        text:
          "Processed accelerometer vibration data and applied FFT-based signal analysis during feature exploration and modelling.",
        skills: ["Python", "Signal Processing"],
      },
      {
        text:
          "Applied machine learning and engineering concepts to analyse equipment behaviour and identify potential faults.",
        skills: ["Machine Learning", "Data Analysis"],
      },
    ],

    stack: [
      "Python",
      "Deep Learning",
      "Machine Learning",
      "CNN",
      "FFT",
      "Data Analysis",
    ],

    githubUrl: null,

    liveUrl: null,

    videoUrl: null,

    //imagePath: "/images/predictive-maintenance.png",
  },
];

export default projects;