import { motion } from 'framer-motion';
import { ExperienceCard } from '@/components/ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      title: 'Engineering Intern',
      company: 'Syscloud Technologies',
      duration: 'Oct 2024 - Present',
      description: [
        'Utilized Cypress to develop and maintain automated end-to-end tests, ensuring the functionality and reliability of web applications.',
        'Collaborated with cross-functional teams to align testing strategies with development goals.',
      ],
      technologies: ['JavaScript', 'Cypress'],
    },
    {
      title: 'Software Engineer (Full Stack Developer) Intern',
      company: 'Adapt Ideations',
      duration: 'April 2024 - Oct 2024',
      description: [
        'Developed and maintained user interfaces using React.js, Redux, and Context API.',
        'Implemented a comprehensive Audit Trail feature.',
        'Built RESTful APIs using Node.js and Express.js.',
        'Managed data storage using AWS DynamoDB and Redis.',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'DynamoDB', 'AWS', 'Redis'],
    },
    {
      title: 'Remote Training and Internship',
      company: '1stMentor',
      duration: 'Nov 2021 - Jan 2022',
      description: [
        'Worked on Diwali Sales Data Analysis using pandas and seaborn libraries.',
        'Implemented targeted marketing strategies, reducing excess inventory costs by 20%.',
      ],
      technologies: ['Python', 'Pandas', 'Seaborn'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;