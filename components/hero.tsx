'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, MessageCircle, ShieldCheck } from 'lucide-react'
import { NetworkBackground } from './network-background'
import { HeroVisual } from './hero-visual'
import { useLanguage } from '@/lib/language-context'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero({ onOpenAssistant }: { onOpenAssistant: () => void }) {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <NetworkBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8 lg:pb-32 lg:pt-28">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t('hero.badge')}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t('hero.title1')}
            <br />
            <span className="text-primary text-glow">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            {t('hero.desc')}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 glow-blue"
            >
              {t('hero.cta1')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={onOpenAssistant}
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              <Bot className="h-4 w-4 text-primary" />
              {t('hero.cta2')}
            </button>
            <a
              href="https://wa.me/242065342402"
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              {t('hero.cta3')}
            </a>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            {t('hero.trust')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
