import { ArrowUpRight, Building2, GraduationCap, Menu, X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';

const primaryLinks = [
  { to: '/formations', label: 'Trouver une formation' },
  { to: '/entreprise', label: 'Former une équipe' },
  { to: '/financements', label: 'Financements' },
  { to: '/qualiopi', label: 'Qualité & accessibilité' },
];

const secondaryLinks = [
  { to: '/prestations', label: 'Nos prestations' },
  { to: '/entreprise', label: 'P2A Formation' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-p2a-line/80 bg-p2a-canvas/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="P2A Formation — Accueil">
          <img src="/p2a-logo.png" className="h-11 w-11 object-contain" alt="" />
          <span className="text-base font-extrabold tracking-[-0.04em]">P2A<span className="text-p2a-orange">Formation</span></span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {primaryLinks.map((link) => (
            <NavLink
              className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-p2a-violet' : 'text-p2a-muted hover:text-p2a-ink'}`}
              to={link.to}
              key={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/contact">Parler de votre projet</Button>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls={menuId}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="rounded-full p-2 text-p2a-ink transition-colors hover:bg-p2a-violet-soft"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id={menuId} className="border-t border-p2a-line bg-p2a-canvas px-5 pb-6 pt-5 shadow-[0_18px_35px_rgba(36,19,63,.08)] lg:hidden" aria-label="Navigation mobile">
          <p className="text-xs font-extrabold uppercase tracking-[.15em] text-p2a-muted">Comment pouvons-nous vous aider ?</p>
          <div className="mt-4 grid gap-3">
            <Link onClick={closeMenu} to="/formations" className="group flex items-center gap-4 rounded-2xl border border-p2a-line bg-white p-4 transition hover:border-p2a-violet hover:bg-p2a-violet hover:text-white">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-p2a-violet-soft text-p2a-violet group-hover:bg-white/15 group-hover:text-white"><GraduationCap size={21} /></span>
              <span className="min-w-0 flex-1"><span className="block font-extrabold">Je cherche une formation</span><span className="mt-1 block text-sm text-p2a-muted group-hover:text-white/75">Explorer les parcours adaptés à mon besoin.</span></span>
              <ArrowUpRight className="shrink-0 text-p2a-orange" size={20} />
            </Link>
            <Link onClick={closeMenu} to="/entreprise" className="group flex items-center gap-4 rounded-2xl border border-p2a-line bg-white p-4 transition hover:border-p2a-violet hover:bg-p2a-violet hover:text-white">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-p2a-orange-soft text-p2a-orange group-hover:bg-white/15"><Building2 size={21} /></span>
              <span className="min-w-0 flex-1"><span className="block font-extrabold">Je forme une équipe</span><span className="mt-1 block text-sm text-p2a-muted group-hover:text-white/75">Construire une réponse utile pour mon organisation.</span></span>
              <ArrowUpRight className="shrink-0 text-p2a-orange" size={20} />
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-x-4 border-t border-p2a-line pt-4">
            {[...primaryLinks.slice(2), ...secondaryLinks].map((link) => (
              <NavLink key={link.label} onClick={closeMenu} to={link.to} className="rounded-lg py-3 text-sm font-bold text-p2a-muted transition-colors hover:text-p2a-violet">
                {link.label}
              </NavLink>
            ))}
          </div>
          <Button to="/contact" onClick={closeMenu} className="mt-5 w-full">Parler de votre projet</Button>
        </nav>
      )}
    </header>
  );
}
