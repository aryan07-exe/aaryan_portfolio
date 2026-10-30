export const profile = {
  name: "Aaryan Sahu",
  role: "AI Engineer",
  email: "aryansahu7000@gmail.com",
  phone: "+91-9752375717",
  github: "https://github.com/aryan07-exe",
  linkedin: "https://www.linkedin.com/in/aaryan-sahu-bb680a258/",
  intro: "I build real-world AI systems — from LLM agents and RAG pipelines to multimodal AI and scalable backend solutions.",
  about: "I'm an AI Engineer passionate about building systems that combine Large Language Models, multimodal AI and scalable backend infrastructure. I enjoy solving real-world problems through research, engineering and clean product design."
};

export const experience = [
  {
    company: "Predusk Technology",
    role: "AI Engineer",
    date: "Apr 2026 — Present",
    points: [
      "Engineered a production IAA framework with IoU, F1-score and Cohen's Kappa over 5,000+ annotations, reducing QA effort by approximately 60%.",
      "Built a speaker diarization pipeline on Sarvam Saras v3/v4, reducing DER to approximately 13% and manual labeling effort by approximately 40%.",
      "Architected multi-tenant RBAC with JWT-scoped tokens across 5+ microservices to prevent cross-tenant data leakage."
    ]
  },
  {
    company: "NeoLen",
    role: "AI Engineer Intern",
    date: "Jan 2026 — Apr 2026",
    points: [
      "Designed a multi-agent LangGraph system for clinical decision support using triage, recommendation and contraindication-check agents.",
      "Built streaming STT/TTS voice agents with context-window pruning, improving response efficiency by approximately 35%.",
      "Built LLM-based extraction pipelines for symptoms and vitals from unstructured EHR notes, reducing consultation turnaround by approximately 30%."
    ]
  }
];

export const projects = [
  {
    number: "01",
    name: "SatyaNetra",
    type: "Multimodal Deepfake Detection",
    description: "A multimodal detector combining visual and audio signals to identify manipulated video.",
    details: [
      "Fused ResNet50 + LSTM spatiotemporal facial features with YAMNet audio embeddings using late fusion.",
      "Modeled temporal artifacts such as flickering and inconsistent blending.",
      "Built an OpenCV preprocessing pipeline for face alignment, frame sampling and normalization."
    ],
    stack: ["PyTorch", "ResNet50", "LSTM", "YAMNet", "OpenCV"],
    metric: "~92% accuracy",
    image: "/images/satyanetra.svg",
    github: "https://github.com/aryan07-exe/Deepfake"
  },
  {
    number: "02",
    name: "DocMind",
    type: "RAG Document Assistant",
    description: "A document intelligence application using semantic retrieval and evaluation-driven RAG.",
    details: [
      "Built a RAG pipeline with semantic chunking to preserve context across page and section boundaries.",
      "Implemented document ingestion and vector retrieval with ChromaDB.",
      "Used RAGAS to measure context precision, faithfulness and answer relevancy across 50 queries."
    ],
    stack: ["RAG", "LangChain", "FastAPI", "ChromaDB", "Docker"],
    metric: "~0.84 faithfulness baseline",
    image: "/images/docmind.svg",
    github: "https://github.com/aryan07-exe"
  },
  {
    number: "03",
    name: "CLI Based Agent",
    type: "Terminal AI Agent",
    description: "A terminal-based AI agent with LangGraph, sandboxed tools and persistent project memory.",
    details: [
      "Built ask, plan and agent modes using conditional routing and a cyclic LLM ↔ Tools graph.",
      "Added project-scoped sandboxed file tools with path-escape protection and 20+ adversarial tests.",
      "Implemented PostgreSQL checkpointing and two-layer memory using transcripts and LLM-generated summaries."
    ],
    stack: ["LangGraph", "PostgreSQL", "Python", "OpenRouter"],
    metric: "20+ security tests · zero escapes",
    image: "/images/cli-agent.svg",
    github: "https://github.com/aryan07-exe"
  }
];

export const skillGroups = [
  { title: "Generative AI & LLMs", items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "PEFT / LoRA / QLoRA", "LiteLLM", "Pydantic"] },
  { title: "ML & Computer Vision", items: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "CNN", "RNN / LSTM", "ResNet50", "YAMNet"] },
  { title: "Backend & Infrastructure", items: ["FastAPI", "Flask", "REST APIs", "Docker", "PostgreSQL", "Redis", "Celery", "CI/CD", "Linux"] },
  { title: "Languages & Data", items: ["Python", "SQL", "JavaScript", "Java", "Pandas", "NumPy", "EDA", "Data Quality Profiling"] }
];

export const achievements = [
  { title: "2nd Place", event: "IIITM Gwalior Hackathon" },
  { title: "Runner-up", event: "NIT Bhopal Hackathon" },
  { title: "Top 5 Finalist", event: "IIT Bombay National Hackathon · 100+ teams" }
];