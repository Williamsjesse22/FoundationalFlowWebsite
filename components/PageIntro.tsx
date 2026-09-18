/** Opening band for inner pages: navy, continuous with the header. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="section tone-navy page-intro glow">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="body-large">{lead}</p>
        {children}
      </div>
    </section>
  );
}
