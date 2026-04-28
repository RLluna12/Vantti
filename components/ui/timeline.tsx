"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface TimelineEntry {
  id: number
  image: string
  alt: string
  title: string
  description: string
  layout: "left" | "right"
}

interface TimelineProps {
  entries: TimelineEntry[]
  className?: string
}

export function Timeline({ entries, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Central Timeline Line - subtle gold */}
      <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/40 to-transparent md:block" />

      {entries.map((entry, index) => (
        <TimelineItem key={entry.id} entry={entry} index={index} scrollProgress={scrollYProgress} />
      ))}
    </div>
  )
}

interface TimelineItemProps {
  entry: TimelineEntry
  index: number
  scrollProgress: any
}

function TimelineItem({ entry, index, scrollProgress }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start center", "end center"],
  })

  const opacity = useTransform(itemProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(itemProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.92])

  const isLeft = entry.layout === "left"
  const stepNumber = String(index + 1).padStart(2, "0")

  return (
    <motion.div ref={itemRef} style={{ opacity, scale }} className="relative mb-20 md:mb-32">
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 z-10 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-background md:block">
        <div className="absolute inset-0.5 bg-gold" />
      </div>

      <div className="container mx-auto px-6">
        <div
          className={cn("grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16", {
            "md:text-right": isLeft,
          })}
        >
          {/* Image */}
          <div
            className={cn("relative", {
              "md:order-2": isLeft,
              "md:order-1": !isLeft,
            })}
          >
            <div className="sticky top-20">
              <div className="group relative aspect-[3/4] overflow-hidden bg-secondary">
                {/* Decorative gold border corners */}
                <div className="pointer-events-none absolute left-3 top-3 z-10 h-8 w-8 border-l border-t border-gold/70" />
                <div className="pointer-events-none absolute right-3 bottom-3 z-10 h-8 w-8 border-b border-r border-gold/70" />

                <img
                  src={entry.image || "/placeholder.svg"}
                  alt={entry.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn("relative", {
              "md:order-1": isLeft,
              "md:order-2": !isLeft,
            })}
          >
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div
                  className={cn("flex items-center gap-3", {
                    "md:justify-end": isLeft,
                  })}
                >
                  <span className="font-serif text-5xl font-light italic text-gold/80 md:text-6xl">{stepNumber}</span>
                  <span className="h-px w-12 bg-gold" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                    Etapa {index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                  {entry.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:ml-auto md:text-lg">
                  {entry.description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
