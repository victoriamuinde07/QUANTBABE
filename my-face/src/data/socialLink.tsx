// src/data/socialLinks.ts
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example icons

// Define the type for a social link (optional but good practice)
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ size: number }>; // Or adjust type based on your icons
}

// Make sure you are exporting a const named socialLinks
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username', // <-- Replace with your URL
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile', // <-- Replace with your URL
    icon: FaLinkedin
  },
  // Add other links...
];
