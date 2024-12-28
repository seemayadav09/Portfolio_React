import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/seemayadav09/',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/seemayadav09/',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/seemaaaa09',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:seemayadav982002@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Seema Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;