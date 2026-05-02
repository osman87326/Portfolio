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
    id: "neural-shell-v2",
    name: "NEURAL_SHELL_v2",
    subtitle: "Machine Learning Interface / 2024",
    description: "A radical machine learning dashboard that visualizes neural network training in real-time. Designed for high-performance data processing and intuitive feedback.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQyGCYemSOVN6iB2Wfm5V9X_OLr5-IvGxpVLbXKzdc82iYgwncNk7rwbPyA2A7emjxUxFlLgUKRsN52T1m1UvehiV-F8bWmPqtz-rtz4I5PqXvt6DbZPH47bIpS4SN7rYsDiA9bCjcCqLf1Zho9NQPcaOpg0n6ZCYA_VTR7ZDJo2syx3l1mGMfmZbgR72k0Ps0a8jMoqMGrMR_uOVaWcQKvgp47e3JPEMW-C1qU_hBnjjvHMenJZs80xPfLjWrTL0DcNgcuwtEiMM9",
    techStack: ["Next.js", "Three.js", "GSAP", "TensorFlow.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    challenges: "Synchronizing high-frequency data streams from the ML model with the 3D visualization layer without dropping frames.",
    futurePlans: "Integrating multi-node training support and exportable model configuration protocols."
  },
  {
    id: "dark-data",
    name: "DARK_DATA",
    subtitle: "Data Visualization / 2024",
    description: "A radical redesign of big data visualization. No pie charts. No thrills. Just raw, aggressive insights delivered through high-contrast interfaces.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBupcZIY1mXAgKgG62YoN9SR14zhbLd0I6NBtwwYIXU-qpPVPA-A7OnGA5rEc-2lew7ysqrkU5wFdvGRAk-jLgPybjn2n5qfTyHxnY_32jKge5M4_7axky_9mVhbgaVZpm_UpmzD6LMFVt0O9_CWujxD18zjAgp7oNCpLokbiLwaaWMsCfBWTAb77RUTK7x_zvPNyzSZBPKRL0ZRGTr05C9HHMm7FpSXE5AW9cqcN1AXTNZZKo6fYpgkka49Hn14cuGEnbl0n2tVDGF",
    techStack: ["React", "D3.js", "Tailwind CSS", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    challenges: "Optimizing the rendering performance for datasets with over 100,000 nodes while maintaining interactive responsiveness.",
    futurePlans: "Real-time collaborative data exploration and VR/AR visualization support."
  },
  {
    id: "void-os",
    name: "VOID_OS",
    subtitle: "System Architecture / 2024",
    description: "A concept operating system interface focused on minimalist architecture and system-level transparency. Built for power users who demand total control.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBupcZIY1mXAgKgG62YoN9SR14zhbLd0I6NBtwwYIXU-qpPVPA-A7OnGA5rEc-2lew7ysqrkU5wFdvGRAk-jLgPybjn2n5qfTyHxnY_32jKge5M4_7axky_9mVhbgaVZpm_UpmzD6LMFVt0O9_CWujxD18zjAgp7oNCpLokbiLwaaWMsCfBWTAb77RUTK7x_zvPNyzSZBPKRL0ZRGTr05C9HHMm7FpSXE5AW9cqcN1AXTNZZKo6fYpgkka49Hn14cuGEnbl0n2tVDGF",
    techStack: ["TypeScript", "Next.js", "Node.js", "Rust (WASM)"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    challenges: "Building a secure communication layer between the WASM-based system core and the React-based UI.",
    futurePlans: "Full plugin architecture and decentralized cloud storage integration."
  }
];
