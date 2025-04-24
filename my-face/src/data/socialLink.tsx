// src/data/socialLinks.ts
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Example icons

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
    url: 'https://github.com/victoriamuinde07',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victoria-muinde-2b80a132a/',
    icon: FaLinkedin
  },
  // Add other links...
];
