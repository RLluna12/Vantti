"use client"

import { motion } from "framer-motion"
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone, ArrowRight, ShieldCheck } from "lucide-react"

function LynxMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M6 4l3 5 3-3 4 1 4-1 3 3 3-5-1 8-2 3 1 5-4 4h-2l-2-2-2 2h-2l-4-4 1-5-2-3-1-8z" />
      <circle cx="12" cy="14" r="1.2" fill="#0a0a0a" />
      <circle cx="20" cy="14" r="1.2" fill="#0a0a0a" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 bg-grid-gold opacity-15 pointer-events-none" />
      {/* Gold top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        {/* Top: brand + newsletter */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/60">
                <LynxMark className="h-7 w-7 text-gold" />
              </span>
              <span className="font-serif text-3xl font-semibold tracking-[0.2em]">VANTTI</span>
            </div>
            <h3 className="mt-8 max-w-xl font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl text-balance">
              Pronto para sua próxima <span className="italic text-gold">conquista</span>?
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              Receba conteúdos exclusivos sobre cartas de crédito, oportunidades de mercado e estratégias de aquisição
              direto no seu e-mail.
            </p>

            <form
              className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                className="flex-1 rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-950 transition-colors hover:bg-gold-400"
              >
                Inscrever
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Itaú partnership card */}
            <div className="rounded-sm border border-gold/30 bg-gradient-to-br from-ink-900 to-ink-950 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-gold/60 bg-ink-950">
                  <ShieldCheck className="h-6 w-6 text-gold" strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                    Parceiro Financeiro Oficial
                  </p>
                  <p className="mt-2 font-serif text-3xl font-semibold text-white">Itaú</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    A solidez do maior banco privado da América Latina sustentando cada carta de crédito que estruturamos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Soluções</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Carta para Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Carta para Veículos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Crédito para Negócios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Investimentos
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Empresa</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="#mission" className="hover:text-gold transition-colors">
                  Sobre a VANTTI
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-gold transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 text-gold" />
                <span>Av. Brigadeiro Faria Lima, 3500
                  <br />
                  São Paulo, SP — Brasil
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gold" />
                <a href="mailto:contato@vantti.com.br" className="hover:text-gold transition-colors">
                  contato@vantti.com.br
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gold" />
                <a href="tel:+551130000000" className="hover:text-gold transition-colors">
                  +55 (11) 3000-0000
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Siga-nos</h4>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-ink-950"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-ink-950"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-ink-950"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-white/50">
              Atendimento de segunda a sexta, das 9h às 19h. Sábados sob agendamento.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            © {year} VANTTI Cartas de Crédito. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
            <a href="#" className="hover:text-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              LGPD
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
