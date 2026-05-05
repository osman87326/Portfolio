export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  futurePlans: string;
}

export const projects: Project[] = [
  {
    id: "quantum-vision",
    name: "QUANTUM_VISION",
    subtitle: "Real-time AI Visualization / 2024",
    description: "An immersive data visualization platform that translates real-time AI inference streams into high-frequency 3D architectures. Built for neural network architects who need to see 'the ghost in the machine'.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    techStack: ["Next.js", "Three.js", "WebWorkers", "Tailwind CSS"],
    liveLink: "https://quantum-vision-demo.netlify.app",
    githubLink: "https://github.com/osman87326/quantum-vision",
    challenges: "Handling concurrent data streams from multiple AI models without causing main-thread stuttering. Solved by implementing a custom WebWorker orchestration layer.",
    futurePlans: "Integrating VR support via WebXR and adding a collaborative mode for distributed research teams."
  },
  {
    id: "neural-core-os",
    name: "NEURAL_CORE_OS",
    subtitle: "System Dashboard / 2024",
    description: "A radical redesign of system monitoring. Neural Core OS provides a visceral, high-contrast interface for server management, focusing on low-latency telemetry and aggressive error detection.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
    techStack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveLink: "https://neural-core-demo.netlify.app",
    githubLink: "https://github.com/osman87326/neural-core",
    challenges: "Visualizing 100k+ data points per second. Overcame this by leveraging D3's canvas rendering and implementing a robust data-throttling algorithm.",
    futurePlans: "Adding predictive maintenance alerts using local LLM integration and expanding the plugin ecosystem."
  },
  {
    id: "void-protocol",
    name: "VOID_PROTOCOL",
    subtitle: "Decentralized Auth / 2024",
    description: "A minimalist, high-security authentication protocol focusing on biometric transparency and decentralized identity verification. Built for the next generation of private digital spaces.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop",
    techStack: ["TypeScript", "WebAuthn", "Express", "MongoDB"],
    liveLink: "https://void-protocol-auth.netlify.app",
    githubLink: "https://github.com/osman87326/void-protocol",
    challenges: "Implementing a zero-knowledge proof system for identity verification while maintaining a sub-200ms login time.",
    futurePlans: "Developing a hardware-agnostic mobile companion app and integrating with existing Web3 identity providers."
  }
];
