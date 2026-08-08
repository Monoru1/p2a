import type { TrainingCategory } from '../types/training';

/**
 * Central catalogue for editorial imagery.
 *
 * These images are intentionally independent from page components: when P2A
 * supplies a photograph from one of its sessions, only this file and the asset
 * in /public/media need to change. The current editorial visuals are clearly
 * temporary and must not be presented as photographs from P2A sessions.
 */
export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  source: 'editorial-temporary' | 'official';
};

export const brandMedia = {
  logo: {
    src: '/p2a-logo.png',
    alt: 'P2A Formation',
    width: 1515,
    height: 1522,
    source: 'official',
  },
  qualiopi: {
    src: '/qualiopi.jpg',
    alt: 'Certification Qualiopi de P2A Formation délivrée par ICPF',
    width: 1600,
    height: 582,
    source: 'official',
  },
} satisfies Record<string, MediaAsset>;

export const domainMedia: Record<TrainingCategory, MediaAsset> = {
  'Prévention & sécurité': {
    src: '/media/domains/prevention-securite.webp',
    alt: 'Une formatrice accompagne un exercice de gestes et postures avec un petit groupe de professionnels.',
    width: 1536,
    height: 1024,
    source: 'editorial-temporary',
  },
  'Hygiène alimentaire': {
    src: '/media/domains/hygiene-alimentaire.webp',
    alt: 'Un formateur échange avec des professionnels en cuisine sur les bonnes pratiques d’hygiène alimentaire.',
    width: 1536,
    height: 1024,
    source: 'editorial-temporary',
  },
  'Santé & médico-social': {
    src: '/media/domains/sante-medico-social.webp',
    alt: 'Une professionnelle accompagne une mise en situation de mobilité dans un contexte médico-social.',
    width: 1600,
    height: 836,
    source: 'editorial-temporary',
  },
  'QVT & management': {
    src: '/media/prestations/formation-entreprise.webp',
    alt: 'Un groupe de professionnels échange lors d’un atelier de formation en entreprise.',
    width: 1600,
    height: 878,
    source: 'editorial-temporary',
  },
};

export const serviceMedia: MediaAsset = {
  src: '/media/prestations/formation-entreprise.webp',
  alt: 'Un atelier de formation réunit un formateur et des professionnels autour d’un cas pratique.',
  width: 1600,
  height: 878,
  source: 'editorial-temporary',
};
