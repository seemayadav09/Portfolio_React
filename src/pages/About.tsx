import { motion } from 'framer-motion';
import { SkillCard } from '@/components/SkillCard';
import { Code2, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: <Globe className="h-5 w-5" /> },
    { name: 'Backend Development', level: 85, icon: <Server className="h-5 w-5" /> },
    { name: 'Database Management', level: 80, icon: <Database className="h-5 w-5" /> },
    { name: 'Problem Solving', level: 85, icon: <Code2 className="h-5 w-5" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="prose dark:prose-invert mb-8">
        <p className="text-lg text-muted-foreground">
          I am a passionate Software Engineer with expertise in full-stack development. 
          Graduate from University of Hyderabad with a CGPA of 8.5, I also hold a BS in 
          Data Science and Applications from IIT Madras.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default About;