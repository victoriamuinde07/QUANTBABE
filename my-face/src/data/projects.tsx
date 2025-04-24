// src/data/projects.tsx

// Define the Project type interface
export interface Project {
  title: string;
  description: string;
  link: string;
  tags?: string[]; // Optional array of strings for tags
}

// Use the defined Project type for the array
export const projects: Project[] = [
  {
    title: "Quantbabe",
    description: "A quantitative analysis platform",
    link: "https://github.com/victoriamuinde07/QUANTBABE.git",
    tags: ["React", "TypeScript", "Python", "Django", "Javascript"]
  },
  {
    title: "Portfolio",
    description: "My developer portfolio website", // Description updated slightly
    // Consider updating this link if your portfolio has its own repo/URL
    link: "https://github.com/victoriamuinde07/my-face", // Example: Link to this repo
    tags: ["Next.js", "Tailwind CSS", "TypeScript"] // Added TypeScript tag
  }
  // Add more projects here if needed
];
