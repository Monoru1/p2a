import { trainingNeeds } from '../../content/needs';
import { SectionHeading } from '../ui/SectionHeading';
import { NeedCard } from './NeedCard';

export function NeedsExplorer() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:py-24 lg:px-8 lg:py-32" aria-labelledby="needs-title">
      <div className="pointer-events-none absolute left-[-14rem] top-20 h-80 w-80 rounded-full bg-p2a-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Trouver sa formation" title="Par où souhaitez-vous commencer ?" body="Plutôt que de parcourir un catalogue, choisissez la situation qui ressemble à la vôtre. Nous vous présenterons les parcours les plus pertinents." />
          <p className="max-w-xs text-sm leading-6 text-p2a-muted lg:text-right">Vous ne savez pas encore ? Chaque sélection vous explique pourquoi elle vous concerne.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {trainingNeeds.map((need) => <NeedCard key={need.slug} need={need} />)}
        </div>
      </div>
    </section>
  );
}
