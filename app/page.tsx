"use client"

import HeroSection from "../hero-section"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import Chatbot from "../components/chatbot"
import Footer from "../components/footer"
import { Building2, Car, Briefcase, ShieldCheck, Award, Users, TrendingUp } from "lucide-react"

export default function Page() {
  const missionStatement =
    "Na VANTTI, acreditamos que grandes conquistas exigem disciplina, estratégia e o parceiro certo ao seu lado. Nascemos para transformar a forma como o brasileiro acessa cartas de crédito — com transparência absoluta, soluções sob medida e a robustez de uma parceria financeira com o Itaú. Como o lince, que enxerga o que outros não veem, nossa missão é antecipar oportunidades e conduzir você ao seu próximo patamar. Aqui, cada cliente é tratado como protagonista da própria história — e cada carta de crédito é desenhada para se tornar a chave de uma realização inesquecível."

  const timelineEntries = [
    {
      id: 1,
      image: "/images/journey-planejamento.jpg",
      alt: "Planejamento estratégico premium em mesa de mármore preto com caneta dourada",
      title: "Planejamento Estratégico",
      description:
        "Tudo começa com escuta. Nossos especialistas mergulham no seu objetivo — comprar um imóvel, trocar de veículo, capitalizar um negócio — e desenham um plano de carta de crédito sob medida. Sem pressa, sem promessas vazias. Apenas a estratégia certa para sua próxima conquista.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "/images/journey-imovel.jpg",
      alt: "Imóvel de alto padrão ao entardecer dourado",
      title: "Crédito Inteligente, Aprovado",
      description:
        "Com a parceria do Itaú, sua carta é estruturada com taxas competitivas, parcelas planejadas para o seu fluxo e um processo de aprovação ágil e transparente. Você acompanha cada etapa em tempo real, com um consultor VANTTI dedicado — do primeiro briefing à liberação do crédito.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "/images/journey-veiculo.jpg",
      alt: "Veículo de luxo em garagem privativa com iluminação dourada",
      title: "Sua Conquista, Realizada",
      description:
        "A chave na sua mão. As escrituras assinadas. O bem que você sonhava agora é seu — e foi conquistado de forma estratégica, sem comprometer sua liquidez nem sua liberdade. Esse é o legado VANTTI: realizações que sustentam o próximo passo da sua jornada.",
      layout: "left" as const,
    },
  ]

  const pillars = [
    {
      icon: Building2,
      title: "Imóveis",
      description: "Cartas de crédito imobiliário para residenciais, comerciais e investimentos de alto padrão.",
    },
    {
      icon: Car,
      title: "Veículos",
      description: "Soluções para automóveis premium, frotas executivas e veículos de uso particular.",
    },
    {
      icon: Briefcase,
      title: "Negócios",
      description: "Capital estratégico para expansão empresarial, equipamentos e novos investimentos.",
    },
  ]

  const stats = [
    { icon: Users, value: "+12.000", label: "Clientes atendidos" },
    { icon: TrendingUp, value: "R$ 2,8 Bi", label: "Em cartas estruturadas" },
    { icon: Award, value: "15 anos", label: "De solidez no mercado" },
    { icon: ShieldCheck, value: "Itaú", label: "Parceiro financeiro" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Pillars Strip */}
      <section className="relative border-b border-border bg-ink-950 py-14 md:py-16">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">Soluções VANTTI</span>
            <div className="mt-3 h-px w-16 bg-gold/60" />
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-gold/20 bg-gold/20 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative flex flex-col gap-4 bg-ink-950 p-8 transition-colors hover:bg-ink-900 md:p-10"
              >
                <pillar.icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
                <h3 className="font-serif text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{pillar.description}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        {/* decorative gold corners */}
        <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/40" />
        <div className="pointer-events-none absolute right-8 bottom-8 h-16 w-16 border-b border-r border-gold/40" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Nossa Essência</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
              A precisão de um <span className="italic text-gold">lince</span>.
              <br />A confiança de um <span className="italic text-gold">legado</span>.
            </h2>
            <div className="my-12 gold-divider" />
            <TextGradientScroll
              text={missionStatement}
              className="font-serif text-xl leading-relaxed text-foreground/85 md:text-2xl lg:text-3xl"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative border-y border-gold/30 bg-ink-950 py-12">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center md:items-start md:text-left">
                <stat.icon className="mb-3 h-6 w-6 text-gold" strokeWidth={1.4} />
                <div className="font-serif text-3xl font-semibold text-white md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white/55">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative bg-background py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto mb-20 px-6">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Como Funciona</span>
                <span className="h-px w-10 bg-gold" />
              </div>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
                Três passos. Uma <span className="italic text-gold">conquista</span> definitiva.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Um processo curado, transparente e estratégico — desenhado para quem entende que tempo e estrutura são
                ativos tão valiosos quanto o crédito em si.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative bg-secondary/40 py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Depoimentos</span>
              <span className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl text-balance">
              Histórias de quem já <span className="italic text-gold">conquistou</span>.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Mais de uma década estruturando cartas de crédito para famílias, executivos e empreendedores em todo o
              Brasil.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll CTA */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/cta-lynx.jpg"
          mobileImage="/images/cta-lynx.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
