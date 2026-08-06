export interface HeroAction {
  label: string;
  to: string;
}

export interface HeroProof {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  detail: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  arguments: string[];
  trustSignals: string[];
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  proof: HeroProof;
}

export const homeHero: HeroContent = {
  eyebrow: 'Formation professionnelle · Carrières-sur-Seine',
  title: 'Des compétences qui font avancer',
  highlightedTitle: 'les personnes et les organisations.',
  description: 'P2A Formation transforme un besoin concret en parcours utile, humain et immédiatement mobilisable — pour les équipes comme pour les professionnels qui évoluent.',
  arguments: [
    'Des parcours construits autour de vos réalités de terrain.',
    'Une réponse claire, du premier échange au suivi des acquis.',
  ],
  trustSignals: ['Certifié Qualiopi', 'Présentiel · Intra · Inter', 'Financement étudié selon votre projet'],
  primaryAction: { label: 'Trouver une formation', to: '/formations' },
  secondaryAction: { label: 'Former mon équipe', to: '/entreprise' },
  proof: {
    imageSrc: '/qualiopi.jpg',
    imageAlt: 'Certificat Qualiopi de P2A Formation délivré par ICPF',
    eyebrow: 'Une qualité vérifiable',
    title: 'Certifié Qualiopi',
    detail: 'La certification qualité couvre les actions de formation et les bilans de compétences selon le certificat officiel P2A.',
  },
};
