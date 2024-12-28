import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Mern's Café",
      description: 'A MERN-based Restaurant application with user authentication and secure payment processing.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Stripe'],
      githubUrl: 'https://github.com/seemayadav09/merns-cafe',
    },
    {
      title: 'CompileCode',
      description: 'MERN-based Online Code Compiler with real-time error detection and syntax highlighting.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/seemayadav09/compilecode',
    },
    {
      title: 'Video Bookmarker',
      description: 'Chrome Extension using JavaScript and Manifest V3 for bookmarking YouTube video timestamps.',
      technologies: ['JavaScript', 'Chrome Extensions', 'Manifest V3'],
      githubUrl: 'https://github.com/seemayadav09/video-bookmarker',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;