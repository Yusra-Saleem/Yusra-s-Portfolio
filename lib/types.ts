import { type IconType } from 'react-icons';
import { type LucideIcon } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  details: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

export type Skill = {
  id: number;
  name: string;
  icon: IconType;
  category: string;
  details: string[];
  color: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};