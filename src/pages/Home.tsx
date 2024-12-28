import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center space-y-6 px-4"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I'm Seema
          <span className="text-primary block md:inline"> Software Engineer</span>
        </h1>
        <p className="text-xl text-muted-foreground w-full mx-auto">
          Full Stack Developer specializing in building exceptional digital experiences
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
