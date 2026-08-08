import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = { children: React.ReactNode; to?: string; variant?: 'primary' | 'secondary' | 'text'; className?: string; onClick?: () => void; type?: 'button' | 'submit' };
export function Button({ children, to, variant = 'primary', className = '', onClick, type = 'button' }: Props) {
  const styles = {
    primary: 'bg-p2a-violet text-white hover:bg-p2a-ink',
    secondary: 'bg-white text-p2a-ink ring-1 ring-p2a-line hover:ring-p2a-violet',
    text: 'bg-transparent text-p2a-violet hover:text-p2a-orange'
  }[variant];
  const content = <>{children}<ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" /></>;
  const shared = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-[background-color,color,box-shadow,transform] duration-200 ease-out active:scale-[.98] ${styles} ${className}`;
  return to ? <Link className={shared} to={to} onClick={onClick}>{content}</Link> : <button type={type} className={shared} onClick={onClick}>{content}</button>;
}
