export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section pageHero">
      <p className="eyebrow">FMLY BZNS</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}
