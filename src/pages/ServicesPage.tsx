import { BadgeCheck, ShieldCheck, UsersRound } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/ui/FAQ';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Timeline } from '../components/ui/Timeline';

const needs = [
  {
    icon: ShieldCheck,
    title: 'Sécuriser une activité',
    body: 'Prévention, hygiène, gestes professionnels ou réglementation : vos équipes ont besoin de repères fiables et applicables.',
  },
  {
    icon: UsersRound,
    title: 'Faire progresser une équipe',
    body: 'Management, qualité de vie au travail, métiers du soin ou de la restauration : les besoins ne sont jamais seulement théoriques.',
  },
  {
    icon: BadgeCheck,
    title: 'Répondre à une exigence',
    body: 'Une obligation ou un contrôle devient plus simple à gérer lorsque chacun comprend son rôle et sait agir au bon moment.',
  },
];

const offers = [
  {
    label: 'Intra-entreprise',
    title: 'Former là où le travail se fait.',
    body: 'Le parcours est étudié avec votre contexte, vos équipes et vos contraintes pour favoriser le transfert dans la pratique.',
    points: ['Format adapté à votre organisation', 'Situations proches de votre réalité', 'Planification construite avec vous'],
  },
  {
    label: 'Inter-entreprises',
    title: 'Avancer sur un parcours déjà structuré.',
    body: 'Une solution adaptée lorsque vous souhaitez inscrire une ou plusieurs personnes sur une formation identifiée.',
    points: ['Programme et objectifs explicites', 'Repères partagés avec d’autres professionnels', 'Accompagnement avant l’inscription'],
  },
  {
    label: 'Parcours métier',
    title: 'Préparer une évolution durable.',
    body: 'Pour les personnes qui se projettent vers un métier, P2A aide à clarifier le parcours, le format et les possibilités à étudier.',
    points: ['Échange autour du projet', 'Compétences métier structurées', 'Financements étudiés selon la situation'],
  },
];

const method = [
  { title: 'Partager le besoin', detail: 'Vous nous expliquez votre situation, vos équipes et le résultat attendu. Nous posons les premières questions utiles.' },
  { title: 'Définir la réponse', detail: 'Format, objectifs, public, calendrier, accessibilité et pistes de financement sont étudiés avant de démarrer.' },
  { title: 'Faire apprendre concrètement', detail: 'Apports ciblés, cas pratiques, mises en situation et retours d’expérience rapprochent la formation du travail réel.' },
  { title: 'Faire le point', detail: 'L’évaluation des acquis et votre retour donnent une lecture claire de ce qui a été appris et de ce qui peut suivre.' },
];

const questions = [
  { question: 'P2A peut-il adapter une formation à notre activité ?', answer: 'Oui. Le premier échange permet d’étudier le public, vos contraintes, les situations de travail et les objectifs pour retenir le format le plus pertinent.' },
  { question: 'Peut-on organiser une formation dans nos locaux ?', answer: 'Le format intra-entreprise peut être étudié pour organiser la formation au plus près de vos équipes et de votre environnement de travail.' },
  { question: 'Comment savoir quel financement est possible ?', answer: 'Les options dépendent de votre statut, du parcours et de votre projet. P2A vous oriente vers les pistes à étudier, notamment avec votre OPCO pour les entreprises.' },
  { question: 'Les formations sont-elles accessibles aux personnes en situation de handicap ?', answer: 'Les adaptations pédagogiques, organisationnelles ou matérielles sont étudiées en amont afin de proposer un accueil et un parcours adaptés.' },
];

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Prestations de formation pour les entreprises"
        description="P2A Formation conçoit des formations intra, inter et parcours métier pour sécuriser les pratiques et faire progresser vos équipes."
      />

      <section className="relative overflow-hidden bg-p2a-ink px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="absolute -left-28 top-0 h-[32rem] w-[32rem] rounded-full bg-p2a-violet blur-3xl" />
        <div className="absolute -right-36 bottom-[-18rem] h-[36rem] w-[36rem] rounded-full bg-p2a-orange/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.62fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Prestations entreprises</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.96] tracking-[-.065em] sm:text-6xl lg:text-7xl">Faire évoluer les pratiques, pas seulement cocher une formation.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">P2A Formation vous aide à transformer un besoin de conformité, de prévention ou de montée en compétences en une démarche claire, adaptée à vos équipes.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button to="/contact" className="bg-p2a-orange text-p2a-ink hover:bg-white">Parler de mon besoin</Button><Button to="/formations" variant="secondary" className="border-white/20 bg-white/10 text-white ring-0 hover:bg-white hover:text-p2a-ink">Voir les formations</Button></div>
          </div>
          <aside className="rounded-[1.75rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Pour décider sereinement</p>
            <h2 className="mt-5 text-2xl font-extrabold tracking-[-.045em]">Vous obtenez une réponse adaptée, pas un catalogue à déchiffrer.</h2>
            <div className="mt-8 grid gap-5 text-sm leading-6 text-white/75"><p>Un interlocuteur pour clarifier le besoin.</p><p>Un format discuté avant toute inscription.</p><p>Des financements et adaptations étudiés avec vous.</p></div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Les enjeux derrière votre demande" title="Une prestation utile commence par le problème à résoudre." body="Avant de parler de durée ou de programme, P2A vous aide à mettre des mots sur l’enjeu qui concerne réellement votre organisation." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">{needs.map(({ icon: Icon, title, body }) => <article className="rounded-[1.65rem] border border-p2a-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-p2a-violet/35 hover:shadow-lg" key={title}><span className="grid h-11 w-11 place-items-center rounded-2xl bg-p2a-orange-soft text-p2a-orange"><Icon size={22} /></span><h2 className="mt-10 text-xl font-extrabold tracking-[-.035em]">{title}</h2><p className="mt-3 text-sm leading-6 text-p2a-muted">{body}</p></article>)}</div>
      </section>

      <section className="bg-p2a-violet-soft px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Les réponses P2A" title="Trois façons de faire avancer votre projet." body="Le bon choix dépend de votre besoin, de votre public et du contexte dans lequel les compétences devront être mobilisées." /><Button to="/contact" variant="secondary">Identifier le bon format</Button></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{offers.map((offer, index) => <article className={`rounded-[1.75rem] p-7 sm:p-8 ${index === 0 ? 'bg-p2a-ink text-white' : 'bg-white text-p2a-ink ring-1 ring-p2a-line'}`} key={offer.label}><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">{offer.label}</p><h2 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-.045em]">{offer.title}</h2><p className={`mt-4 text-sm leading-6 ${index === 0 ? 'text-white/70' : 'text-p2a-muted'}`}>{offer.body}</p><ul className="mt-9 space-y-3">{offer.points.map(point => <li className={`flex gap-3 text-sm font-bold ${index === 0 ? 'text-white/85' : 'text-p2a-muted'}`} key={point}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-p2a-orange" />{point}</li>)}</ul></article>)}</div></div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-28"><div><SectionHeading eyebrow="Un accompagnement lisible" title="Quatre étapes pour passer d’une demande à une action utile." body="La méthode donne de la visibilité à vos équipes dès le premier échange et évite les décisions prises à l’aveugle." /></div><div className="rounded-[1.75rem] border border-p2a-line bg-white p-7 sm:p-9"><Timeline items={method} /></div></section>

      <section className="bg-p2a-canvas px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-p2a-line sm:p-9"><img src="/qualiopi.jpg" className="h-28 w-full object-contain object-left" alt="Certification Qualiopi délivrée par ICPF" /><div className="mt-8 border-t border-p2a-line pt-7"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Un cadre qualité tangible</p><p className="mt-3 text-sm leading-6 text-p2a-muted">L’analyse du besoin, les adaptations, l’évaluation et l’amélioration des parcours sont structurées par la démarche Qualiopi.</p></div></div><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Pourquoi travailler avec P2A</p><h2 className="mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-.055em]">La confiance se construit avant, pendant et après la formation.</h2><div className="mt-8 grid gap-5">{[['Avant', 'Un besoin clarifié et un cadre de formation explicite.'], ['Pendant', 'Des situations concrètes pour relier l’apprentissage au travail.'], ['Après', 'Des acquis évalués et un retour sur l’expérience vécue.']].map(([label, body]) => <div className="flex gap-4" key={label}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-p2a-orange-soft text-xs font-black text-p2a-orange">{label[0]}</span><div><h3 className="font-extrabold">{label}</h3><p className="mt-1 text-sm leading-6 text-p2a-muted">{body}</p></div></div>)}</div><Button to="/qualiopi" variant="text" className="mt-7 px-0">Découvrir notre démarche qualité</Button></div></div></section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-28"><SectionHeading eyebrow="FAQ entreprise" title="Les réponses à obtenir avant de prendre votre décision." body="Un sujet n’est pas couvert ? L’équipe P2A vous répond directement." /><FAQ items={questions} /></section>

      <section className="bg-p2a-orange px-5 py-16 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-ink/65">Commençons par une conversation utile</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-.05em] text-p2a-ink">Expliquez votre situation. Nous vous aiderons à identifier le format le plus pertinent.</h2></div><Button to="/contact" className="shrink-0 bg-p2a-ink text-white hover:bg-white hover:text-p2a-ink">Demander à être recontacté</Button></div></section>
    </>
  );
}
