import { CheckCircle2, ChevronLeft, HandHeart, WalletCards } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getTrainingNeed } from '../content/needs';
import { trainings } from '../data/trainings';
import { Seo } from '../components/seo/Seo';
import { TrainingCard } from '../components/training/TrainingCard';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/ui/FAQ';

export function NeedLandingPage() {
  const { slug } = useParams();
  const need = getTrainingNeed(slug);
  if (!need) return <Navigate to="/formations" replace />;

  const recommended = need.trainingSlugs.flatMap((trainingSlug) => {
    const training = trainings.find((item) => item.slug === trainingSlug);
    return training ? [training] : [];
  });

  return <>
    <Seo title={need.title} description={need.shortDescription} />
    <section className="relative overflow-hidden bg-p2a-violet-soft px-5 py-14 sm:py-16 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute right-[-13rem] top-[-14rem] h-[33rem] w-[33rem] rounded-full bg-p2a-orange/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Link className="inline-flex items-center gap-2 text-sm font-bold text-p2a-violet transition hover:text-p2a-orange" to="/formations"><ChevronLeft size={17} aria-hidden="true" />Toutes les formations</Link>
        <p className="mt-9 text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Votre besoin</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[.98] tracking-[-.065em] sm:text-6xl">{need.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-p2a-muted">{need.introduction}</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button to="#formations">Voir les formations conseillées</Button><Button to="/contact" variant="secondary">Échanger sur mon projet</Button></div>
      </div>
    </section>
    <section className="border-b border-p2a-line bg-white px-5 py-10 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3">{need.reasons.map((reason) => <div className="flex gap-3" key={reason}><CheckCircle2 className="mt-0.5 shrink-0 text-p2a-orange" size={19} aria-hidden="true" /><p className="text-sm font-extrabold leading-6">{reason}</p></div>)}</div></section>
    <section id="formations" className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Sélection recommandée</p>
      <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><h2 className="max-w-2xl text-3xl font-extrabold leading-[1.07] tracking-[-.05em] sm:text-5xl">Des formations choisies pour cette situation.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-p2a-muted">Chaque parcours est présenté avec son objectif, son public et ce que les participants en retirent concrètement.</p></div><Link className="text-sm font-extrabold text-p2a-violet transition hover:text-p2a-orange" to="/formations">Voir tout le catalogue</Link></div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{recommended.map((training) => <TrainingCard training={training} key={training.slug} />)}</div>
    </section>
    <section className="bg-p2a-ink px-5 py-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-p2a-orange"><WalletCards size={23} aria-hidden="true" /></span><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Financement</p><h2 className="mt-2 text-2xl font-extrabold tracking-[-.04em]">Comprendre les options avant de vous engager.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">{need.funding}</p></div><Button to="/financements" className="bg-p2a-orange text-p2a-ink hover:bg-white">Étudier mon financement</Button></div></section>
    <section className="bg-p2a-canvas px-5 py-20 sm:py-24 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Questions utiles</p><h2 className="mt-4 text-3xl font-extrabold leading-[1.07] tracking-[-.05em] sm:text-5xl">Vous n’avez pas à choisir seul.</h2><p className="mt-5 max-w-md leading-7 text-p2a-muted">Ces réponses donnent un premier repère. Un échange avec P2A permet ensuite de confirmer le parcours et le format adaptés.</p></div><FAQ items={need.faqs} /></div></section>
    <section className="bg-white px-5 py-14 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-[2rem] bg-p2a-violet p-7 text-white sm:p-10 md:flex-row md:items-center"><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/12 text-p2a-orange"><HandHeart size={21} aria-hidden="true" /></span><div><p className="text-xs font-extrabold uppercase tracking-[.15em] text-white/65">Besoin d’un avis ?</p><h2 className="mt-2 text-2xl font-extrabold tracking-[-.04em]">Parlons de la formation la plus utile pour vous.</h2></div></div><Button to="/contact" className="bg-white text-p2a-ink hover:bg-p2a-orange">Parler à P2A</Button></div></section>
  </>;
}
