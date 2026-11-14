import { SectionLabel } from "@/components/ui/SectionLabel";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { clients } from "@/data/clients";
import { getNumberedImages } from "@/lib/numbered-media";

export async function Clients() {
  const files = await getNumberedImages("clientes");
  const items = files.length
    ? files.map(({ number, src }) => ({
        number,
        src,
        name: clients[number - 1]?.name ?? `Empresa ${number}`,
      }))
    : clients.map((client, index) => ({ number: index + 1, src: client.image, name: client.name }));

  // La secuencia debe ocupar más que la pantalla incluso si hay pocas imágenes.
  const sequence = Array.from({ length: Math.max(1, Math.ceil(10 / items.length)) }, () => items).flat();

  return (
    <section className="section clients-section" id="clientes" aria-labelledby="clients-title">
      <div className="container-xxl">
        <div className="section-heading row align-items-end gy-4">
          <div className="col-lg-8">
            <SectionLabel>Experiencia y confianza</SectionLabel>
            <h2 id="clients-title" className="section-title">Empresas con las que <em>hemos trabajado.</em></h2>
          </div>
          <div className="col-lg-4"><p className="section-intro">Cada colaboración suma experiencia y nos impulsa a crear mejores soluciones.</p></div>
        </div>
        <div className="clients-marquee infinite-marquee" role="region" aria-label="Logotipos de clientes en carrusel continuo" tabIndex={0}>
          <div className="infinite-marquee__track clients-marquee__track">
            <div className="infinite-marquee__group">
              {sequence.map((client, index) => (
                <ClientLogo key={`client-original-${index}`} name={client.name} src={client.src} />
              ))}
            </div>
            <div className="infinite-marquee__group" aria-hidden="true">
              {sequence.map((client, index) => (
                <ClientLogo key={`client-copy-${index}`} name={client.name} src={client.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
