const experience = [
  {
    id: "alps-insurance",
    role: "Backend Engineer Intern",
    company: "Alps Insurance",
    companyUrl: "https://www.bimascore.com/",
    location: "New Delhi, India",
    dateRange: "Jan 2026 - May 2026",
    current: false,

    summary:
      "Worked on the backend of a health insurance marketplace platform, building integrations that allowed users to compare, purchase, and manage health insurance policies from multiple insurers.",

    bullets: [
      {
        text:
          "Built and maintained backend integrations with multiple insurance providers, normalising insurer-specific APIs into a consistent application flow for quotations, proposals, KYC, payments, and policy issuance.",
        skills: [
          "Node.js",
          "TypeScript",
          "REST API Design",
          "System Integration",
        ],
      },
      {
        text:
          "Implemented backend flows for insurer quotation and proposal journeys, including request transformation, response handling, validation, and provider-specific business logic.",
        skills: [
          "Node.js",
          "TypeScript",
          "Express",
          "REST API Design",
        ],
      },
      {
        text:
          "Worked on authentication and token management for external insurer APIs, with caching strategies using Redis to reduce repeated authentication requests and improve integration reliability.",
        skills: [
          "Redis",
          "Node.js",
          "System Design",
        ],
      },
      {
        text:
          "Designed provider integrations using modular service and adapter-style patterns to isolate insurer-specific implementations and improve maintainability as additional insurers were added.",
        skills: [
          "TypeScript",
          "Design Patterns",
          "Backend Architecture",
        ],
      },
      {
        text:
          "Worked across the full insurance lifecycle, including quote generation, proposal creation, KYC, payment processing, policy status updates, and document download flows.",
        skills: [
          "Backend Development",
          "REST APIs",
          "Third-Party Integrations",
        ],
      },
    ],

    stack: [
      "TypeScript",
      "Node.js",
      "Express",
      "Redis",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Backend Architecture",
      "Third-Party Integrations",
    ],

    builtProject: {
      name: "Health Insurance Marketplace",
      summary:
        "A health insurance marketplace platform that integrates multiple insurers into a unified user experience for comparing plans, generating quotes, completing proposals and KYC, making payments, and managing policies.",
      link: null,
      screenshotPath: null,
    },
  },

  {
    id: "deloitte",
    role: "Software Engineering Project",
    company: "Deloitte",
    companyUrl: "https://www.deloitte.com/",
    location: "India",
    dateRange: "2025",

    current: false,

    summary:
      "Worked on a predictive maintenance project using machine learning and vibration analysis to identify equipment faults from sensor data.",

    bullets: [
      {
        text:
          "Built a predictive maintenance system using vibration sensor data to identify equipment faults and support early failure detection.",
        skills: [
          "Python",
          "Machine Learning",
          "Deep Learning",
        ],
      },
      {
        text:
          "Developed a 1D CNN-based fault detection model that achieved approximately 88% detection accuracy on the evaluated dataset.",
        skills: [
          "Python",
          "Deep Learning",
          "CNN",
        ],
      },
      {
        text:
          "Processed accelerometer vibration data using signal analysis techniques including FFT to extract meaningful features for model development.",
        skills: [
          "Python",
          "Data Analysis",
          "Signal Processing",
        ],
      },
    ],

    stack: [
      "Python",
      "Deep Learning",
      "Machine Learning",
      "CNN",
      "Data Analysis",
    ],
  },
];

export default experience;