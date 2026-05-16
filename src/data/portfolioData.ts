export const PROJECTS = [
  {
    id: 1,
    title: "LORE OF AMBITION – GAMING BACKEND",
    description: "A FastAPI-based backend with JWT security, Redis caching, Celery workers, and CI/CD for low-latency gaming leaderboards.",
    tech: ["Python", "FastAPI", "Redis", "Celery"],
    github: "#",
    live: "#",
    category: "Backend"
  },
  {
    id: 2,
    title: "SCHOOL SPHERE – MANAGEMENT SYSTEM",
    description: "A cross-platform school management system with secure authentication, real-time features, and optimized backend performance.",
    tech: ["Next.js", "Firebase", "Node.js"],
    github: "#",
    live: "#",
    category: "Full Stack"
  },
  {
    id: 3,
    title: "STREAMING PLATFORM",
    description: "A full-stack streaming platform with secure access, low-latency playback, and analytics-driven discovery.",
    tech: ["React", "Express", "MongoDB", "HLS"],
    github: "#",
    live: "#",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "DEADFISH – CHESS AI",
    description: "A chess game with an AI opponent powered by Minimax and optimized with parallel programming.",
    tech: ["Python", "Algorithms", "Chess Engine"],
    github: "#",
    live: "#",
    category: "AI"
  },
  {
    id: 5,
    title: "GESTURE VIRTUAL ASSISTANT",
    description: "A virtual assistant powered by OpenCV and MediaPipe that enables gesture-based computer control.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    github: "#",
    live: "#",
    category: "AI"
  },
  {
    id: 6,
    title: "PRISONER'S DILEMMA SIMULATOR",
    description: "A simulation of the Prisoner's Dilemma tournament featuring multiple algorithmic strategies in Python.",
    tech: ["Python", "Game Theory"],
    github: "#",
    live: "#",
    category: "Simulation"
  }
];

export const EXPERIENCE = [
  {
    level: 5,
    role: "SWE INTERN",
    company: "URUMI.AI",
    duration: "MAR 2026 – PRESENT",
    bullets: ["Working with Infra (K8s, Containers, Terraform, GCP)", "Including full stack development with AI"],
    tech: ["PYTHON", "TERRAFORM", "GCP", "KUBERNETES"]
  },
  {
    level: 4,
    role: "TECHNICAL INTERN",
    company: "ROZANA.IN",
    duration: "JUL 2025 – FEB 2026",
    bullets: ["Optimizing backend services", "Real-time tracking features"],
    tech: ["PYTHON", "DJANGO", "REDIS"]
  },
  {
    level: 3,
    role: "DEEP LEARNING INTERN",
    company: "DEVNEX TECHNOLOGIES",
    duration: "SEP 2024 – JUL 2025",
    bullets: ["Model training and optimization", "Dataset preparation"],
    tech: ["PYTORCH", "OPENCV"]
  },
  {
    level: 2,
    role: "INTERN",
    company: "LEXI.AI",
    duration: "MAY 2024 – JUN 2024",
    bullets: ["NLP tasks and fine-tuning", "Dashboard development"],
    tech: ["OPENAI", "REACT"]
  },
  {
    level: 1,
    role: "FREELANCE DEVELOPER",
    company: "SELF-EMPLOYED",
    duration: "JAN 2023 – MAY 2024",
    bullets: ["Building MVP for local clients", "Portfolio sites"],
    tech: ["JAVASCRIPT", "PYTHON"]
  }
];

export const ACHIEVEMENTS = [
  { id: 1, title: "CODE WARRIOR", description: "Mastered multiple programming languages", xp: 500, rarity: "EPIC" },
  { id: 2, title: "PROJECT MASTER", description: "Completed 10+ full-stack projects", xp: 1000, rarity: "LEGENDARY" },
  { id: 3, title: "AI PIONEER", description: "Built machine learning models and AI applications", xp: 750, rarity: "EPIC" },
  { id: 4, title: "SPEED CODER", description: "Solved 200+ coding challenges", xp: 300, rarity: "RARE" },
  { id: 5, title: "TEAM PLAYER", description: "Collaborated on multiple team projects", xp: 200, rarity: "COMMON" },
  { id: 6, title: "UI ARTIST", description: "Designed beautiful and responsive interfaces", xp: 600, rarity: "EPIC" },
  { id: 7, title: "BUG HUNTER", description: "Debugged complex issues across projects", xp: 400, rarity: "RARE" },
  { id: 8, title: "CLOUD NAVIGATOR", description: "Deployed applications to cloud platforms", xp: 550, rarity: "EPIC" },
  { id: 9, title: "DATABASE MASTER", description: "Designed and optimized complex databases", xp: 350, rarity: "RARE" }
];

export const SKILLS = [
  { name: "REACT", cardRank: "JOKER", suit: "🃏", type: "JOKER" },
  { name: "CSS", cardRank: "JOKER", suit: "🃏", type: "JOKER" },
  { name: "PYTHON", cardRank: "K", suit: "♠", type: "KING" },
  { name: "FASTAPI", cardRank: "K", suit: "♠", type: "KING" },
  { name: "DJANGO", cardRank: "Q", suit: "♠", type: "QUEEN" },
  { name: "DOCKER", cardRank: "J", suit: "♦", type: "JACK" },
  { name: "GIT", cardRank: "K", suit: "♦", type: "KING" },
  { name: "AWS", cardRank: "JOKER", suit: "🃏", type: "JOKER" },
  { name: "GCP", cardRank: "J", suit: "♦", type: "JACK" },
  { name: "LINUX", cardRank: "Q", suit: "♦", type: "QUEEN" },
  { name: "K8S", cardRank: "Q", suit: "♦", type: "QUEEN" },
  { name: "TERRAFORM", cardRank: "J", suit: "♦", type: "JACK" },
  { name: "AI/ML", cardRank: "J", suit: "♣", type: "JACK" },
  { name: "APPLIED AI", cardRank: "Q", suit: "♣", type: "QUEEN" }
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  youtube: "https://youtube.com",
  twitter: "https://twitter.com",
  email: "mailto:hello@example.com"
};

export const STATS = {
  experience: "11 months",
  projects: 5,
  xpEarned: 1600,
  youtubeSubs: "3.2k"
};
