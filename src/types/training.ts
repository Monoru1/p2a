export type TrainingCategory = 'Prévention & sécurité' | 'Santé & médico-social' | 'Hygiène alimentaire' | 'QVT & management';

export interface Training {
  slug: string;
  title: string;
  category: TrainingCategory;
  duration: string;
  price: string;
  certification: string;
  summary: string;
  objectives: string[];
  audience: string;
  prerequisites: string;
  methods: string[];
  assessment: string;
  format: 'Formation courte' | 'Parcours métier';
  funding: string[];
  highlights: string[];
  outcomes: string[];
  schedule: Array<{ title: string; detail: string }>;
  popular?: boolean;
  new?: boolean;
}
