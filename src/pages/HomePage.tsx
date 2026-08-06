import { Check } from 'lucide-react';
import { trainings } from '../data/trainings';
import { homeHero } from '../content/hero';
import { TrainingCard } from '../components/training/TrainingCard';
import { Button } from '../components/ui/Button';
import { Hero } from '../components/ui/Hero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TrustStrip } from '../components/ui/TrustStrip';
import { Seo } from '../components/seo/Seo';
import { TrustNarrative } from '../components/home/TrustNarrative';
import { NeedsExplorer } from '../components/training/NeedsExplorer';

export function HomePage() { return <><Seo title="Formation professionnelle à Carrières-sur-Seine" description="P2A Formation accompagne entreprises et professionnels avec des parcours concrets, certifiés et adaptés."/><Hero content={homeHero}/><TrustStrip/>
<TrustNarrative/>
<NeedsExplorer/>
<section className="bg-p2a-violet-soft px-5 py-22 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionHeading eyebrow="Catalogue" title="Des formations déjà choisies par les équipes."/><Button to="/formations" variant="secondary">Voir le catalogue</Button></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trainings.map(training => <TrainingCard training={training} key={training.slug}/>)}</div></div></section>
<section className="mx-auto grid max-w-7xl gap-12 px-5 py-22 lg:grid-cols-2 lg:px-8 lg:py-28"><div><SectionHeading eyebrow="Notre engagement qualité" title="La rigueur d’un cadre. La proximité d’un partenaire." body="La certification Qualiopi structure notre démarche : écoute des besoins, objectifs transparents, pédagogie adaptée et évaluation des acquis."/><Button to="/qualiopi" className="mt-8">Découvrir notre démarche</Button></div><div className="rounded-[2rem] bg-white p-7 ring-1 ring-p2a-line sm:p-9"><img className="h-24 w-full object-contain object-left" src="/qualiopi.jpg" alt="Certification Qualiopi délivrée par ICPF"/><div className="mt-10 grid gap-6">{['Une analyse de votre besoin en amont','Des modalités adaptées aux situations de handicap','Un suivi des acquis et de votre satisfaction'].map(item=><div className="flex gap-3" key={item}><Check className="mt-0.5 shrink-0 text-p2a-orange"/><p className="font-bold">{item}</p></div>)}</div></div></section>
<section className="bg-p2a-ink px-5 py-18 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Un projet de formation ?</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-.05em]">Parlons de ce qui ferait vraiment progresser vos équipes.</h2></div><Button to="/contact" className="bg-p2a-orange text-p2a-ink hover:bg-white">Être recontacté</Button></div></section></>; }
