"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const diferenciais = [
  "Atendimento 100% consultivo e personalizado",
  "Parceria oficial com o Itaú — maior banco privado da América Latina",
  "Mais de R$ 2,8 bilhões em cartas estruturadas",
  "Processo transparente do briefing à entrega do crédito",
  "Especialistas com +15 anos de experiência em consórcios",
]

export default function MascotSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-gold opacity-15 pointer-events-none" />

      {/* Decorative gold corners */}
      <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/40" />
      <div className="pointer-events-none absolute right-8 bottom-8 h-16 w-16 border-b border-r border-gold/40" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Por que a VANTTI</span>
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Estratégia,{" "}
              <span className="italic text-gold">precisão</span>{" "}
              e resultado.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Como o lince — o animal com a visão mais aguçada do reino animal — a VANTTI enxerga
              oportunidades antes de todos. Nosso time de especialistas combina inteligência financeira
              com um atendimento que respeita o seu ritmo e os seus objetivos.
            </p>

            <ul className="mt-10 space-y-4">
              {diferenciais.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={1.6} />
                  <span className="text-sm leading-relaxed text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <a
                href="#join"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold-400"
              >
                Fale com um especialista
              </a>
            </motion.div>
          </motion.div>

          {/* Right: mascot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex items-end justify-center"
          >
            {/* Halo glow behind mascot */}
            <div className="absolute bottom-0 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold/10 blur-[80px]" />
            <div className="absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-gold/15 blur-[40px]" />

            {/* Gold ring frame */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-gold/20" />
              <div className="absolute -inset-8 rounded-full border border-gold/10" />

              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_io7a68io7a68io7a-Photoroom-dffFeQ5xHbQSQJoaBMwN48R2U14EjC.png"
                alt="Mascote VANTTI — Lince executivo de terno marmorizado com braços cruzados"
                className="relative z-10 h-[520px] w-auto max-w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute right-0 top-16 rounded-sm border border-gold/40 bg-ink-950/90 px-5 py-4 shadow-xl backdrop-blur-sm"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">Parceiro oficial</p>
              <p className="mt-1 font-serif text-2xl font-semibold text-white">Itaú</p>
            </motion.div>

            {/* Bottom tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-0 rounded-sm border border-gold/30 bg-ink-950/90 px-5 py-3 backdrop-blur-sm"
            >
              <p className="font-serif text-base font-medium text-white">
                +12.000 <span className="text-gold">clientes</span> satisfeitos
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
