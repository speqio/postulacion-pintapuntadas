import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Compass,
  Map,
  Lock,
  Globe,
  CalendarRange,
  MessageCircleHeart,
  BookImage,
  Home,
  UploadCloud,
  MessageCircle,
  User,
  Filter,
  Download,
  Image as ImageIcon,
  Code2,
  Triangle,
  KeyRound,
  ListChecks,
  Eye,
  Clock,
  CheckCircle2,
  CircleDashed,
  Send,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { NeedleThreadIcon } from '../components/NeedleThreadIcon';
import { CatalogoDiptico } from '../components/CatalogoDiptico';

interface MetodologiaPageProps {
  onNavigate: (target: string) => void;
}

const SESIONES_DETALLE = [
  {
    numero: 1,
    titulo: 'Elección, Mapeo Territorial y Preparación',
    texto: 'Cada participante elige libremente el paisaje natural o el patrimonio arquitectónico que quiere reproducir, y recibe una breve reseña geográfica y patrimonial del lugar elegido, dando una primera noción concreta de mapeo territorial aplicado a una obra textil. Se reparten los materiales, se prepara el bastidor (tensión, tipos de aguja), se dibuja sobre la tela y se eligen los colores base, aprendiendo nociones básicas de colorimetría aplicadas a contornos.',
  },
  {
    numero: 2,
    titulo: 'Bordado de Relleno',
    texto: 'Bordado de relleno, incorporando variadas técnicas de puntada.',
  },
  {
    numero: 3,
    titulo: 'Líneas Protagonistas y Degradé',
    texto: 'Énfasis en las líneas protagonistas de la obra (flora o líneas arquitectónicas), usando degradé de color para dar relieve y textura con mayor detalle.',
  },
  {
    numero: 4,
    titulo: 'Terminaciones',
    texto: 'Terminaciones, destacando áreas del bordado con puntadas pequeñas y nudos.',
  },
];

/** Marco de navegador reutilizable para las pantallas wireframe */
const BrowserFrame: React.FC<{ url: string; step?: number; children: React.ReactNode; className?: string }> = ({
  url,
  step,
  children,
  className = '',
}) => (
  <div className={`h-full flex flex-col bg-canvas border border-border-subtle overflow-hidden ${className}`}>
    <div className="flex items-center gap-2 px-3 py-2.5 bg-panel border-b border-border-subtle">
      {step && (
        <span className="w-4 h-4 rounded-full bg-charcoal text-canvas text-[9px] font-sans flex items-center justify-center shrink-0">
          {step}
        </span>
      )}
      <span className="w-2 h-2 rounded-full bg-border-dark" />
      <span className="w-2 h-2 rounded-full bg-border-dark" />
      <span className="ml-1 px-2.5 py-0.5 bg-canvas border border-border-subtle text-[10px] font-sans text-muted truncate">
        {url}
      </span>
    </div>
    <div className="p-4 sm:p-5 flex-1">{children}</div>
  </div>
);

const FlowNode: React.FC<{ label: string; sub?: string; emphasis?: boolean }> = ({ label, sub, emphasis }) => (
  <div
    className={`px-3 sm:px-4 py-2.5 sm:py-3 border text-center ${
      emphasis
        ? 'bg-charcoal text-canvas border-charcoal'
        : 'bg-canvas text-charcoal border-border-subtle'
    }`}
  >
    <p className="text-[11px] sm:text-xs font-sans font-medium leading-snug">{label}</p>
    {sub && (
      <p className={`text-[9px] sm:text-[10px] font-sans mt-0.5 ${emphasis ? 'text-canvas/70' : 'text-muted'}`}>
        {sub}
      </p>
    )}
  </div>
);

export const MetodologiaPage: React.FC<MetodologiaPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-canvas">
      {/* Encabezado */}
      <section className="py-12 lg:py-16 border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 space-y-3 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Propuesta de Prototipo
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-light">
              Estructura Ideal para el Prototipo o Propuesta
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-serif italic text-base sm:text-lg text-muted max-w-3xl mx-auto">
              Dispositivo web, metodología participativa por fases y catálogo digital: la arquitectura completa del proyecto Pintapuntadas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* EL DÓNDE — Dispositivo / Plataforma Web */}
      <section className="py-12 lg:py-16 border-b border-border-subtle bg-panel">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
                <Globe className="w-3.5 h-3.5" />
                El "Dónde"
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-light">
                Dispositivo / Plataforma Web
              </h2>
              <p className="font-sans text-base text-body leading-relaxed">
                Un mismo sitio con tres capas de navegación: el mapa general de interacción, un espacio privado para quienes tallerean y participan, y una vitrina pública abierta a toda la comunidad.
              </p>
            </div>
          </ScrollReveal>

          {/* Pantalla 1: Flujo de interacción y mapa del sitio */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-accent-muted flex items-center gap-1.5">
                <Map className="w-3.5 h-3.5" />
                Flujo de Interacción y Mapa del Sitio
              </span>
              <BrowserFrame url="pintapuntadas.cl">
                <div className="flex flex-col items-center gap-3">
                  <FlowNode label="Inicio" sub="Landing pública" emphasis />

                  <ArrowDown className="w-4 h-4 text-accent-muted" />

                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                    {/* Rama pública */}
                    <div className="space-y-3">
                      <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent-muted text-center">
                        Rama Pública · Comunidad
                      </p>
                      <div className="flex flex-col gap-2">
                        <FlowNode label="Obra y Bordado" sub="Galería de piezas y proceso" />
                        <FlowNode label="Kit de Materiales" sub="Insumos del taller" />
                        <FlowNode label="Catálogo y Difusión" sub="Descarga y redes" />
                      </div>
                    </div>

                    {/* Rama privada */}
                    <div className="space-y-3">
                      <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent-muted text-center">
                        Rama Privada · Tallerista / Participantes
                      </p>
                      <div className="flex flex-col gap-2">
                        <FlowNode label="Acceso con clave" sub="Login del taller" />
                        <FlowNode label="Panel de Avances" sub="Subida de fases" />
                        <FlowNode label="Retroalimentación" sub="Comentarios de la monitora" />
                      </div>
                    </div>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </ScrollReveal>

          {/* Navegación — Sección Privada: Tallerista / Participantes */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-accent-muted flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                Navegación — Tallerista / Participantes
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {/* 1. Acceso */}
                <BrowserFrame url="pintapuntadas.cl/taller/acceso" step={1}>
                  <div className="space-y-3 py-2">
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-charcoal text-canvas flex items-center justify-center">
                        <KeyRound className="w-3.5 h-3.5 text-accent-muted" />
                      </div>
                      <p className="text-xs font-sans font-medium text-charcoal">Acceso Tallerista</p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="px-2.5 py-1.5 bg-panel border border-border-subtle text-[10px] font-sans text-muted">
                        Usuario
                      </div>
                      <div className="px-2.5 py-1.5 bg-panel border border-border-subtle text-[10px] font-sans text-muted">
                        Contraseña
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-sans bg-charcoal text-canvas"
                    >
                      Ingresar
                    </button>
                  </div>
                </BrowserFrame>

                {/* 2. Mis Talleres */}
                <BrowserFrame url="pintapuntadas.cl/taller/mis-talleres" step={2}>
                  <div className="space-y-2">
                    <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-accent-muted">Mis Talleres</p>
                    <div className="p-2 bg-panel border border-border-subtle space-y-0.5">
                      <p className="text-[10px] font-sans font-medium text-charcoal">Taller Quirilluca</p>
                      <span className="inline-flex items-center gap-1 text-[9px] font-sans text-accent-muted">
                        <CircleDashed className="w-2.5 h-2.5" />
                        En curso · Fase 2 de 4
                      </span>
                    </div>
                    <div className="p-2 bg-panel border border-border-subtle space-y-0.5">
                      <p className="text-[10px] font-sans font-medium text-charcoal">Taller Conguillío</p>
                      <span className="inline-flex items-center gap-1 text-[9px] font-sans text-muted">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Completado
                      </span>
                    </div>
                  </div>
                </BrowserFrame>

                {/* 3. Panel de Avances */}
                <BrowserFrame url="pintapuntadas.cl/taller/panel" step={3}>
                  <div className="flex gap-2.5">
                    <div className="w-20 shrink-0 bg-charcoal text-canvas p-2 space-y-1">
                      {[
                        { icon: Home, label: 'Inicio' },
                        { icon: UploadCloud, label: 'Avances' },
                        { icon: MessageCircle, label: 'Feedback' },
                        { icon: User, label: 'Perfil' },
                      ].map((it) => (
                        <div key={it.label} className="flex items-center gap-1 px-1 py-1 text-[8px] sm:text-[9px] font-sans">
                          <it.icon className="w-2.5 h-2.5 text-accent-muted shrink-0" />
                          <span className="truncate">{it.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 space-y-2 min-w-0">
                      <p className="text-[10px] font-sans font-medium text-charcoal">Hola, Marcela</p>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[9px] font-sans text-muted">
                          <span>Fase 2 de 4</span>
                        </div>
                        <div className="h-1.5 bg-border-subtle w-full">
                          <div className="h-full bg-accent-muted" style={{ width: '50%' }} />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-1 px-2 py-1.5 text-[9px] uppercase tracking-widest font-sans bg-charcoal text-canvas"
                      >
                        <UploadCloud className="w-2.5 h-2.5 text-accent-muted" />
                        Subir avance
                      </button>
                    </div>
                  </div>
                </BrowserFrame>

                {/* 4. Retroalimentación */}
                <BrowserFrame url="pintapuntadas.cl/taller/feedback" step={4}>
                  <div className="space-y-2">
                    <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-accent-muted">Retroalimentación</p>
                    <div className="space-y-1.5">
                      <div className="p-2 bg-panel border border-border-subtle">
                        <p className="text-[9px] font-sans uppercase tracking-widest text-accent-muted mb-0.5">
                          Pamela · Tallerista
                        </p>
                        <p className="text-[10px] font-sans text-body leading-relaxed">
                          "Muy buen degradé en las hojas, cuida la tensión en el sector inferior."
                        </p>
                      </div>
                      <div className="p-2 bg-charcoal text-canvas ml-4">
                        <p className="text-[10px] font-sans leading-relaxed">
                          "Gracias, ajusto esa zona en la próxima sesión."
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-panel border border-border-subtle">
                      <span className="text-[9px] font-sans text-muted flex-1">Escribe una respuesta...</span>
                      <Send className="w-3 h-3 text-accent-muted" />
                    </div>
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </ScrollReveal>

          {/* Navegación — Sección Pública: Comunidad */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="space-y-3">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-accent-muted flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Navegación — Comunidad
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {/* 1. Inicio */}
                <BrowserFrame url="pintapuntadas.cl" step={1}>
                  <div className="space-y-3 py-1">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-14 h-14 rounded-full bg-panel border border-border-subtle flex items-center justify-center">
                        <ImageIcon className="w-5 h-5 text-border-dark" />
                      </div>
                      <p className="text-xs font-serif italic text-charcoal leading-snug">
                        Un Paisaje Patrimonial Bordado
                      </p>
                    </div>
                    <button
                      type="button"
                      className="w-full px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-sans bg-charcoal text-canvas"
                    >
                      Explorar
                    </button>
                  </div>
                </BrowserFrame>

                {/* 2. Galería */}
                <BrowserFrame url="pintapuntadas.cl/galeria" step={2}>
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Filter className="w-3 h-3 text-accent-muted" />
                      {['Todos', 'Quirilluca', 'Atacama'].map((tag, i) => (
                        <span
                          key={tag}
                          className={`px-1.5 py-0.5 text-[8px] font-sans border ${
                            i === 0 ? 'bg-charcoal text-canvas border-charcoal' : 'border-border-subtle text-muted'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[1, 2, 3].map((n) => (
                        <button
                          key={n}
                          type="button"
                          className="aspect-square bg-panel border border-border-subtle flex items-center justify-center"
                        >
                          <ImageIcon className="w-3.5 h-3.5 text-border-dark" />
                        </button>
                      ))}
                    </div>
                  </div>
                </BrowserFrame>

                {/* 3. Detalle de obra */}
                <BrowserFrame url="pintapuntadas.cl/obra/quirilluca" step={3}>
                  <div className="space-y-2">
                    <div className="aspect-4/3 bg-panel border border-border-subtle flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-border-dark" />
                    </div>
                    <div className="flex items-center justify-between text-[9px] font-sans text-muted">
                      <span className="flex items-center gap-1">
                        <Eye className="w-2.5 h-2.5" /> Quirilluca
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> 42h
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="aspect-square bg-panel border border-border-subtle flex items-center justify-center">
                          <ImageIcon className="w-2.5 h-2.5 text-border-dark" />
                        </div>
                      ))}
                    </div>
                  </div>
                </BrowserFrame>

                {/* 4. Catálogo y difusión */}
                <BrowserFrame url="pintapuntadas.cl/difusion" step={4}>
                  <div className="space-y-2.5">
                    <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-accent-muted flex items-center gap-1.5">
                      <ListChecks className="w-3 h-3" />
                      Catálogo y Difusión
                    </p>
                    <div className="aspect-3/4 max-h-24 mx-auto bg-charcoal flex items-center justify-center">
                      <span className="text-[8px] uppercase tracking-[0.2em] text-canvas/70 font-sans">Catálogo</span>
                    </div>
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-sans bg-charcoal text-canvas"
                    >
                      <Download className="w-3 h-3 text-accent-muted" />
                      Descargar
                    </button>
                  </div>
                </BrowserFrame>
              </div>
            </div>
          </ScrollReveal>

          {/* Viabilidad técnica: stack */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-canvas border border-border-subtle">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent-muted shrink-0">
                Viabilidad Técnica
              </span>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-panel border border-border-subtle text-xs font-sans text-body">
                  <Code2 className="w-3.5 h-3.5 text-accent-muted" />
                  Desarrollo en VS Code
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-accent-muted hidden sm:block" />
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-panel border border-border-subtle text-xs font-sans text-body">
                  <Triangle className="w-3.5 h-3.5 text-accent-muted" />
                  Hosting y despliegue en Vercel
                </span>
              </div>
              <p className="text-xs font-sans text-muted leading-relaxed sm:ml-auto sm:max-w-xs">
                Stack liviano y de bajo costo: sin servidores propios, con despliegue continuo desde el repositorio del proyecto.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EL CÓMO — Metodología Participativa por Fases */}
      <section className="py-12 lg:py-16 border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 space-y-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
                <CalendarRange className="w-3.5 h-3.5" />
                El "Cómo"
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-light">
                Metodología Participativa por Fases
              </h2>
              <p className="font-sans text-base text-body leading-relaxed">
                La metodología sigue un flujo de aprendizaje de dificultad creciente:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="h-full p-5 sm:p-6 bg-panel-alt border border-border-subtle flex gap-3">
                <CalendarRange className="w-4 h-4 text-accent-muted shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-sm font-sans font-medium text-charcoal">Cronograma metodológico</p>
                  <p className="text-sm font-sans text-body leading-relaxed">
                    Desglose claro de sesión por sesión (Clase 1, 2, 3...) detallando los hitos esperados, la dinámica de trabajo y los entregables por fase.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <div className="h-full p-5 sm:p-6 bg-panel-alt border border-border-subtle flex gap-3">
                <MessageCircleHeart className="w-4 h-4 text-accent-muted shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-sm font-sans font-medium text-charcoal">Interacción pedagógica</p>
                  <p className="text-sm font-sans text-body leading-relaxed">
                    Explicación de cómo la monitora acompaña el proceso reflexivo y técnico del bordado.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-5">
            {SESIONES_DETALLE.map((s, i) => (
              <ScrollReveal key={s.numero} direction="up" delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-7 bg-panel-alt border border-border-subtle">
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal text-canvas flex items-center justify-center shrink-0">
                      <span className="font-serif text-base sm:text-lg font-light">{s.numero}</span>
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent-muted sm:mt-1">
                      Sesión {s.numero}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-serif italic text-lg text-charcoal font-light">
                      {s.titulo}
                    </h4>
                    <p className="text-sm sm:text-base font-sans text-body leading-relaxed">
                      {s.texto}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="p-6 sm:p-8 bg-canvas border border-border-subtle space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-charcoal text-canvas flex items-center justify-center shrink-0">
                  <NeedleThreadIcon className="w-4 h-4 text-accent-muted" />
                </div>
                <h4 className="font-serif text-lg text-charcoal font-light">Cierre y Registro del Proceso</h4>
              </div>
              <p className="text-sm sm:text-base font-sans text-body leading-relaxed">
                Al terminar los cuatro talleres, las y los participantes cuentan con una semana adicional para pulir terminaciones y preparar sus piezas para la exposición de cierre en cada espacio. Durante todo el proceso se llevan listas de asistencia y se solicita a cada participante la firma de un consentimiento de registro de procesos, que se usará para difusión y rendición del proyecto. Con el material recopilado se elaborará un catálogo (digital e impreso) que incluye las piezas, los nombres y una pequeña reseña de cada participante.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EL QUÉ — Catálogo Físico - Díptico */}
      <section className="py-12 lg:py-16 border-b border-border-subtle bg-panel">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-accent-muted font-normal flex items-center justify-center gap-2">
                <BookImage className="w-3.5 h-3.5" />
                El "Qué"
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-light">
                Catálogo Físico - Díptico
              </h2>
              <p className="font-sans text-sm sm:text-base text-body leading-relaxed">
                Las dos caras del catálogo impreso: portada informativa del taller y galería de obras seleccionadas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <CatalogoDiptico />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
