"use client"

import { Menu, ChevronLeft, ChevronRight, X, ShieldCheck, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    { image: "/images/lynx-hero-1.jpg", alt: "Lince majestoso representando força e elegância" },
    { image: "/images/lynx-hero-2.jpg", alt: "Retrato de lince com olhar penetrante" },
    { image: "/images/lynx-hero-3.jpg", alt: "Lince caminhando com confiança em ambiente sofisticado" },
  ]

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#mission" },
    { name: "Como Funciona", href: "#community" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#join" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Auto advance slides
  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 6500)
    return () => clearInterval(t)
  }, [slides.length])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-ink-950">
      {/* Background slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: currentSlide === idx ? 1 : 0,
          }}
          aria-hidden={currentSlide !== idx}
        />
      ))}

      {/* Layered overlays for depth and contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/30 to-ink-950/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />

      {/* Subtle gold grid overlay */}
      <div className="absolute inset-0 bg-grid-gold opacity-30 pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-30 flex items-center justify-between px-6 md:px-12 py-6">
        {/* Brand wordmark */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="group flex items-center gap-3"
          aria-label="VANTTI - Início"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-gold/60">
            {/* Stylized lynx silhouette mark */}
            <svg viewBox="0 0 32 32" className="h-6 w-6 text-gold" fill="currentColor" aria-hidden>
              <path d="M6 4l3 5 3-3 4 1 4-1 3 3 3-5-1 8-2 3 1 5-4 4h-2l-2-2-2 2h-2l-4-4 1-5-2-3-1-8z" />
              <circle cx="12" cy="14" r="1.2" fill="#0a0a0a" />
              <circle cx="20" cy="14" r="1.2" fill="#0a0a0a" />
            </svg>
          </span>
          <span className="font-serif text-2xl font-semibold tracking-[0.25em] text-white">VANTTI</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="group relative text-sm font-medium uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-gold"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollToSection("#join")}
            className="group inline-flex items-center gap-2 rounded-sm border border-gold/70 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-ink-950"
          >
            Fale com a VANTTI
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          className="lg:hidden text-white hover:text-gold transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Abrir menu</span>
        </button>
      </nav>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-40 bg-ink-950/95 backdrop-blur-sm lg:hidden">
          <div className="flex h-full flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-serif text-3xl font-semibold tracking-wide text-white hover:text-gold transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#join")}
              className="mt-4 rounded-sm border border-gold bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950"
            >
              Fale com a VANTTI
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-6 top-6 text-white"
            aria-label="Fechar menu"
          >
            <X size={28} />
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-[calc(100%-96px)] items-center px-6 md:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
              Cartas de Crédito Premium
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-white text-balance">
            O poder de <span className="text-gold-gradient italic">conquistar</span>
            <br />
            sem comprometer
            <br />
            sua liberdade.
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-xl text-lg md:text-xl font-light leading-relaxed text-white/80 text-pretty">
            A VANTTI conduz você até seu próximo grande passo — um imóvel, um veículo ou um novo negócio — com a
            sofisticação, solidez e disciplina de um lince à espreita do momento certo.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection("#join")}
              className="group inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold-400 hover:shadow-xl hover:shadow-gold/30"
            >
              Solicitar minha carta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("#community")}
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              Como funciona
            </button>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-gold" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  Parceiro Financeiro
                </p>
                <p className="font-serif text-xl font-semibold text-white">Itaú</p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2.5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">Atendimento</p>
                <p className="font-serif text-base font-medium text-white">100% personalizado e consultivo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="text-white/70 hover:text-gold transition-colors p-2"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-px transition-all duration-500 ${
                  currentSlide === index ? "w-12 bg-gold" : "w-6 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-white/70 hover:text-gold transition-colors p-2"
            aria-label="Próximo slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Side index */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          <span className="text-gold">
            0{currentSlide + 1} <span className="text-white/40">/ 0{slides.length}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
