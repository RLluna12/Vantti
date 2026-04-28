"use client"

import type * as React from "react"
import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { ShieldCheck, Award, Users, TrendingUp, ArrowRight } from "lucide-react"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1875,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ["170%", "100%"])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-ink-950"
        style={{ clipPath, willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950/95" />
        <div className="absolute inset-0 bg-grid-gold opacity-15" />

        {/* CTA Overlay */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Sua próxima conquista</span>
              <span className="h-px w-10 bg-gold" />
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-tight text-balance md:text-6xl lg:text-7xl">
              É hora de dar o
              <br />
              <span className="text-gold-gradient italic">próximo passo.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg lg:text-xl text-pretty">
              Converse com um especialista VANTTI e descubra a carta de crédito ideal para o seu objetivo —
              <br className="hidden md:block" />
              com a solidez de uma parceria financeira com o <span className="font-medium text-gold">Itaú</span>.
            </p>

            {/* Stats Grid */}
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {[
                { icon: Users, value: "+12.000", label: "Clientes" },
                { icon: TrendingUp, value: "R$ 2,8 Bi", label: "Estruturados" },
                { icon: Award, value: "15 anos", label: "De solidez" },
                { icon: ShieldCheck, value: "Itaú", label: "Parceria" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 bg-gold/10 backdrop-blur-sm">
                    <stat.icon className="h-4 w-4 text-gold" strokeWidth={1.6} />
                  </div>
                  <div className="font-serif text-xl font-semibold text-white md:text-2xl">{stat.value}</div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button className="group inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 shadow-lg shadow-gold/30 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold/40">
                Solicitar minha carta
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-gold hover:text-gold"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 border-t border-white/15 pt-6">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50">
                Confiança que vem da experiência
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
                <span>Atendimento consultivo</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>Aprovação ágil</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>Parceiro Itaú</span>
                <span className="h-1 w-1 rounded-full bg-gold" />
                <span>Discrição total</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SmoothScrollHero
