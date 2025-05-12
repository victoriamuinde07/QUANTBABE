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
    title: "Riaor Construction website",
    description: "For Riaor system ltd",
    link: "https://riaor-construction.vercel.app/",
    tags: ["html","css","bootstrap"]

  },
  {
    title: "AI-Powered Complaint Management System",
    description: "This is a AI-powered customer complaint management system that allows customers to lodge in finacial complaints and the trained NLP model gives the right complaint categorization",
    // Consider updating this link if your portfolio has its own repo/URL
    link: "https://huggingface.co/spaces/d9lph8n/AI.Poweredcomplaint_management_system",
    tags: ["python","SQLAlchemy","Machine Learning Algorithms"]
  },
  {
    title: "Customer-Churn predictor Project",
    description: "The project focuses on predicting the likelyhood for customer to churn.By understanding the patterns,telcom companies such as SyriaTel can proactively enhance customer retention strategies, improve customer satisfaction and reduce financial losses",
    link: "https://github.com/victoriamuinde07/Data-science-project-SyrialTel-project.git",
    tags: ["Data analysis","Machine Learning"]
  },
  {
    title:"Riaor Task",
    description: "Riaor Reminder is a web-based productivity tool designed to help users manage their tasks and notes effectively. It features a dynamic to-do list with capabilities for adding, editing, and deleting tasks, as well as filtering them by status (all, active, completed). Users can set specific alarm times for tasks, triggering browser notifications and placeholder email reminders to ensure deadlines are met.",
    link: "https://task-reminder-app-xi.vercel.app/",
    tags: ["Vue.js","Firebase"]
  }
  // Add more projects here if needed
];
