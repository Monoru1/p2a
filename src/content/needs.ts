export type NeedIcon = 'health' | 'restaurant' | 'company' | 'required' | 'growth' | 'individual';

export interface TrainingNeed {
  slug: 'sante' | 'restauration' | 'entreprises' | 'obligatoires' | 'reconversion' | 'pour-moi';
  icon: NeedIcon;
  label: string;
  title: string;
  shortDescription: string;
  introduction: string;
  reasons: string[];
  trainingSlugs: string[];
  funding: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const trainingNeeds: TrainingNeed[] = [
  {
    slug: 'sante',
    icon: 'health',
    label: 'Santé & médico-social',
    title: 'Je travaille dans le secteur de la santé ou du médico-social',
    shortDescription: 'Développer des pratiques plus sûres, plus sereines et adaptées aux personnes accompagnées.',
    introduction: 'Vous accompagnez des personnes, coordonnez une équipe ou préparez un projet dans le secteur ? Ces parcours vous aident à faire évoluer vos pratiques avec des situations concrètes du médico-social.',
    reasons: ['Renforcer la prévention au quotidien', 'Préparer ou consolider un projet métier', 'Mieux accompagner les équipes et les publics'],
    trainingSlugs: ['animateur-prevention-medico-social', 'agent-service-medico-social', 'assistant-vie-familles'],
    funding: 'Selon votre situation, les possibilités OPCO, France Travail ou financement individuel sont étudiées avec vous.',
    faqs: [
      { question: 'Ces formations sont-elles adaptées à mon établissement ?', answer: 'Le contexte, le public et les contraintes de votre structure sont clarifiés avant de confirmer le format le plus pertinent.' },
      { question: 'Puis-je préparer une reconversion ?', answer: 'Oui. Les parcours métier permettent de construire un projet et de se préparer aux attendus du secteur.' },
    ],
  },
  {
    slug: 'restauration',
    icon: 'restaurant',
    label: 'Restauration',
    title: 'Je travaille dans la restauration',
    shortDescription: 'Sécuriser l’hygiène, la conformité et les réflexes de votre établissement.',
    introduction: 'De la manipulation des denrées au service, la qualité sanitaire repose sur des gestes partagés. Cette sélection vous permet de transformer les exigences réglementaires en pratiques concrètes.',
    reasons: ['Prévenir les risques de contamination', 'Structurer les bonnes pratiques d’hygiène', 'Préparer vos équipes aux contrôles et au quotidien'],
    trainingSlugs: ['hygiene-alimentaire-restauration'],
    funding: 'Le financement peut notamment être étudié avec votre OPCO selon votre situation et le projet de l’établissement.',
    faqs: [
      { question: 'La formation peut-elle se tenir dans notre établissement ?', answer: 'Le format intra-entreprise peut être étudié afin de relier les apprentissages aux réalités de votre activité.' },
      { question: 'Faut-il avoir des prérequis ?', answer: 'La formation Hygiène alimentaire actuellement proposée ne demande aucun prérequis.' },
    ],
  },
  {
    slug: 'entreprises',
    icon: 'company',
    label: 'Entreprise',
    title: 'Je souhaite former mon entreprise',
    shortDescription: 'Construire une réponse utile pour vos équipes, votre activité et vos obligations.',
    introduction: 'Vous partez d’un besoin d’équipe, d’une obligation ou d’un projet de prévention ? P2A vous aide à identifier le bon format, puis à organiser un parcours cohérent pour vos collaborateurs.',
    reasons: ['Répondre à un enjeu opérationnel', 'Former un collectif sans perdre de temps', 'Adapter le format à votre organisation'],
    trainingSlugs: ['sauveteur-secouriste-du-travail', 'gestes-postures-tms', 'prevention-risques-psychosociaux', 'prevenir-gerer-burn-out'],
    funding: 'Votre OPCO et votre plan de développement des compétences sont étudiés en fonction de votre besoin et du parcours retenu.',
    faqs: [
      { question: 'Peut-on former plusieurs collaborateurs ?', answer: 'Oui. Le besoin collectif, le public, les contraintes de planning et le lieu sont examinés avant de proposer une organisation.' },
      { question: 'Faut-il déjà connaître la formation à choisir ?', answer: 'Non. Le premier échange sert précisément à qualifier le besoin et à orienter votre projet.' },
    ],
  },
  {
    slug: 'obligatoires',
    icon: 'required',
    label: 'Obligations & prévention',
    title: 'Je recherche une formation obligatoire ou de prévention',
    shortDescription: 'Faire face à vos responsabilités avec des repères concrets et des équipes mieux préparées.',
    introduction: 'Vous cherchez à sécuriser vos pratiques, actualiser des compétences ou répondre à une obligation ? Cette sélection rassemble les parcours qui aident les organisations à agir avec méthode.',
    reasons: ['Prévenir les situations à risque', 'Actualiser des compétences essentielles', 'Mettre en place des repères directement mobilisables'],
    trainingSlugs: ['sauveteur-secouriste-du-travail', 'mac-sst', 'gestes-postures-tms', 'hygiene-alimentaire-restauration'],
    funding: 'Les financements sont étudiés selon la formation, votre statut et les dispositifs mobilisables par votre organisation.',
    faqs: [
      { question: 'Quelle formation correspond à mon obligation ?', answer: 'La réponse dépend du secteur, des risques et de l’organisation. P2A vous aide à qualifier votre besoin avant toute inscription.' },
      { question: 'Peut-on actualiser une certification SST ?', answer: 'Oui, le parcours MAC SST est destiné aux titulaires d’un certificat SST en cours de validité.' },
    ],
  },
  {
    slug: 'reconversion',
    icon: 'growth',
    label: 'Reconversion',
    title: 'Je souhaite évoluer ou me reconvertir professionnellement',
    shortDescription: 'Clarifier votre projet et vous préparer à une nouvelle étape professionnelle.',
    introduction: 'Changer de métier demande des repères, un parcours compréhensible et une réponse adaptée à votre situation. Ces formations métier sont conçues pour vous aider à vous projeter avec méthode.',
    reasons: ['Explorer un projet métier concret', 'Développer un socle de compétences', 'Être accompagné dans votre orientation'],
    trainingSlugs: ['agent-service-medico-social', 'assistant-vie-familles'],
    funding: 'France Travail, financement individuel et autres pistes possibles sont étudiés selon votre dossier et la formation choisie.',
    faqs: [
      { question: 'Puis-je échanger avant de m’engager ?', answer: 'Oui. Un premier échange permet de vérifier l’adéquation entre votre projet, la formation et les modalités possibles.' },
      { question: 'Ces parcours sont-ils en présentiel ?', answer: 'Les parcours métier actuellement présentés sont organisés en présentiel.' },
    ],
  },
  {
    slug: 'pour-moi',
    icon: 'individual',
    label: 'Parcours individuel',
    title: 'Je cherche une formation pour moi',
    shortDescription: 'Monter en compétences avec un parcours clair, utile et adapté à votre objectif.',
    introduction: 'Vous avez identifié un sujet, sans forcément savoir quelle formation choisir ? Commencez par le résultat que vous voulez obtenir : prévenir, mieux agir, actualiser vos connaissances ou préparer une évolution.',
    reasons: ['Faire progresser des compétences utiles', 'Trouver un format compatible avec votre projet', 'Comprendre les financements à étudier'],
    trainingSlugs: ['mac-sst', 'prevenir-gerer-burn-out', 'prevention-risques-psychosociaux'],
    funding: 'Les possibilités de financement sont vérifiées au cas par cas : aucune éligibilité n’est présumée.',
    faqs: [
      { question: 'Puis-je être accompagné pour choisir ?', answer: 'Oui. P2A vous aide à clarifier votre objectif et à identifier la formation la plus adaptée avant de vous engager.' },
      { question: 'Les formations sont-elles accessibles ?', answer: 'Les besoins d’adaptation sont étudiés en amont afin de proposer un parcours accessible.' },
    ],
  },
];

export function getTrainingNeed(slug: string | undefined) {
  return trainingNeeds.find((need) => need.slug === slug);
}
