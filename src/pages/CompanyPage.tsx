import { CheckCircle2, ClipboardCheck, MessagesSquare, Sparkles, Target, UsersRound } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';
import { FAQ } from '../components/ui/FAQ';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Timeline } from '../components/ui/Timeline';

const outcomes = [
  {
    icon: Target,
    title: 'Des priorités plus claires',
    body: 'Le parcours part de ce qui doit évoluer dans le travail, pas d’un programme posé d’avance.',
  },
  {
    icon: Sparkles,
    title: 'Des repères utilisables',
    body: 'Les participants repartent avec des gestes, des méthodes et des décisions qu’ils peuvent mobiliser.',
  },
  {
    icon: UsersRound,
    title: 'Une équipe mieux accompagnée',
    body: 'Le format tient compte du public, du contexte et des besoins d’adaptation exprimés en amont.',
  },
];

const method = [
  { title: 'Comprendre votre contexte', detail: 'Nous échangeons sur votre besoin, votre public, vos contraintes et les résultats attendus.' },
  { title: 'Construire le bon format', detail: 'Objectifs, modalités, durée et adaptations sont posés de façon claire avant le démarrage.' },
  { title: 'Faire apprendre en situation', detail: 'Les apports sont reliés à des cas concrets pour faciliter l’appropriation par les participants.' },
  { title: 'Mesurer et prolonger', detail: 'Les acquis et votre retour sont pris en compte pour donner une suite utile au parcours.' },
];

const questions = [
  {
    question: 'P2A peut-il former directement dans notre entreprise ?',
    answer: 'Oui. Lors du premier échange, le format intra-entreprise et ses adaptations sont étudiés selon vos contraintes, votre activité et vos équipes.',
  },
  {
    question: 'Comment savoir si une formation correspond à notre besoin ?',
    answer: 'Vous n’avez pas à choisir seul. P2A échange avec vous sur le contexte, le public concerné et l’objectif visé avant de vous orienter.',
  },
  {
    question: 'Les personnes en situation de handicap peuvent-elles être accompagnées ?',
    answer: 'Les besoins d’adaptation pédagogique, organisationnelle ou matérielle sont étudiés en amont afin de proposer un parcours accessible.',
  },
];

export function CompanyPage() {
  return (
    <>
      <Seo
        title="P2A Formation, un partenaire pour faire progresser vos équipes"
        description="Découvrez l’approche P2A Formation : une pédagogie concrète, des parcours adaptés et une démarche qualité certifiée Qualiopi."
      />

      <section className="relative overflow-hidden bg-p2a-violet-soft px-5 py-16 lg:px-8 lg:py-24">
        <div className="absolute -right-36 -top-44 h-[34rem] w-[34rem] rounded-full bg-p2a-orange/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.65fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">P2A Formation</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[.96] tracking-[-.065em] sm:text-6xl lg:text-7xl">
              Former utilement, pour que les pratiques changent vraiment.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-p2a-muted">
              P2A Formation accompagne les organisations et les professionnels avec des parcours concrets, pensés pour le terrain et construits autour de vos vrais enjeux.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact">Parler de mon besoin</Button>
              <Button to="/formations" variant="secondary">Explorer les formations</Button>
            </div>
          </div>

          <aside className="rounded-[1.75rem] bg-p2a-ink p-7 text-white shadow-xl shadow-p2a-violet/10 sm:p-8">
            <div className="flex items-center gap-3 text-p2a-orange"><MessagesSquare size={24} /><p className="text-xs font-extrabold uppercase tracking-[.15em]">Dès le premier échange</p></div>
            <h2 className="mt-6 text-2xl font-extrabold tracking-[-.045em]">Vous savez où vous allez.</h2>
            <ul className="mt-7 space-y-5">
              {['Votre besoin est clarifié.', 'Le bon format est identifié.', 'Les prochaines étapes sont explicites.'].map((item) => (
                <li className="flex gap-3 text-sm leading-6 text-white/80" key={item}><CheckCircle2 className="mt-0.5 shrink-0 text-p2a-orange" size={19} />{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="L’utilité avant tout" title="Une formation n’a de valeur que si elle trouve sa place dans le réel." body="Pour un employeur comme pour un particulier, le but n’est pas d’ajouter des heures de formation. C’est de pouvoir agir avec plus de confiance et de maîtrise." />
          <p className="max-w-sm border-l-2 border-p2a-orange pl-5 text-sm font-bold leading-6 text-p2a-muted">Chaque parcours est l’occasion de relier une attente concrète à une progression mesurable.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {outcomes.map(({ icon: Icon, title, body }) => (
            <article className="rounded-[1.65rem] border border-p2a-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-p2a-violet/35 hover:shadow-lg" key={title}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-p2a-orange-soft text-p2a-orange"><Icon size={22} /></span>
              <h2 className="mt-10 text-xl font-extrabold tracking-[-.035em]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-p2a-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-p2a-canvas px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Avant le programme</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.03] tracking-[-.055em]">On commence par parler de ce qui doit évoluer.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-p2a-muted">Un sujet, une obligation ou une envie de progresser ne racontent pas encore tout. Le premier travail consiste à comprendre le contexte pour proposer un parcours juste.</p>
            <Button to="/contact" className="mt-8">Échanger avec P2A</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Votre situation', 'Métier, environnement, niveau de départ et contraintes à prendre en compte.'],
              ['Votre objectif', 'Les compétences, pratiques ou repères que vous souhaitez renforcer.'],
              ['Votre public', 'Salariés, équipes, personnes en évolution ou en reconversion.'],
              ['Votre cadre', 'Durée, format, accessibilité et possibilités de financement à étudier.'],
            ].map(([title, body], index) => (
              <div className="rounded-2xl bg-white p-6 ring-1 ring-p2a-line" key={title}>
                <span className="text-xs font-black text-p2a-orange">0{index + 1}</span>
                <h3 className="mt-7 font-extrabold tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-p2a-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.72fr_1.28fr] lg:px-8 lg:py-28">
        <div><SectionHeading eyebrow="Une méthode lisible" title="Un parcours clair, du premier échange au bilan." body="Vous savez à quoi vous attendre. Les décisions sont prises avant le démarrage, puis les apprentissages sont suivis." /></div>
        <div className="rounded-[1.75rem] border border-p2a-line bg-white p-7 sm:p-9"><Timeline items={method} /></div>
      </section>

      <section className="bg-p2a-ink px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.75fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-p2a-orange"><ClipboardCheck size={24} /><p className="text-xs font-extrabold uppercase tracking-[.16em]">Certification Qualiopi</p></div>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-.055em]">Un cadre qualité qui vous protège, pas un logo posé sur une page.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">La démarche Qualiopi structure l’analyse de votre besoin, l’accessibilité, l’évaluation et l’amélioration des parcours. Pour vous, c’est une expérience plus claire et plus suivie.</p>
            <Button to="/qualiopi" variant="secondary" className="mt-8 border-white/25 bg-transparent text-white hover:border-white hover:bg-white hover:text-p2a-ink">Comprendre ce que cela change</Button>
          </div>
          <div className="rounded-[1.75rem] bg-white p-7 sm:p-9"><img src="/qualiopi.jpg" className="h-32 w-full object-contain" alt="Certification Qualiopi délivrée par ICPF" /><p className="mt-7 border-t border-p2a-line pt-6 text-sm leading-6 text-p2a-muted">P2A Formation est certifiée Qualiopi pour les catégories d’actions figurant sur son certificat officiel.</p></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-28">
        <SectionHeading eyebrow="Questions fréquentes" title="Les réponses utiles avant de vous engager." body="Si votre question est plus précise, l’équipe P2A vous répond directement." />
        <FAQ items={questions} />
      </section>

      <section className="bg-p2a-orange px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-ink/65">Votre projet peut commencer simplement</p><h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-.05em] text-p2a-ink">Expliquez-nous votre besoin : nous vous aidons à identifier le prochain pas utile.</h2></div>
          <Button to="/contact" className="shrink-0 bg-p2a-ink text-white hover:bg-white hover:text-p2a-ink">Être recontacté</Button>
        </div>
      </section>
    </>
  );
}
