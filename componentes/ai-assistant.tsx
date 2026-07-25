'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Sparkles } from 'lucide-react'

type Message = {
  role: 'assistant' | 'user'
  text: string
}

const cannedReplies = [
  'Great question! Our team specializes in websites, mobile apps, AI assistants and cybersecurity. Which area interests you most?',
  'We typically deliver websites in 1 to 4 weeks depending on complexity. You can start a booking through the Services section.',
  'You can reach our team directly on WhatsApp at +242 06 534 24 02 — we usually reply within a few hours.',
  'OverLine Digital is based in Brazzaville, Republic of the Congo, and we work with clients across Africa and worldwide.',
]

export function AiAssistant({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hello, I am the OverLine AI Assistant. How can I help you build your digital future today?',
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const replyIndex = useRef(0)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const send = () => {
    const text = input.trim()
    if (!text || typing) return
    setMessages((prev) => [...prev, { role: 'user', text }])
    setInput('')
    setTyping(true)
    const reply = cannedReplies[replyIndex.current % cannedReplies.length]
    replyIndex.current += 1
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }])
      setTyping(false)
    }, 1200)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        type="button"
        onClick={() => onOpenChange(!open)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 16 }}
        className="fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 glow-blue"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Bot className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong fixed bottom-24 right-6 z-[70] flex h-[480px] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-3xl shadow-2xl shadow-primary/20"
            role="dialog"
            aria-label="AI assistant chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">OverLine AI Assistant</p>
                <p className="text-[11px] text-primary">Online · Always available</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
              <div className="flex flex-col gap-3">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'self-end rounded-br-md bg-primary text-primary-foreground'
                        : 'self-start rounded-bl-md bg-secondary text-foreground'
                    }`}
                  >
                    {m.text}
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-1 self-start rounded-2xl rounded-bl-md bg-secondary px-4 py-3"
                    aria-label="Assistant is typing"
                  >
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: d * 0.2,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <div className="flex items-center gap-2 rounded-full border border-input bg-secondary px-4 py-1.5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      e.key === 'Enter' &&
                      !e.nativeEvent.isComposing &&
                      e.keyCode !== 229
                    ) {
                      send()
                    }
                  }}
                  placeholder="Ask anything..."
                  aria-label="Message the AI assistant"
                  className="flex-1 bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="button"
                  onClick={send}
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:brightness-110 disabled:opacity-40"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
