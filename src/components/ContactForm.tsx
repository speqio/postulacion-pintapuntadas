import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { OrderRequest } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderRequest>({
    fullName: '',
    email: '',
    phone: '',
    type: 'taller',
    comuna: '',
    landscapeDescription: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    handleWhatsAppRedirect();
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `¡Hola Pintapuntadas! Mi nombre es ${formData.fullName}.\n` +
      `Tipo de solicitud: ${formData.type.toUpperCase()}\n` +
      (formData.comuna ? `Comuna: ${formData.comuna}\n` : '') +
      (formData.landscapeDescription ? `Paisaje / Idea: ${formData.landscapeDescription}\n` : '') +
      `Mensaje: ${formData.message}\n` +
      `Email: ${formData.email} | Tel: ${formData.phone}`
    );
    window.open(`https://wa.me/56963888489?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-light">
              Contacto y Postulación al Taller
            </h2>
            <p className="font-serif italic text-base sm:text-lg text-muted">
              ¿Quieres participar del taller, sumarte como comuna anfitriona o conocer más sobre el proyecto? Escríbenos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-panel p-8 border border-border-subtle space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-sans uppercase tracking-[0.3em] text-accent-muted block">
                    Taller Pintapuntadas
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal font-light">
                    Talleres de Mediación Patrimonial en Limache
                  </h3>
                  <p className="font-sans text-base text-body leading-relaxed font-normal">
                    Coordinamos la llegada del taller a comunas y espacios comunitarios de la Región de Valparaíso.
                  </p>
                </div>

                <div className="space-y-3 text-sm font-sans text-body">
                  <div className="flex items-start gap-3 p-3.5 bg-canvas border border-border-subtle">
                    <Mail className="w-4 h-4 text-accent-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-charcoal block">Correo Electrónico</span>
                      <span>contacto@pintapuntadas.cl</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-canvas border border-border-subtle">
                    <Phone className="w-4 h-4 text-accent-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-charcoal block">WhatsApp Directo</span>
                      <a href="https://wa.me/56963888489" target="_blank" rel="noreferrer" className="hover:underline">
                        +56 9 6388 8489
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-canvas border border-border-subtle">
                    <MapPin className="w-4 h-4 text-accent-muted shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-charcoal block">Ubicación de Taller</span>
                      <span>Limache, Región de Valparaíso, Chile</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-charcoal text-canvas space-y-1.5">
                  <span className="text-xs font-sans uppercase tracking-[0.25em] text-accent-muted block">
                    Modalidad del Taller
                  </span>
                  <p className="text-sm text-canvas/80 font-normal leading-relaxed">
                    Ciclo presencial de 4 sesiones, con cupos comunitarios y catálogo de registro y difusión al cierre.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" delay={0.25}>
              <div className="bg-canvas p-6 sm:p-10 border border-border-subtle">
                {submitted ? (
                  <div className="text-center py-12 space-y-6 animate-fadeIn">
                    <div className="w-12 h-12 bg-panel text-charcoal flex items-center justify-center mx-auto border border-border-subtle">
                      <CheckCircle2 className="w-6 h-6 text-accent-muted" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-3xl text-charcoal font-light">¡Solicitud Recibida!</h3>
                      <p className="font-serif italic text-base text-muted">
                        Gracias por contactar a Pintapuntadas en Limache. Nos comunicaremos contigo a la brevedad.
                      </p>
                    </div>

                    <div className="p-4 bg-panel max-w-md mx-auto text-left text-sm font-sans text-body space-y-1 border border-border-subtle">
                      <p><strong>Nombre:</strong> {formData.fullName}</p>
                      <p><strong>Tipo:</strong> {formData.type}</p>
                      {formData.comuna && <p><strong>Comuna:</strong> {formData.comuna}</p>}
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full sm:w-auto px-6 py-3 bg-[#25D366] text-white text-xs font-sans uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enviar por WhatsApp
                      </button>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="w-full sm:w-auto px-6 py-3 bg-charcoal text-canvas text-xs font-sans uppercase tracking-[0.2em]"
                      >
                        Otra Consulta
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Inquiry Type Radio / Tabs */}
                    <div className="space-y-2">
                      <label className="text-xs font-sans font-medium text-charcoal uppercase tracking-[0.2em] block">
                        Tipo de Solicitud:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: 'taller', label: 'Postular al Taller' },
                          { id: 'difusion', label: 'Prensa y Difusión' },
                          { id: 'colaboracion', label: 'Colaboración' },
                          { id: 'consulta', label: 'Consulta General' },
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, type: tab.id as any })}
                            className={`p-2.5 text-xs font-sans uppercase tracking-[0.15em] border text-center transition-colors ${
                              formData.type === tab.id
                                ? 'bg-charcoal text-canvas border-charcoal'
                                : 'bg-canvas text-muted border-border-subtle hover:bg-panel'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-sans uppercase tracking-wider text-charcoal">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Ej. Macarena Ramírez"
                          className="w-full px-4 py-2.5 bg-panel border border-border-subtle text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-sans uppercase tracking-wider text-charcoal">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu.email@ejemplo.cl"
                          className="w-full px-4 py-2.5 bg-panel border border-border-subtle text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal"
                        />
                      </div>
                    </div>

                    {/* Inputs Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-sans uppercase tracking-wider text-charcoal">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+56 9 1234 5678"
                          className="w-full px-4 py-2.5 bg-panel border border-border-subtle text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-sans uppercase tracking-wider text-charcoal">
                          Comuna
                        </label>
                        <input
                          type="text"
                          value={formData.comuna}
                          onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                          placeholder="Ej. Limache, Quillota, Puchuncaví..."
                          className="w-full px-4 py-2.5 bg-panel border border-border-subtle text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal"
                        />
                      </div>
                    </div>

                    {/* Landscape Description */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans uppercase tracking-wider text-charcoal">
                        Paisaje o Patrimonio de Interés
                      </label>
                      <input
                        type="text"
                        value={formData.landscapeDescription}
                        onChange={(e) => setFormData({ ...formData, landscapeDescription: e.target.value })}
                        placeholder="Ej. Humedal de Quirilluca, arquitectura patrimonial de mi comuna..."
                        className="w-full px-4 py-2.5 bg-panel border border-border-subtle text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-sans uppercase tracking-wider text-charcoal">
                        Mensaje o Consultas
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos por qué te interesa participar del taller o cómo te gustaría colaborar..."
                        className="w-full px-4 py-2.5 bg-panel border border-border-subtle text-sm font-sans text-charcoal focus:outline-none focus:border-charcoal resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-charcoal text-canvas hover:bg-body font-sans text-xs uppercase tracking-[0.25em] transition-colors flex items-center justify-center gap-2 group"
                    >
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      Enviar Solicitud
                    </button>

                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
