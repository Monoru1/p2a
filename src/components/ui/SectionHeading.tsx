export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return <div className="max-w-2xl"><p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-p2a-orange">{eyebrow}</p><h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.045em] text-p2a-ink sm:text-5xl">{title}</h2>{body && <p className="mt-5 text-base leading-7 text-p2a-muted sm:text-lg">{body}</p>}</div>;
}
