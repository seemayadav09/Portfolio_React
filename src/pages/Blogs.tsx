import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const Blogs = () => {
  const blogs = [
    {
      title: 'Understanding React Server Components',
      description: 'A deep dive into React Server Components and how they change the way we build React applications.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      url: '#',
    },
    {
      title: 'Building Scalable APIs with Node.js',
      description: 'Best practices for building and maintaining scalable Node.js APIs in production.',
      date: 'March 10, 2024',
      readTime: '7 min read',
      url: '#',
    },
    {
      title: 'Modern State Management in React',
      description: 'Exploring different state management solutions in React and when to use them.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      url: '#',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>
                {blog.date} · {blog.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{blog.description}</p>
              <Button variant="ghost" className="group" asChild>
                <a href={blog.url} target="_blank" rel="noopener noreferrer">
                  Read More
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;