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
    id: 'sportnest',
    name: 'SportNest_Platform',
    subtitle: 'Facility Booking Platform',
    description:
      'SportNest is a full-stack sports facility booking platform that helps users discover venues, reserve slots, and manage bookings while facility owners can securely manage listings, schedules, and availability through a role-based workflow.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Next.js 15', 'Tailwind CSS', 'Express.js', 'Node.js', 'MongoDB', 'JWT/Auth'],
    liveLink: 'https://assignment09-client-side.vercel.app',
    githubLink: 'https://github.com/osman87326/SportNest-ClientSide',
    challenges:
      'Designing ownership-scoped CRUD flows for facility owners and implementing dynamic slot pricing and booking status tracking without compromising the user experience.',
    futurePlans:
      'Add real-time notifications, online payments, and AI-based venue recommendations to create a more seamless booking journey.',
  },
  {
    id: 'digital-life-lessons',
    name: 'Digital_Lessons',
    subtitle: 'Wisdom Sharing Platform',
    description:
      'Digital Life Lessons is a full-stack knowledge-sharing platform where users can publish meaningful lessons, interact with content, and access premium features in a secure multi-role environment.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    techStack: ['Next.js', 'Tailwind CSS', 'Better Auth', 'MongoDB', 'Framer Motion', 'Recharts'],
    liveLink: 'https://assignment10-client-side.vercel.app',
    githubLink: 'https://github.com/osman87326/Digital-Life-Lessons',
    challenges:
      'Balancing secure authentication, role-based access, and analytics dashboards while keeping the experience fast, readable, and highly interactive.',
    futurePlans:
      'Expand monetization, add smarter content discovery, and ship richer community moderation tools for creators and readers.',
  },
];
