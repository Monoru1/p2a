import { ArrowUpRight, Building2, GraduationCap, HeartPulse, ShieldCheck, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NeedIcon, TrainingNeed } from '../../content/needs';

const icons: Record<NeedIcon, typeof HeartPulse> = {
  health: HeartPulse,
  restaurant: UtensilsCrossed,
  company: Building2,
  required: ShieldCheck,
  growth: Sparkles,
  individual: GraduationCap,
};

export function NeedCard({ need }: { need: TrainingNeed }) {
  const Icon = icons[need.icon];
  return (
    <Link to={`/formations/${need.slug}`} className="group flex min-h-52 flex-col rounded-[1.6rem] border border-p2a-line bg-white p-5 shadow-[0_8px_24px_rgba(36,19,63,.035)] transition duration-300 hover:-translate-y-1 hover:border-p2a-violet/45 hover:shadow-[0_20px_45px_rgba(36,19,63,.11)] focus-visible:outline-offset-4 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-p2a-orange-soft text-p2a-orange transition group-hover:bg-p2a-violet group-hover:text-white"><Icon size={21} aria-hidden="true" /></span>
        <ArrowUpRight className="text-p2a-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} aria-hidden="true" />
      </div>
      <p className="mt-7 text-xs font-extrabold uppercase tracking-[.14em] text-p2a-muted">{need.label}</p>
      <h3 className="mt-2 max-w-xs text-lg font-extrabold leading-tight tracking-[-.035em]">{need.title}</h3>
      <p className="mt-3 text-sm leading-6 text-p2a-muted">{need.shortDescription}</p>
      <span className="mt-auto pt-5 text-sm font-extrabold text-p2a-violet">Voir les parcours conseillés</span>
    </Link>
  );
}
