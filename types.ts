import { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Amenity {
  label: string;
  checked: boolean;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  interest: string;
  timeline: string;
  message: string;
  type: 'morar' | 'investir';
  newsletter: boolean;
}

export interface ImageItem {
  src: string;
  title: string;
  category: string;
}