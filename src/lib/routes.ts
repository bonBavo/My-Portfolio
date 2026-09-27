import { Briefcase, Code, FileText, Home, Mail, User } from 'lucide-react';

export type NavLink = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Work', path: '/projects', icon: Briefcase },
  { name: 'About', path: '/#about', icon: User },
  { name: 'Skills', path: '/#skills', icon: Code },
  { name: 'Resume', path: '/resume', icon: FileText },
  { name: 'Contact', path: '/#contact', icon: Mail },
];
