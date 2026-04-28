"use client"

import { useState, useRef, useEffect, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Send, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Message {
  role: "user" | "bot"
  content: string
}

const generateSessionId = () => `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

// Stylized lynx mark used as the assistant avatar
function LynxMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M6 4l3 5 3-3 4 1 4-1 3 3 3-5-1 8-2 3 1 5-4 4h-2l-2-2-2 2h-2l-4-4 1-5-2-3-1-8z" />
      <circle cx="12" cy="14" r="1.2" fill="#0a0a0a" />
      <circle cx="20" cy="14" r="1.2" fill="#0a0a0a" />
    </svg>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Olá! Sou o assistente da **VANTTI**. Posso te ajudar a entender como uma carta de crédito pode acelerar sua próxima conquista. Sobre o que você gostaria de saber?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && !sessionId) setSessionId(generateSessionId())
  }, [isOpen, sessionId])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: "smooth" })
    }
  }, [messages])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Não foi possível obter resposta do servidor.")

      const botMessage: Message = { role: "bot", content: data.reply }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error(error)
      let message = "Desculpe, ocorreu um problema. Tente novamente em instantes."
      if (error instanceof Error) message = error.message
      setMessages((prev) => [...prev, { role: "bot", content: message }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-[calc(100vw-48px)] sm:w-[400px]"
            >
              <Card className="flex h-[64vh] flex-col overflow-hidden border-gold/30 bg-white shadow-2xl shadow-ink-950/20">
                <CardHeader className="flex flex-row items-center justify-between border-b border-gold/20 bg-ink-950 py-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/60 bg-ink-900">
                      <LynxMark className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="font-serif text-lg font-semibold tracking-wide text-white">
                        Assistente VANTTI
                      </CardTitle>
                      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gold">Online</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-sm p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-gold"
                    aria-label="Fechar chat"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </CardHeader>
                <CardContent className="flex-grow overflow-hidden p-4">
                  <ScrollArea className="h-full" ref={scrollAreaRef}>
                    <div className="space-y-4 pr-2">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex items-start gap-2.5",
                            message.role === "user" ? "justify-end" : "justify-start",
                          )}
                        >
                          {message.role === "bot" && (
                            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-ink-950">
                              <LynxMark className="h-4 w-4 text-gold" />
                            </div>
                          )}
                          <div
                            className={cn(
                              "max-w-[78%] rounded-sm px-3.5 py-2.5 text-sm leading-relaxed",
                              message.role === "user"
                                ? "bg-gold text-ink-950"
                                : "border border-border bg-secondary/60 text-foreground",
                            )}
                          >
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                                ol: ({ node, ...props }) => (
                                  <ol className="my-2 list-inside list-decimal space-y-1" {...props} />
                                ),
                                ul: ({ node, ...props }) => (
                                  <ul className="my-2 list-inside list-disc space-y-1" {...props} />
                                ),
                                a: ({ node, ...props }) => (
                                  <a
                                    className="underline underline-offset-2 hover:text-gold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    {...props}
                                  />
                                ),
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          </div>
                          {message.role === "user" && (
                            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm bg-ink-950 text-gold">
                              <User className="h-3.5 w-3.5" />
                            </div>
                          )}
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-ink-950">
                            <LynxMark className="h-4 w-4 text-gold" />
                          </div>
                          <div className="rounded-sm border border-border bg-secondary/60 px-3.5 py-2.5">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.3s]" />
                              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold [animation-delay:-0.15s]" />
                              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className="border-t border-border bg-secondary/30 p-3">
                  <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Sua dúvida sobre cartas de crédito..."
                      disabled={isLoading}
                      className="flex-1 border-border bg-white focus-visible:ring-gold"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={isLoading}
                      className="bg-gold text-ink-950 hover:bg-gold-400"
                    >
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Enviar</span>
                    </Button>
                  </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div layout className="flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex h-14 w-14 items-center justify-center rounded-sm border border-gold/60 bg-ink-950 text-gold shadow-xl shadow-ink-950/30 transition-all hover:bg-gold hover:text-ink-950"
            aria-label="Abrir chat"
          >
            {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
            {!isOpen && (
              <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
            )}
          </button>
        </motion.div>
      </div>
    </>
  )
}
