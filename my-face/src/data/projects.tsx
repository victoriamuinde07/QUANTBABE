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
    title: "Riaor Restauarant website",
    description: "Fun to go website project",
    link: "https://github.com/victoriamuinde07/Riaor-restaurant.git",
    tags: ["HTML","CSS","sass","bootstrap"]
  },
  {
    title: "AI-Powered Complaint Management System",
    description: "This is a AI-powered customer complaint management system that allows customers to lodge in finacial complaints and the trained NLP model gives the right complaint categorization",
    // Consider updating this link if your portfolio has its own repo/URL
    link: "https://github.com/victoriamuinde07/AI-Complaint-Management-System.git",
    tags: ["python","SQLAlchemy","Machine Learning Algorithms"]
  }
  // Add more projects here if needed
];
