import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page introuvable"
        description="La page demandée n’est pas disponible. Retrouvez les formations et les équipes de P2A Formation depuis l’accueil."
      />
      <section className="mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center px-5 py-20 lg:px-8 lg:py-28">
        <p className="text-xs font-extrabold uppercase tracking-[.16em] text-p2a-orange">Page introuvable</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">
          Cette page n’est pas disponible.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-p2a-muted">
          Revenez à l’accueil ou explorez les formations pour trouver le parcours qui correspond à votre besoin.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button to="/">Retour à l’accueil</Button>
          <Button to="/formations" variant="secondary">Voir les formations</Button>
        </div>
      </section>
    </>
  );
}
