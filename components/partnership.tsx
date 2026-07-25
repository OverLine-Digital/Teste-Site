'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Handshake, ArrowRight, X } from 'lucide-react'
import { allServices } from '@/lib/services'
import { serviceI18n } from '@/lib/i18n'
import { useLanguage } from '@/lib/language-context'

export function Partnership() {
  const [open, setOpen] = useState(false)
  const { lang, t } = useLanguage()

  const whatsappMessages: Record<string, (name: string) => string> = {
    fr: (name) =>
      `Bonjour OverLine Digital, je souhaite devenir partenaire concernant la solution "${name}". Pouvez-vous me donner plus d'informations ?`,
    en: (name) =>
      `Hello OverLine Digital, I would like to become a partner regarding the "${name}" solution. Could you share more details?`,
    es: (name) =>
      `Hola OverLine Digital, me gustaría ser socio en relación con la solución "${name}". ¿Podrían darme más información?`,
    pt: (name) =>
      `Olá OverLine Digital, gostaria de ser parceiro em relação à solução "${name}". Podem me dar mais informações?`,
  }

  function pickSolution(id: string) {
    const localized = serviceI18n[id]?.[lang]
    const service = allServices.find((s) => s.id === id)
    const name = localized?.name ?? service?.name ?? id
    const builder = whatsappMessages[lang] ?? whatsappMessages.fr
    const message = builder(name)
    const url = `https://wa.me/242065342402?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
  }

  return (
    <section id="partnership" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center lg:px-16 lg:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="relative">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 glow-blue">
              <Handshake className="h-6 w-6 text-primary" aria-hidden="true" />
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t('partnership.title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {t('partnership.desc')}
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 glow-blue"
            >
              {t('partnership.cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong w-full max-w-lg rounded-3xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-foreground">{t('partnership.pickTitle')}</h3>
                <button type="button" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mb-5 text-sm text-muted-foreground">{t('partnership.pickDesc')}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {allServices.map((s) => {
                  const localized = serviceI18n[s.id]?.[lang]
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => pickSolution(s.id)}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                    >
                      <s.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {localized?.name ?? s.name}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
