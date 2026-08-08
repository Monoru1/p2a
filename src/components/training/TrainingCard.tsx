import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Training } from '../../types/training';
import { domainMedia } from '../../content/media';
import { Badge } from '../ui/Badge';

export function TrainingCard({ training }: { training: Training }) {
  const media = domainMedia[training.category];
  return <Link to={`/formations/${training.slug}`} className="group flex min-h-80 flex-col overflow-hidden rounded-[1.6rem] border border-p2a-line bg-white transition duration-300 hover:-translate-y-1 hover:border-p2a-violet hover:shadow-[0_18px_50px_rgba(36,19,63,0.1)]"><div className="relative aspect-[16/7] overflow-hidden bg-p2a-violet-soft"><img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"/><div className="absolute inset-0 bg-gradient-to-t from-p2a-ink/35 via-transparent to-transparent"/></div><div className="flex flex-1 flex-col p-6"><div className="flex items-start justify-between gap-4"><div className="flex flex-wrap gap-2"><Badge>{training.category}</Badge>{training.popular&&<Badge tone="accent">Le plus demandé</Badge>}{training.new&&<Badge tone="success">Nouveau</Badge>}</div><ArrowUpRight className="shrink-0 text-p2a-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div><p className="mt-6 text-xs font-bold text-p2a-muted">{training.format}</p><h3 className="mt-2 text-xl font-extrabold leading-tight tracking-[-0.035em]">{training.title}</h3><p className="mt-3 text-sm leading-6 text-p2a-muted">{training.summary}</p><div className="mt-auto flex items-center justify-between border-t border-p2a-line pt-5 text-sm"><span className="inline-flex items-center gap-2 font-bold"><Clock3 size={15} /> {training.duration}</span><span className="font-bold text-p2a-violet">{training.price}</span></div></div></Link>;
}
