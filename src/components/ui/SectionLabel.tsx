export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label"><span className="section-label__marker" aria-hidden="true" />{children}</span>;
}
