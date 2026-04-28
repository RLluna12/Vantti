"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "A VANTTI estruturou a carta de crédito do nosso primeiro imóvel comercial em São Paulo. Atendimento de outro nível, com a segurança da parceria com o Itaú. Conquistamos sem comprometer nosso caixa.",
    by: "Camila Andrade, Diretora — Holding Familiar",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CamilaAndrade&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 1,
    testimonial:
      "Trocamos toda a frota da nossa empresa via VANTTI. O processo foi consultivo, transparente e impecavelmente conduzido. Cada etapa explicada com a sofisticação que o investimento merecia.",
    by: "Roberto Mendes, CEO — Logística Premium",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RobertoMendes&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 2,
    testimonial:
      "Procuramos uma carta de crédito para a casa de praia da família. A VANTTI superou expectativas — taxas competitivas, parcelas alinhadas ao nosso fluxo e zero burocracia desnecessária.",
    by: "Patrícia Lima, Sócia — Escritório de Advocacia",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=PatriciaLima&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 3,
    testimonial:
      "Solidez é a palavra. Em um mercado cheio de promessas, a VANTTI entrega exatamente o que combina — com a chancela do Itaú por trás. Recomendo a todos os meus clientes.",
    by: "Eduardo Paz, Consultor de Investimentos",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EduardoPaz&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 4,
    testimonial:
      "Estruturamos o crédito para expansão da nossa rede de clínicas. O time da VANTTI entendeu o negócio antes de propor números. Foi assessoria, não venda.",
    by: "Dra. Marina Salgado, Fundadora — Rede Médica",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaSalgado&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 5,
    testimonial:
      "Nunca pensei que adquirir um Porsche pudesse ser tão estratégico. A VANTTI desenhou um plano que preservou minhas reservas e ainda otimizou meu fluxo mensal.",
    by: "Felipe Cardoso, Executivo C-Level",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=FelipeCardoso&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 6,
    testimonial:
      "Um atendimento que respeita o tempo do cliente. Em duas reuniões, eu tinha clareza completa do plano. Em duas semanas, a carta aprovada. Nível premium do início ao fim.",
    by: "Ana Beatriz Souza, Empresária do Agronegócio",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnaSouza&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 7,
    testimonial:
      "A combinação VANTTI + Itaú me trouxe segurança que eu não encontrei em nenhuma outra estruturadora. Já é nossa parceira oficial para todas as próximas aquisições da família.",
    by: "Henrique Tavares, Investidor",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=HenriqueTavares&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 8,
    testimonial:
      "Consegui o capital para abrir minha terceira unidade sem tocar nas reservas do negócio. A VANTTI pensou comigo, não por mim — e isso fez toda a diferença na decisão.",
    by: "Larissa Fontes, Sócia — Restaurante Premiado",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LarissaFontes&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 9,
    testimonial:
      "A VANTTI entrega o que prometeu: estratégia de verdade, não atalhos. Cada detalhe foi tratado com a discrição e o cuidado que esperamos em uma operação desse porte.",
    by: "Gustavo Reis, Diretor Financeiro — Grupo Industrial",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=GustavoReis&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 10,
    testimonial:
      "Adquirimos nosso apartamento dos sonhos no Leblon. O time da VANTTI conduziu tudo com elegância, e a parceria com o Itaú trouxe condições impossíveis de encontrar em outro lugar.",
    by: "Rafael Nogueira, Médico Cirurgião",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RafaelNogueira&backgroundColor=0a0a0a&textColor=bc9437",
  },
  {
    tempId: 11,
    testimonial:
      "O nível de detalhe na proposta da VANTTI é o que separa amadores de profissionais. Vi cada cenário, cada número, cada projeção. Decidi com confiança absoluta.",
    by: "Juliana Castro, CFO — Fintech",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=JulianaCastro&backgroundColor=0a0a0a&textColor=bc9437",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 border-gold bg-ink-950 text-white"
          : "z-0 border-border bg-white text-foreground hover:border-gold/60",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
        `,
        boxShadow: isCenter ? "0px 12px 0px -2px hsl(42 47% 50%)" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className={cn("absolute block origin-top-right rotate-45", isCenter ? "bg-gold" : "bg-border")}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <Quote className={cn("mb-3 h-7 w-7", isCenter ? "text-gold" : "text-gold/70")} strokeWidth={1.5} />
      <h3
        className={cn(
          "font-serif text-base leading-snug sm:text-lg lg:text-xl",
          isCenter ? "text-white" : "text-foreground",
        )}
      >
        {testimonial.testimonial}
      </h3>
      <p
        className={cn(
          "absolute bottom-7 left-8 right-8 text-xs font-medium tracking-wide",
          isCenter ? "text-gold" : "text-muted-foreground",
        )}
      >
        — {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-colors",
            "border border-border bg-white hover:border-gold hover:bg-ink-950 hover:text-gold",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          )}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-12 w-12 items-center justify-center transition-colors",
            "border border-border bg-white hover:border-gold hover:bg-ink-950 hover:text-gold",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          )}
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
