import { 
  Clock, 
  BookOpen, 
  FlaskConical, 
  Palette, 
  Computer, 
  Calculator,
  Globe,
  Users,
  Atom,
  Smartphone
} from 'lucide-react';

export const subjectIcons = {
  'Conciencia Histórica': Clock,
  'Ciencias Sociales III': Users,
  'Reacciones Químicas': Atom,
  'Actividades Artísticas y Culturales': Palette,
  'Desarrolla Aplicaciones Web': Computer,
  'Desarrolla Aplicaciones Móviles': Smartphone,
  'Submódulo I': Computer,
  'Submódulo III': BookOpen,
  'Submódulo IV': Calculator,
  'Química': FlaskConical,
  'Historia': Clock,
  'Arte': Palette,
  'Informática': Computer,
  'Matemáticas': Calculator,
  'Ciencias Sociales': Globe,
  'default': BookOpen
};

export const getSubjectIcon = (subject: string) => {
  return subjectIcons[subject] || subjectIcons.default;
};