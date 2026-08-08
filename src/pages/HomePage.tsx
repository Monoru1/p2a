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
<section className="bg-p2a-violet-soft px-5 py-20 sm:py-24 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionHeading eyebrow="Catalogue" title="Des formations déjà choisies par les équipes."/><Button to="/formations" variant="secondary">Voir le catalogue</Button></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trainings.map(training => <TrainingCard training={training} key={training.slug}/>)}</div></div></section>
<section className="bg-p2a-ink px-5 py-16 text-white sm:py-20 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Un projet de formation ?</p><h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-[-.05em]">Parlons de ce qui ferait vraiment progresser vos équipes.</h2></div><Button to="/contact" className="bg-p2a-orange text-p2a-ink hover:bg-white">Être recontacté</Button></div></section></>; }
