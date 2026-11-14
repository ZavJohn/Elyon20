import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, ShieldCheck } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { privacy } from "@/data/privacy";
import "./privacidad.css";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Elyon Devs",
  description: "Conoce cómo Elyon Devs trata los datos personales que proporcionas en formularios, agendamiento, proyectos y canales de comunicación.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

const contents = [
  ["responsable", "Responsable del tratamiento"],
  ["alcance", "Alcance y datos recabados"],
  ["finalidades", "Finalidades del tratamiento"],
  ["datos-sensibles", "Datos sensibles y menores"],
  ["proveedores", "Proveedores y transferencias"],
  ["cookies", "Cookies, analítica y navegación"],
  ["ia", "Automatización, IA y proyectos de clientes"],
  ["conservacion", "Seguridad y conservación"],
  ["derechos", "Derechos ARCO"],
  ["limites", "Limitación, revocación y oposición"],
  ["cambios", "Actualizaciones y autoridad"],
] as const;

export default function AvisoDePrivacidadPage() {
  return (
    <div className="pv-page">
      <InnerPageHero
        eyebrow="PROTECCIÓN DE DATOS PERSONALES"
        title="Aviso de privacidad"
        description="Te explicamos qué información podemos recabar, para qué la utilizamos y cómo puedes ejercer tus derechos."
      />
      <section className="section pv-content" aria-labelledby="pv-intro">
        <div className="container-xxl">
          <div className="pv-intro">
            <div className="pv-intro__tag"><ShieldCheck size={21} aria-hidden="true" /> TU INFORMACIÓN IMPORTA</div>
            <h2 id="pv-intro">Transparencia en el uso de <span className="text-elyon">tus datos.</span></h2>
            <p>Este aviso informa sobre el tratamiento de datos personales en el sitio web y los canales de contacto de Elyon Devs, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México), publicada el 20 de marzo de 2025 y reformada el 14 de noviembre de 2025.</p>
            <p className="pv-updated">Última actualización del borrador: {privacy.lastUpdated}</p>
          </div>
          <div className="row g-4 g-xl-5">
            <aside className="col-lg-4 col-xl-3" aria-label="Contenido del aviso">
              <nav className="pv-index">
                <h2>En este aviso</h2>
                <ol>{contents.map(([href, title], index) => <li key={href}><a href={`#${href}`}><span>{String(index + 1).padStart(2, "0")}</span>{title}</a></li>)}</ol>
              </nav>
            </aside>
            <div className="col-lg-8 col-xl-9">
              <div className="pv-document">
                <section className="pv-section" id="responsable">
                  <h2>01. Responsable del tratamiento</h2>
                  <p><strong>{privacy.brand}</strong> es el nombre comercial utilizado para ofrecer servicios de desarrollo de software, diseño web, branding, marketing, aplicaciones, automatización, producción audiovisual y consultoría tecnológica.</p>
                  <p>Nombre o razón social de la persona responsable: <strong>{privacy.legalName}</strong>.</p>
                  <p>Domicilio para efectos del presente aviso: <strong>{privacy.legalAddress}</strong>.</p>
                  <p>Correo de contacto y solicitudes sobre datos personales: <a href={`mailto:${privacy.contactEmail}`}>{privacy.contactEmail}</a>.</p>
                </section>

                <section className="pv-section" id="alcance">
                  <h2>02. Alcance y datos personales recabados</h2>
                  <p>Este aviso cubre los datos que recibimos al utilizar nuestros formularios, solicitar cotizaciones, enviar mensajes, agendar reuniones, participar en proyectos o contratar servicios. Según el tipo de interacción, podremos tratar:</p>
                  <ul>
                    <li><strong>Identificación y contacto:</strong> nombre, correo, teléfono y datos de la persona representante de una empresa.</li>
                    <li><strong>Información comercial:</strong> nombre de empresa, puesto, servicios de interés, requerimientos, propuestas, contratos y comunicaciones relacionadas.</li>
                    <li><strong>Facturación y administración:</strong> datos fiscales y de pago estrictamente necesarios cuando exista una relación contractual. Si corresponde tratar datos financieros o patrimoniales, se recabará el consentimiento exigible por ley.</li>
                    <li><strong>Información técnica:</strong> datos de infraestructura, accesos técnicos autorizados, archivos, especificaciones y registros necesarios para ejecutar proyectos, bajo los acuerdos aplicables.</li>
                    <li><strong>Imagen y voz:</strong> materiales audiovisuales de participantes en producciones, entrevistas, podcasts o transmisiones, cuando estos formen parte del servicio contratado y existan las autorizaciones correspondientes.</li>
                    <li><strong>Navegación:</strong> información técnica como dirección IP, navegador, dispositivo y uso del sitio, de acuerdo con las tecnologías habilitadas y las preferencias aplicables.</li>
                  </ul>
                  <p>Los datos podrán ser proporcionados directamente por ti, por una empresa que representes o por un cliente con facultades para compartirlos para el proyecto correspondiente.</p>
                </section>

                <section className="pv-section" id="finalidades">
                  <h2>03. Finalidades del tratamiento</h2>
                  <h3>Necesarias para la relación contigo</h3>
                  <ul>
                    <li>Responder solicitudes, evaluar necesidades y preparar propuestas o cotizaciones.</li>
                    <li>Coordinar llamadas, reuniones y asesorías solicitadas mediante el sitio o servicios de agenda.</li>
                    <li>Celebrar, administrar y cumplir contratos; ejecutar proyectos, brindar soporte y dar seguimiento.</li>
                    <li>Gestionar la comunicación por correo, teléfono o WhatsApp y atender aclaraciones.</li>
                    <li>Emitir comprobantes fiscales y cumplir obligaciones legales o contractuales.</li>
                    <li>Proteger nuestros servicios, prevenir usos indebidos y atender solicitudes de derechos de datos personales.</li>
                  </ul>
                  <h3>Opcionales, sujetas a la elección que corresponda</h3>
                  <p>Enviar campañas, boletines, promociones, invitaciones comerciales o material de seguimiento no indispensable; utilizar testimonios, fotografías o videos con fines publicitarios; y realizar medición publicitaria no esencial, cuando dichas actividades se encuentren habilitadas y se haya obtenido la autorización aplicable.</p>
                  <p>La negativa para finalidades opcionales no impedirá que atendamos una consulta o prestemos el servicio principal.</p>
                </section>

                <section className="pv-section" id="datos-sensibles">
                  <h2>04. Datos sensibles y personas menores de edad</h2>
                  <p>No solicitamos datos personales sensibles mediante los formularios generales del sitio. Te pedimos no incluir información de salud, creencias, biometría u otra información sensible en el campo libre del formulario o en mensajes iniciales.</p>
                  <p>Si algún proyecto requiere datos sensibles o información de menores de edad, se evaluará una base legítima y se solicitarán los consentimientos y autorizaciones específicos antes de su tratamiento. La contratación de proyectos audiovisuales con participantes identificables se sujetará a las autorizaciones de imagen y voz correspondientes.</p>
                </section>

                <section className="pv-section" id="proveedores">
                  <h2>05. Proveedores, encargados y transferencias</h2>
                  <p>Podremos apoyarnos en proveedores tecnológicos que traten información por nuestras instrucciones, sujetos a condiciones de confidencialidad y seguridad. Según las funcionalidades efectivamente utilizadas, esto puede incluir servicios de alojamiento, correo transaccional (Resend), agenda (Calendly), comprobación de seguridad (Google reCAPTCHA), mensajería (WhatsApp/Meta) y herramientas de analítica (Google Analytics / Google Tag Manager).</p>
                  <p>Al abrir WhatsApp o agendar mediante Calendly, los datos que proporciones también pueden quedar sujetos a los avisos de privacidad de esas plataformas. Algunos proveedores pueden procesar datos fuera de México; su contratación debe evaluarse con las garantías y obligaciones aplicables.</p>
                  <p>No vendemos bases de datos personales. Si llegáramos a transferir información a terceros que actúen como responsables independientes y la ley requiriera consentimiento, se informará la finalidad y se solicitará la autorización correspondiente, salvo los supuestos de excepción previstos legalmente.</p>
                </section>

                <section className="pv-section" id="cookies">
                  <h2>06. Cookies y tecnologías de navegación</h2>
                  <p>Podemos utilizar cookies o almacenamiento técnico para el funcionamiento, la seguridad y el rendimiento del sitio. Las herramientas de medición, etiquetas publicitarias o tecnologías similares solo deben habilitarse de conformidad con las finalidades informadas, los consentimientos aplicables y la configuración real del sitio.</p>
                  <p>Las tecnologías que se encuentren activas pueden registrar datos del navegador, identificadores y patrones de navegación. Puedes administrar o bloquear cookies desde tu navegador; hacerlo puede afectar algunas funciones. Antes de activar cookies o etiquetas no esenciales se implementarán los controles de preferencias pertinentes.</p>
                </section>

                <section className="pv-section" id="ia">
                  <h2>07. Automatización, inteligencia artificial y servicios para clientes</h2>
                  <p>Al desarrollar software, sistemas de gestión, automatizaciones o soluciones como BOCCA Agency, podemos acceder a información que nuestros clientes administran para ejecutar el servicio. En esos casos, el cliente podrá actuar como responsable de su propia base de datos y Elyon Devs como persona encargada, conforme al contrato e instrucciones aplicables.</p>
                  <p>Los datos de usuarios finales de los sistemas de nuestros clientes no quedan automáticamente cubiertos por este aviso para todas sus finalidades: cada cliente debe informar a sus titulares mediante el aviso que le corresponda. No utilizaremos información confidencial de los proyectos para entrenar modelos o publicar casos de éxito sin una base jurídica y autorización correspondientes.</p>
                </section>

                <section className="pv-section" id="conservacion">
                  <h2>08. Seguridad y conservación</h2>
                  <p>Aplicaremos medidas administrativas, técnicas y físicas razonables según el riesgo, la finalidad y la sensibilidad de los datos: control de accesos, confidencialidad, protección de credenciales y medidas de resguardo cuando procedan.</p>
                  <p>Conservaremos información únicamente durante el tiempo necesario para la finalidad informada y los plazos legales o contractuales aplicables. Cuando corresponda, procederemos al bloqueo, eliminación o anonimización conforme a la ley. Ningún medio digital garantiza ausencia absoluta de riesgos.</p>
                </section>

                <section className="pv-section" id="derechos">
                  <h2>09. Derechos ARCO</h2>
                  <p>Puedes solicitar en cualquier momento el <strong>Acceso, Rectificación, Cancelación u Oposición</strong> al tratamiento de tus datos personales enviando un correo a <a href={`mailto:${privacy.contactEmail}?subject=Derechos%20ARCO%20-%20Elyon%20Devs`}>{privacy.contactEmail}</a>, con el asunto «Derechos ARCO».</p>
                  <p>Incluye tu nombre, un medio para recibir la respuesta, el derecho que deseas ejercer, una descripción clara de los datos involucrados y los documentos necesarios para acreditar tu identidad o representación; para rectificación, los elementos que sustenten el cambio solicitado.</p>
                  <p>De acuerdo con el artículo 31 de la ley, comunicaremos la determinación en un plazo máximo de <strong>20 días hábiles</strong> desde la recepción de la solicitud y, si procede, la haremos efectiva dentro de los <strong>15 días hábiles</strong> siguientes a la respuesta. Los plazos podrán ampliarse legalmente cuando exista justificación. El ejercicio de estos derechos es gratuito, salvo costos de reproducción o envío permitidos por ley.</p>
                </section>

                <section className="pv-section" id="limites">
                  <h2>10. Limitación de uso, revocación y oposición</h2>
                  <p>Para solicitar que dejemos de enviarte comunicaciones promocionales, limitar el uso o divulgación de tus datos o revocar un consentimiento, escribe a <a href={`mailto:${privacy.contactEmail}?subject=Privacidad%20-%20Limitaci%C3%B3n%20o%20revocaci%C3%B3n`}>{privacy.contactEmail}</a> e indica tu solicitud y el canal de contacto utilizado.</p>
                  <p>La revocación no tendrá efectos retroactivos y podrá estar sujeta a obligaciones legales o contractuales que exijan conservar cierta información. Podrás ejercer tus derechos ARCO de forma independiente.</p>
                </section>

                <section className="pv-section" id="cambios">
                  <h2>11. Cambios al aviso y autoridad competente</h2>
                  <p>Cuando este aviso sea actualizado, publicaremos la versión vigente en <Link href="/aviso-de-privacidad">elyondevs.com/aviso-de-privacidad</Link>, con su fecha de actualización; cuando la ley lo exija, utilizaremos medios adicionales para comunicar cambios relevantes y recabar consentimiento.</p>
                  <p>Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la <strong>Secretaría Anticorrupción y Buen Gobierno</strong>, autoridad competente conforme a la legislación federal vigente.</p>
                  <p>Para cualquier duda relacionada con la privacidad, escríbenos a <a href={`mailto:${privacy.contactEmail}`}>{privacy.contactEmail}</a>.</p>
                </section>
              </div>
              <div className="pv-end-note">
                <div className="pv-end-note__icon"><Mail size={23} aria-hidden="true" /></div>
                <div><h2>¿Necesitas ayuda con tus datos?</h2><p>Escríbenos para ejercer tus derechos, limitar el uso de información o aclarar cómo tratamos tus datos.</p></div>
                <a href={`mailto:${privacy.contactEmail}?subject=Privacidad%20-%20Elyon%20Devs`}>Contactar <ArrowUpRight size={17} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
