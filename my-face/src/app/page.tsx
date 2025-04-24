// src/app/page.tsx
import Layout from '@/components/layout';
import AboutSection from '@/components/AboutSection'; // Corrected import path
import ProjectsSection from '@/components/ProjectsSection'; // Corrected import path
import ContactSection from '@/components/ContactSection'; // Corrected import path
// ProjectCard is likely now defined within ProjectsSection or its own file

export default function Home() {
  return (
    <Layout>
      {/* Hero Section (can also be moved to its own component if desired) */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-purple-600 dark:text-purple-400">
          Victoria Muinde
        </h1>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          Full Stack Developer | Data Enthusiast
        </p>
        {/* Optional: Add a call-to-action button, e.g., linking to contact */}
        <a href="#contact" className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded transition duration-200">
          Get In Touch
        </a> 
      </section>

      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}

