// src/components/ContactSection.tsx
import Link from 'next/link'; // If using Next.js Link for internal links, otherwise use <a>
import{  socialLinks }from'@/data/socialLink';

export default function ContactSection() {
  return (
    // Add the id="contact" to this main section tag
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400">
          Get In Touch
        </h2>
        <p className="text-lg max-w-prose mx-auto mb-8 text-gray-700 dark:text-gray-300">
          I'm currently open to new opportunities and collaborations.
          Feel free to reach out if you have a project in mind, want to connect, or just say hi!
        </p>
        <a
          href="mailto:victoriamuinde07@gmail.com"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded transition duration-200 mb-8"
        >
          Say Hello (Email Me)
        </a>

        {/* Optional: Add social links */}
        <div className="flex justify-center gap-6">
           {socialLinks.map((social) => (
             <a
               key={social.name}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               aria-label={social.name}
               className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition duration-200"
             >
               <social.icon size={28} /> {/* Assuming icons are React components */}
             </a>
           ))}
         </div>
      </div>
    </section>
  );
}
