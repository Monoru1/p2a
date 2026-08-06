import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = { children: React.ReactNode; to?: string; variant?: 'primary' | 'secondary' | 'text'; className?: string };
export function Button({ children, to, variant = 'primary', className = '' }: Props) {
  const styles = {
    primary: 'bg-p2a-violet text-white hover:bg-p2a-ink',
    secondary: 'bg-white text-p2a-ink ring-1 ring-p2a-line hover:ring-p2a-violet',
    text: 'bg-transparent text-p2a-violet hover:text-p2a-orange'
  }[variant];
  const content = <>{children}<ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" /></>;
  const shared = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors ${styles} ${className}`;
  return to ? <Link className={shared} to={to}>{content}</Link> : <button className={shared}>{content}</button>;
}
