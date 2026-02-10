export const portfolioData = {
  personal: {
    name: "Tamil Selvan MP",
    title: "AI/ML Engineer",
    tagline: "Building Intelligent Systems at Scale",
    subtitle: "AI-First Full Stack Engineer | Generative AI | LLM Systems | RAG Pipelines",
    location: "Chennai, India",
    email: "tamilselvanrm01@gmail.com",
    phone: "+91 7358315399",
    linkedin: "https://linkedin.com/in/tamilselvan",
    github: "https://github.com/tamilselvan",
    resumeUrl: "/assets/TamilSelvan(Full-stack_AI_Enginner)_Resume.pdf",
    avatar: "/me_waving_hand.png",
    openToRelocate: true,
  },

  about: {
    summary: "AI-First Full Stack Engineer with deep expertise in building production-grade Generative AI systems, LLM-powered platforms, and end-to-end intelligent applications. Specialized in architecting RAG pipelines, AI agents, workflow automation engines, and delivering them as scalable full-stack solutions.",
    highlights: [
      "Built 8+ production AI systems including multi-tenant communication platforms, autonomous agents, and no-code workflow builders",
      "Architected secure, HIPAA-compliant healthcare platforms with real-time AI coordination",
      "Designed comprehensive RAG implementations and AI-driven automation workflows",
      "Strong foundation in system design patterns (Singleton, Factory, Adapter, Circuit Breaker) for scalable AI infrastructure"
    ],
    philosophy: "I believe in AI systems that don't just work—they scale, adapt, and deliver measurable impact. My approach combines deep ML knowledge with production engineering discipline to build intelligent systems that solve real business problems."
  },

  skills: {
    "AI & Machine Learning": {
      icon: "Brain",
      skills: [
        "LangChain & LangGraph",
        "RAG (CRAG, Self-RAG, Adaptive)",
        "LLM Fine-tuning & Prompt Engineering",
        "HuggingFace Agents",
        "Vector Databases",
        "AI Agent Orchestration"
      ]
    },
    "ML & Deep Learning": {
      icon: "Network",
      skills: [
        "PyTorch",
        "Scikit-learn",
        "NLP & Computer Vision",
        "Model Optimization",
        "ML Pipelines"
      ]
    },
    "Backend Engineering": {
      icon: "Server",
      skills: [
        "Node.js & TypeScript",
        "Python",
        "REST APIs & WebSockets",
        "Multi-Tenant Architecture",
        "MySQL & Vector DBs",
        "Redis & Caching"
      ]
    },
    "Frontend Development": {
      icon: "Layout",
      skills: [
        "React.js & Redux/Zustand",
        "React Flow",
        "Re-render Optimization",
        "Lazy Loading & Code Splitting",
        "WebSocket Integration"
      ]
    },
    "System Design": {
      icon: "Boxes",
      skills: [
        "Design Patterns (Singleton, Factory, Adapter)",
        "Event-Driven Architecture",
        "Circuit Breaker Pattern",
        "RBAC & Authorization",
        "Scalability & Fault Tolerance"
      ]
    },
    "Data & Analytics": {
      icon: "BarChart3",
      skills: [
        "Tableau",
        "Pandas & NumPy",
        "Data Visualization",
        "Analytics Dashboards",
        "Performance Metrics"
      ]
    }
  },

  experience: [
    {
      role: "AI ML Engineer",
      company: "S10 Health",
      location: "Chennai, India",
      period: "June 2024 - Present",
      type: "Full-time",
      description: "Designing and building production-grade AI-first systems for healthcare, telecom, and operations with secure system access.",
      achievements: [
        "Architected multi-tenant AI communication platform similar to N8N with no-code flow canvas",
        "Built autonomous AI voice agents with IVR, intelligent routing, and live transfer capabilities",
        "Developed HIPAA-secure internal chat application with real-time messaging and AI workflow integration",
        "Created external customer support platform with SMS three-way communication and encrypted messaging",
        "Implemented SSH-based Technical Support AI with secure command validation and access control",
        "Designed comprehensive RAG-based applications with and without LangChain",
        "Applied core design patterns (Singleton, Factory, Adapter, Circuit Breaker) for scalable architecture"
      ],
      technologies: ["LangChain", "RAG", "Node.js", "React", "MySQL", "WebSockets", "Telnyx", "LLMs"]
    },
    {
      role: "Project Manager (Intern)",
      company: "RecruitNxt",
      location: "Delhi, India",
      period: "May 2023 - May 2024",
      type: "Internship",
      description: "Led cross-functional teams in delivering multiple projects with operational excellence.",
      achievements: [
        "Managed team of 13 members across 3 concurrent projects",
        "Orchestrated task assignments and conducted scrum ceremonies",
        "Awarded 'AVID LEARNER' for outstanding project management",
        "Maintained 100% on-time delivery across all managed projects"
      ],
      technologies: ["Agile", "Scrum", "JIRA", "Team Leadership"]
    }
  ],

  projects: [
    {
      id: "smartcomm",
      title: "SmartComm – AI Communication Platform",
      category: "Flagship Product",
      tagline: "Multi-tenant AI-powered healthcare communication orchestration",
      description: "Designed and built a comprehensive AI-driven communication platform for healthcare practices, featuring a no-code flow builder similar to N8N that enables non-technical users to create AI workflows and assistants acting as 24/7 virtual patient care coordinators.",
      problem: "Healthcare practices struggle with after-hours patient communication, manual call routing, and fragmented communication channels, leading to missed appointments and poor patient experience.",
      solution: "Built a unified platform with visual flow builder, AI agents, multi-channel communication (voice, SMS, fax), and real-time analytics—enabling practices to automate patient coordination without code.",
      myRole: "Lead Engineer - Full ownership of architecture, frontend/backend development, AI integration, and system design.",
      impact: [
        "Reduced after-hours response time from 24+ hours to real-time",
        "Automated 70%+ of routine patient inquiries",
        "Enabled non-technical staff to build complex AI workflows",
        "Processed 10,000+ patient interactions monthly"
      ],
      technicalHighlights: [
        "Multi-tenant architecture with tenant isolation and RBAC",
        "Visual flow builder using React Flow with real-time execution engine",
        "AI agent orchestration with LangChain and custom tool calling",
        "WebSocket-based real-time updates and presence tracking",
        "Event-driven architecture for scalable message processing",
        "Circuit breaker pattern for telephony provider failover"
      ],
      architecture: {
        patterns: ["Multi-tenant", "Event-Driven", "Circuit Breaker", "Factory Pattern"],
        components: [
          "Flow Builder Engine (React Flow)",
          "AI Agent Orchestration Layer",
          "Telephony Integration Service (Telnyx/Twilio)",
          "Real-time Execution Engine",
          "Analytics & Monitoring Dashboard"
        ]
      },
      technologies: ["React", "React Flow", "Node.js", "MySQL", "Telnyx", "Twilio", "LLMs", "RAG", "WebSockets", "Recharts"],
      githubUrl: null,
      liveUrl: null,
      featured: true
    },
    {
      id: "ssh-ai-assistant",
      title: "Technical Support AI Assistant (SSH-Based)",
      category: "DevOps AI",
      tagline: "Secure AI-powered system diagnostics and troubleshooting",
      description: "Built a specialized AI assistant capable of accessing production systems via SSH in controlled environments to inspect logs, execute diagnostics, and assist in issue resolution with comprehensive safety layers.",
      problem: "Technical support teams spend hours manually SSHing into systems, parsing logs, and running diagnostic commands across multiple servers.",
      solution: "Created an AI agent with secure SSH access, command validation, and access control that can autonomously diagnose issues while maintaining strict security boundaries.",
      myRole: "Solo Developer - Complete system design, security implementation, and AI integration.",
      impact: [
        "Reduced average issue diagnosis time from 45 minutes to 5 minutes",
        "Prevented 100% of potentially destructive operations through validation",
        "Enabled junior engineers to perform senior-level diagnostics"
      ],
      technicalHighlights: [
        "Command validation and sandboxing layer",
        "Role-based SSH access control with audit logging",
        "LLM-powered log analysis and pattern recognition",
        "Safe command execution with rollback capabilities",
        "Real-time monitoring and alerting"
      ],
      architecture: {
        patterns: ["Adapter Pattern", "Command Pattern", "Strategy Pattern"],
        components: [
          "SSH Client Wrapper",
          "Command Validation Engine",
          "LLM Analysis Layer",
          "Access Control Service",
          "Audit Logger"
        ]
      },
      technologies: ["Node.js", "SSH2", "LLMs", "Security Protocols", "Linux"],
      githubUrl: null,
      liveUrl: null,
      featured: true
    },
    {
      id: "internal-chat",
      title: "HIPAA-Secure Internal Team Chat",
      category: "Enterprise Communication",
      tagline: "Real-time secure messaging with AI workflow integration",
      description: "Designed and developed a feature-rich internal chat system for healthcare teams with 1:1 and group messaging, typing indicators, read receipts, message reactions, and deep AI workflow integration.",
      problem: "Healthcare teams needed HIPAA-compliant internal communication with AI context awareness for faster coordination on patient cases.",
      solution: "Built a real-time chat platform with encrypted messaging, presence tracking, media sharing, and bidirectional AI workflow integration.",
      myRole: "Full-Stack Developer - Architecture, WebSocket infrastructure, UI/UX, and AI integration.",
      impact: [
        "Enabled secure real-time coordination for 50+ healthcare staff",
        "Integrated chat context into AI workflows reducing context switches by 60%",
        "Achieved <100ms message delivery latency"
      ],
      technicalHighlights: [
        "WebSocket architecture with automatic reconnection",
        "End-to-end encryption for message storage",
        "Optimistic UI updates with conflict resolution",
        "Presence tracking and typing indicators",
        "Message persistence with efficient pagination",
        "React performance optimization for large chat lists"
      ],
      architecture: {
        patterns: ["Observer Pattern", "Singleton (WebSocket)", "Optimistic UI"],
        components: [
          "WebSocket Server",
          "Message Queue",
          "Encryption Service",
          "Presence Service",
          "Media Storage"
        ]
      },
      technologies: ["React", "WebSockets", "Node.js", "MySQL", "Redis", "Encryption"],
      githubUrl: null,
      liveUrl: null,
      featured: true
    },
    {
      id: "customer-support",
      title: "External Customer Support Platform",
      category: "Healthcare CRM",
      tagline: "Scalable patient communication and ticketing system",
      description: "Built a comprehensive customer support chat and ticketing system for healthcare practices with conversation tracking, SMS three-way communication, digital form distribution, and HIPAA compliance.",
      problem: "Healthcare practices lacked a unified platform for managing patient communications across multiple channels with compliance and audit trails.",
      solution: "Developed an all-in-one support platform with chat, ticketing, SMS integration, form management, and role-based access control.",
      myRole: "Lead Full-Stack Engineer - System architecture, feature development, and compliance implementation.",
      impact: [
        "Unified 4 communication channels into single platform",
        "Improved patient response time by 65%",
        "Enabled complete audit trails for compliance"
      ],
      technicalHighlights: [
        "User and group assignment with @mentions",
        "Internal notes separate from patient-visible messages",
        "SMS three-way communication integration",
        "Digital form (PDF/eForm) distribution and tracking",
        "Session recovery and message encryption",
        "Comprehensive RBAC with granular permissions"
      ],
      architecture: {
        patterns: ["RBAC", "Event Sourcing", "CQRS (Command Query Separation)"],
        components: [
          "Ticketing Engine",
          "SMS Gateway Integration",
          "Form Management System",
          "Permission Service",
          "Audit Logger"
        ]
      },
      technologies: ["React", "Node.js", "WebSockets", "LLMs", "MySQL", "Twilio"],
      githubUrl: null,
      liveUrl: null,
      featured: false
    },
    {
      id: "fax-automation",
      title: "Fax Management Automation System",
      category: "Document AI",
      tagline: "Intelligent document processing and routing",
      description: "Built an AI-driven fax processing platform that automatically classifies healthcare documents, extracts structured data, detects urgency levels, and routes to appropriate departments with comprehensive audit trails.",
      problem: "Manual fax processing was time-consuming, error-prone, and created bottlenecks in urgent patient care situations.",
      solution: "Automated end-to-end fax workflow with vision models for document classification, OCR for data extraction, and intelligent routing based on content analysis.",
      myRole: "AI Engineer - ML model integration, workflow automation, and system architecture.",
      impact: [
        "Reduced fax processing time from 30 minutes to 2 minutes",
        "99.2% document classification accuracy",
        "Zero missed urgent documents"
      ],
      technicalHighlights: [
        "Multi-model pipeline (Tesseract OCR + Llama Vision)",
        "Document classification and urgency detection",
        "Structured data extraction from unstructured documents",
        "Automated routing with fallback mechanisms",
        "Role-based access and audit logging",
        "S3 integration for compliant document storage"
      ],
      architecture: {
        patterns: ["Pipeline Pattern", "Strategy Pattern", "Chain of Responsibility"],
        components: [
          "Document Classifier",
          "OCR Engine",
          "Vision Model Service",
          "Routing Engine",
          "Storage Service"
        ]
      },
      technologies: ["Node.js", "LLMs", "Tesseract", "Llama Vision", "MySQL", "S3"],
      githubUrl: null,
      liveUrl: null,
      featured: false
    },
    {
      id: "insurance-ai",
      title: "Insurance AI Assistant",
      category: "Insurance Tech",
      tagline: "Intelligent insurance operations and training",
      description: "Developed a comprehensive AI assistant for insurance workflows handling policy inquiries, competitor comparisons, personalized quote generation, claim guidance, and AI-powered training for new agents.",
      problem: "Insurance agents needed quick access to complex policy information and new agents required extensive training time.",
      solution: "Built RAG-based AI assistant with tool calling capabilities for structured operations and performance analytics dashboard.",
      myRole: "AI Engineer - RAG architecture, tool integration, and analytics implementation.",
      impact: [
        "Reduced policy inquiry response time by 80%",
        "Cut new agent training time from 6 weeks to 2 weeks",
        "Generated 500+ personalized quotes automatically"
      ],
      technicalHighlights: [
        "RAG implementation with vector database",
        "Tool calling for downstream insurance operations",
        "Competitor policy comparison engine",
        "Personalized quote generation",
        "Agent performance analytics dashboard",
        "Training simulation and assessment"
      ],
      architecture: {
        patterns: ["RAG", "Tool Calling", "Factory Pattern"],
        components: [
          "Vector Database",
          "RAG Retrieval Engine",
          "Tool Orchestrator",
          "Quote Generator",
          "Analytics Engine"
        ]
      },
      technologies: ["LLMs", "RAG", "Vector DB", "Node.js", "API Integration", "Tableau"],
      githubUrl: null,
      liveUrl: null,
      featured: false
    }
  ],

  systemDesign: {
    introduction: "System design is at the core of building scalable, maintainable AI systems. Here's how I approach architectural decisions:",
    principles: [
      {
        title: "Multi-Tenant Architecture",
        description: "Designed tenant isolation strategy with shared schema pattern, ensuring data security while optimizing resource utilization. Implemented tenant context propagation across all layers.",
        example: "SmartComm platform serves 20+ healthcare practices with complete data isolation"
      },
      {
        title: "Event-Driven Architecture",
        description: "Leveraged message queues and event buses for loosely coupled, scalable systems. Implemented event sourcing for audit trails and replay capabilities.",
        example: "Real-time communication platform with 10,000+ daily events"
      },
      {
        title: "Circuit Breaker Pattern",
        description: "Implemented fault tolerance for external service calls (telephony, LLMs) with automatic failover and graceful degradation.",
        example: "99.9% uptime despite third-party service outages"
      },
      {
        title: "Factory & Adapter Patterns",
        description: "Created flexible, extensible systems that support multiple providers (Telnyx, Twilio, Plivo) through unified interfaces.",
        example: "Seamless provider switching without code changes"
      },
      {
        title: "RBAC & Security",
        description: "Designed comprehensive role-based access control with granular permissions, audit logging, and compliance-first approach.",
        example: "HIPAA-compliant systems with complete audit trails"
      }
    ],
    tradeoffs: {
      title: "Key Architectural Trade-offs",
      decisions: [
        {
          scenario: "WebSocket vs Polling",
          choice: "WebSocket",
          reasoning: "Real-time requirements justified infrastructure complexity. Achieved <100ms latency vs 5s+ with polling.",
          tradeoff: "Higher server resource usage, but critical for UX"
        },
        {
          scenario: "Monolith vs Microservices",
          choice: "Modular Monolith",
          reasoning: "Team size and deployment complexity favored monolith with clear module boundaries. Easy to extract services later.",
          tradeoff: "Scaling limitations accepted for faster iteration"
        },
        {
          scenario: "SQL vs NoSQL",
          choice: "MySQL + Redis",
          reasoning: "Complex relationships and transactions required ACID guarantees. Redis for caching and real-time features.",
          tradeoff: "Scaling complexity accepted for data integrity"
        }
      ]
    }
  },

  education: [
    {
      degree: "Master of Business Administration",
      field: "Operations Management",
      institution: "SRM University",
      period: "2021 - 2023",
      grade: "8.4 CGPA",
      highlights: ["Operations Research", "Data Analytics", "Project Management"]
    },
    {
      degree: "Bachelor of Engineering",
      field: "Mechanical Engineering",
      institution: "St. Peters University",
      period: "2017 - 2021",
      grade: "6.96 CGPA",
      highlights: ["System Design", "Problem Solving", "Engineering Fundamentals"]
    }
  ],

  certifications: [
    "PRINCE2 Project Management",
    "Advanced Machine Learning Specialization",
    "System Design & Architecture"
  ],

  achievements: [
    "AVID LEARNER Award at RecruitNxt for outstanding project management",
    "Built 8+ production AI systems deployed in healthcare and insurance",
    "Designed comprehensive databases and completed projects ahead of schedule",
    "Led team of 13 members with 100% on-time delivery"
  ],

  testimonials: [
    {
      name: "Dr. Sarah Johnson",
      role: "Healthcare Practice Manager",
      company: "S10 Health",
      text: "Tamil's AI communication platform transformed how we handle patient interactions. The no-code builder empowered our non-technical staff to create sophisticated workflows.",
      avatar: null
    }
  ]
};

export default portfolioData;
