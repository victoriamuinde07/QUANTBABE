// src/components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Fixed apostrophes */}
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Hi, I&apos;m Victoria! I&apos;m a passionate software developer specializing in cutting-edge AI solutions and quantum computing projects. With expertise spanning from conceptual design to implementation, I bridge the gap between innovative ideas and practical applications.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-500 dark:text-purple-300">
                My Expertise
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {/* ... list items ... */}
                 <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI/ML Development & Data Science</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Quantum Computing Projects</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Digital Assistant Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>UI/UX Design (Figma)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Full-stack Web Development</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-500 dark:text-purple-300">
                What Drives Me
              </h3>
               {/* Fixed apostrophes */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I&apos;m fascinated by the intersection of quantum computing and artificial intelligence, and how these technologies can solve complex real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I&apos;m not coding, you&apos;ll find me exploring the latest research papers, prototyping new ideas, or contributing to open-source scientific computing projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
