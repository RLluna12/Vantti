"use client"

import { motion } from "framer-motion"
import { ShieldCheck, BadgeCheck, Lock } from "lucide-react"

export default function ItauPartnership() {
  const seals = [
    {
      icon: ShieldCheck,
      title: "Solidez Institucional",
      description:
        "Maior banco privado da América Latina, com mais de 100 anos de tradição em soluções financeiras complexas.",
    },
    {
      icon: BadgeCheck,
      title: "Aprovação Estratégica",
      description:
        "Cartas estruturadas com taxas competitivas, condições diferenciadas e processo de análise ágil para o cliente VANTTI.",
    },
    {
      icon: Lock,
      title: "Segurança Bancária",
      description:
        "Toda a operação é custodiada e regulada pelo Banco Central, com criptografia de ponta e governança de classe mundial.",
    },
  ]

  return (
    <section id="itau" className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-gold opacity-15" />
      <div className="absolute -left-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/40" />
      <div className="pointer-events-none absolute right-8 bottom-8 h-16 w-16 border-b border-r border-gold/40" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Logo block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Parceria Oficial</span>
              <span className="h-px w-10 bg-gold" />
            </div>

            {/* Itaú Logo - Large */}
            <div className="group relative">
              {/* Halo */}
              <div className="absolute inset-0 -m-8 rounded-full bg-gold/10 blur-3xl transition-all duration-700 group-hover:bg-gold/20" />

              {/* Logo container */}
              <div className="relative flex flex-col items-center gap-6">
                <ItauLogo />

                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-gold/60" />
                  <span className="font-serif text-sm italic tracking-widest text-white/70">
                    Banco Parceiro VANTTI
                  </span>
                  <span className="h-px w-12 bg-gold/60" />
                </div>

                <p className="max-w-sm text-center text-xs uppercase tracking-[0.3em] text-white/45">
                  Itaú Unibanco · Maior banco privado da América Latina
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
              Solidez de <span className="italic text-gold">classe mundial</span>
              <br />
              por trás de cada conquista.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
              A VANTTI estrutura todas as suas cartas de crédito em parceria oficial com o Itaú, oferecendo a
              tranquilidade de uma instituição centenária e a agilidade de um atendimento totalmente consultivo.
            </p>

            <div className="mt-10 flex flex-col gap-px overflow-hidden rounded-sm border border-gold/20 bg-gold/20">
              {seals.map((seal) => (
                <div
                  key={seal.title}
                  className="group flex items-start gap-5 bg-ink-950 p-6 transition-colors hover:bg-ink-900 md:p-7"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/5 text-gold transition-all group-hover:border-gold group-hover:bg-gold/10">
                    <seal.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">{seal.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/65">{seal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Itaú-style logotype rendered as SVG.
 * Iconic squared mark with the "itaú" wordmark inside.
 * Uses the official Itaú orange (#EC7000) which contrasts with the gold/black palette
 * while clearly identifying the brand partnership.
 */
function ItauLogo() {
  return (
    <div
      className="relative flex aspect-square w-64 items-center justify-center rounded-md p-5 shadow-[0_30px_80px_-20px_rgba(236,112,0,0.45)] md:w-72"
      style={{ backgroundColor: "#EC7000" }}
      aria-label="Itaú - Parceiro Financeiro"
      role="img"
    >
      {/* Inner white frame */}
      <div className="relative flex h-full w-full items-end justify-center rounded-sm border-[6px] border-white pb-4">
        <svg
          viewBox="0 0 200 70"
          className="w-full max-w-[170px]"
          aria-hidden="true"
        >
          <text
            x="100"
            y="55"
            textAnchor="middle"
            fontFamily="ui-serif, Georgia, 'Times New Roman', serif"
            fontWeight="700"
            fontSize="62"
            fill="#ffffff"
            letterSpacing="-2"
          >
            itaú
          </text>
        </svg>

        {/* Tiny corner accent */}
        <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-white/90" />
      </div>
    </div>
  )
}
