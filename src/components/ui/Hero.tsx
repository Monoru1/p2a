import { BadgeCheck, Check, CircleHelp, UsersRound } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { HeroContent } from '../../content/hero';
import { Button } from './Button';

type HeroProps = {
  content: HeroContent;
  variant?: 'default' | 'compact';
};

export function Hero({ content, variant = 'default' }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const entrance = reduceMotion ? { duration: 0 } : { duration: 0.55, ease: 'easeOut' as const };
  const visualEntrance = reduceMotion ? { duration: 0 } : { duration: 0.65, delay: 0.08, ease: 'easeOut' as const };

  return (
    <section className={`relative overflow-hidden px-5 lg:px-8 ${variant === 'compact' ? 'py-14 lg:py-20' : 'pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24'}`} aria-labelledby="hero-title">
      <div className="pointer-events-none absolute right-[-12rem] top-[-18rem] h-[40rem] w-[40rem] rounded-full bg-p2a-violet-soft blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-22rem] left-[35%] h-[32rem] w-[32rem] rounded-full bg-p2a-orange/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:gap-16">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} animate={{ opacity: 1, y: 0 }} transition={entrance}>
          <p className="inline-flex items-center gap-2 rounded-full border border-p2a-line bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[.12em] text-p2a-muted shadow-sm">
            <span className="h-2 w-2 rounded-full bg-p2a-orange" aria-hidden="true" />
            {content.eyebrow}
          </p>
          <h1 id="hero-title" className="mt-6 max-w-4xl text-[2.8rem] font-extrabold leading-[.97] tracking-[-.07em] sm:text-6xl lg:text-7xl">
            {content.title} <span className="text-p2a-violet">{content.highlightedTitle}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-p2a-muted sm:text-xl">
            {content.description}
          </p>

          <ul className="mt-7 grid gap-3 text-sm font-bold sm:grid-cols-2" aria-label="Les engagements de P2A Formation">
            {content.arguments.map((argument) => (
              <li className="flex items-start gap-3" key={argument}>
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-p2a-orange-soft text-p2a-orange"><Check size={13} strokeWidth={3} aria-hidden="true" /></span>
                <span>{argument}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={content.primaryAction.to}>{content.primaryAction.label}</Button>
            <Button to={content.secondaryAction.to} variant="secondary">{content.secondaryAction.label}</Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-p2a-muted" aria-label="Repères de confiance">
            {content.trustSignals.map((signal) => <li className="flex items-center gap-2" key={signal}><BadgeCheck size={16} className="text-p2a-orange" aria-hidden="true" />{signal}</li>)}
          </ul>
        </motion.div>

        <motion.aside initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={visualEntrance} className="relative overflow-hidden rounded-[2rem] bg-p2a-ink p-5 text-white shadow-[0_24px_65px_rgba(36,19,63,.24)] sm:p-7">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-p2a-orange" />
          <div className="rounded-[1.3rem] bg-white p-5 shadow-sm sm:p-6">
            <img className="h-28 w-full object-contain object-left sm:h-32" src={content.proof.imageSrc} alt={content.proof.imageAlt} decoding="async" fetchPriority="high" />
          </div>
          <div className="mt-7">
            <p className="text-xs font-extrabold uppercase tracking-[.15em] text-p2a-orange">{content.proof.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-.05em]">{content.proof.title}</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/75">{content.proof.detail}</p>
          </div>
          <div className="mt-7 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2">
            <div className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-p2a-orange"><UsersRound size={18} aria-hidden="true" /></span><p className="text-xs leading-5 text-white/75"><strong className="block text-sm text-white">Un besoin collectif ?</strong>Un format construit avec votre organisation.</p></div>
            <div className="flex gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-p2a-orange"><CircleHelp size={18} aria-hidden="true" /></span><p className="text-xs leading-5 text-white/75"><strong className="block text-sm text-white">Un projet individuel ?</strong>Une orientation claire avant de vous engager.</p></div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
