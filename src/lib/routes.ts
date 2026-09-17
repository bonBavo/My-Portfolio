import { Briefcase, FileText, Home, Linkedin, Mail, Wrench } from 'lucide-react';

export type NavLink = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/#about', icon: Wrench },
  { name: 'Projects', path: '/projects', icon: Briefcase },
  { name: 'Resume', path: '/resume', icon: FileText },
  { name: 'Contact', path: '/#contact', icon: Mail },
  { name: 'LinkedIn', path: 'https://www.linkedin.com/in/braven-andrew-775a081b4', icon: Linkedin },
];
