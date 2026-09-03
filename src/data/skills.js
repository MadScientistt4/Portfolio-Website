const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { label: "Python", tier: "primary" },
      { label: "JavaScript", tier: "primary" },
      { label: "TypeScript", tier: "primary" },
      { label: "Java", tier: "secondary" },
      { label: "C++", tier: "secondary" },
      { label: "C", tier: "secondary" },
    ],
  },

  {
    id: "backend",
    label: "Backend",
    skills: [
      { label: "Node.js", tier: "primary" },
      { label: "Express", tier: "primary" },
      { label: "FastAPI", tier: "primary" },
      { label: "Flask", tier: "primary" },
      { label: "REST APIs", tier: "primary" },
      { label: "Backend Architecture", tier: "secondary" },
      { label: "Third-Party Integrations", tier: "secondary" },
      { label: "Authentication", tier: "secondary" },
    ],
  },

  {
    id: "databases",
    label: "Databases & Caching",
    skills: [
      { label: "PostgreSQL", tier: "primary" },
      { label: "MongoDB", tier: "primary" },
      { label: "MySQL", tier: "primary" },
      { label: "Redis", tier: "primary" },
      { label: "Supabase", tier: "secondary" },
      { label: "MongoDB GridFS", tier: "secondary" },
    ],
  },

  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { label: "React", tier: "primary" },
      { label: "Next.js", tier: "primary" },
      { label: "Tailwind CSS", tier: "primary" },
      { label: "Vite", tier: "secondary" },
      { label: "Zustand", tier: "secondary" },
    ],
  },

  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    skills: [
      { label: "Docker", tier: "primary" },
      { label: "AWS", tier: "primary" },
      { label: "GitHub Actions", tier: "primary" },
      { label: "CI/CD", tier: "primary" },
      { label: "AWS EC2", tier: "secondary" },
      { label: "AWS ECR", tier: "secondary" },
      { label: "AWS App Runner", tier: "secondary" },
      { label: "Linux", tier: "secondary" },
    ],
  },

  {
    id: "ai",
    label: "AI & Machine Learning",
    skills: [
      { label: "LLM Integration", tier: "primary" },
      { label: "Google Gemini API", tier: "primary" },
      { label: "Generative AI", tier: "primary" },
      { label: "Deep Learning", tier: "primary" },
      { label: "Machine Learning", tier: "primary" },
      { label: "CNN", tier: "secondary" },
      { label: "RAG", tier: "secondary" },
    ],
  },

  {
    id: "systems",
    label: "Systems & Engineering",
    skills: [
      { label: "System Design", tier: "secondary" },
      { label: "API Design", tier: "secondary" },
      { label: "Caching", tier: "secondary" },
      { label: "Design Patterns", tier: "secondary" },
      { label: "WebSockets", tier: "secondary" },
      { label: "Scalable Systems", tier: "secondary" },
    ],
  },
];

export default skillCategories;