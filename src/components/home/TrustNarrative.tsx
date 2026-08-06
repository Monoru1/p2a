import { ArrowUpRight, BadgeCheck, CheckCircle2, ClipboardCheck, HandHeart, Landmark, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

const commitments = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Partir de votre réalité, pas d’un programme figé.',
    body: 'Avant de proposer un format, le besoin est clarifié : public, contexte métier, contraintes et résultats attendus. Vous savez pourquoi la formation est organisée et ce qu’elle doit faire évoluer.',
    detail: 'Pour les équipes comme pour les parcours individuels.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Rendre chaque apprentissage utile dès le retour sur le terrain.',
    body: 'Les contenus privilégient la mise en situation, les repères concrets et des méthodes que les participants peuvent s’approprier. L’objectif n’est pas seulement de transmettre : c’est de faire progresser les pratiques.',
    detail: 'Des modalités ajustées au rythme et au contexte des participants.',
  },
  {
    number: '03',
    icon: HandHeart,
    title: 'Vous accompagner avant, pendant et après la formation.',
    body: 'Du premier échange au suivi des acquis, P2A garde un cap simple : rendre le projet lisible et soutenable. L’accessibilité et les possibilités de financement sont étudiées avec vous, selon votre situation.',
    detail: 'Une réponse claire, même lorsque votre besoin n’est pas encore totalement défini.',
  },
];

export function TrustNarrative() {
  return (
    <section className="overflow-hidden border-y border-p2a-line bg-white px-5 py-20 sm:py-24 lg:px-8 lg:py-32" aria-labelledby="trust-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Pourquoi choisir P2A"
              title="La confiance se construit dans la façon de vous accompagner."
              body="Une formation a de la valeur lorsqu’elle répond à une situation concrète, reste compréhensible pour tous et produit des effets utiles au quotidien."
            />
            <Button to="/contact" variant="secondary" className="mt-8">
              Échanger sur mon besoin
            </Button>
          </div>

          <div className="space-y-4">
            {commitments.map(({ number, icon: Icon, title, body, detail }) => (
              <article key={number} className="group grid gap-5 rounded-[1.75rem] border border-p2a-line bg-p2a-canvas p-6 transition duration-300 hover:-translate-y-1 hover:border-p2a-violet/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(36,19,63,.08)] sm:grid-cols-[4.25rem_1fr] sm:p-8">
                <div className="flex items-start justify-between sm:block">
                  <span className="text-sm font-extrabold tracking-[-.03em] text-p2a-orange">{number}</span>
                  <span className="mt-7 grid h-11 w-11 place-items-center rounded-2xl bg-p2a-violet text-white transition group-hover:bg-p2a-orange" aria-hidden="true">
                    <Icon size={21} />
                  </span>
                </div>
                <div>
                  <h3 className="max-w-xl text-xl font-extrabold leading-tight tracking-[-.04em] sm:text-2xl">{title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-p2a-muted sm:text-base">{body}</p>
                  <p className="mt-5 flex items-start gap-2 text-sm font-bold text-p2a-ink"><CheckCircle2 className="mt-0.5 shrink-0 text-p2a-orange" size={17} aria-hidden="true" />{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-p2a-ink text-white shadow-[0_24px_65px_rgba(36,19,63,.18)] lg:grid-cols-[.85fr_1.15fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange"><BadgeCheck size={17} aria-hidden="true" />Une qualité vérifiable</p>
            <h3 className="mt-5 text-3xl font-extrabold leading-[1.03] tracking-[-.055em] sm:text-4xl">Un cadre reconnu pour prendre votre décision sereinement.</h3>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/72">P2A Formation est certifiée Qualiopi pour les actions de formation et les bilans de compétences. Cette certification encadre la qualité du parcours, de l’analyse du besoin à l’évaluation.</p>
            <Link className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-p2a-orange" to="/qualiopi">Comprendre ce que Qualiopi change pour vous <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="relative flex min-h-72 items-center bg-white p-7 sm:p-10 lg:p-12">
            <div className="absolute inset-y-0 left-0 hidden w-px bg-p2a-line lg:block" />
            <div className="w-full rounded-[1.5rem] bg-p2a-canvas p-6 ring-1 ring-p2a-line sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.14em] text-p2a-orange">Certification qualité</p>
                  <p className="mt-3 text-xl font-extrabold tracking-[-.035em] text-p2a-ink">Qualiopi · ICPF</p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-p2a-violet-soft text-p2a-violet"><Landmark size={21} aria-hidden="true" /></span>
              </div>
              <img className="mt-7 h-20 w-full object-contain object-left" src="/qualiopi.jpg" alt="Certification Qualiopi de P2A Formation délivrée par ICPF" />
              <p className="mt-6 border-t border-p2a-line pt-5 text-sm leading-6 text-p2a-muted">Le certificat officiel est présenté ici comme une preuve. Les résultats chiffrés, témoignages et logos partenaires pourront s’ajouter à ce bloc lorsqu’ils auront été validés.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
