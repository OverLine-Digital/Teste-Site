'use client'

import { motion } from 'framer-motion'
import { Quote, UserRound } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { useLanguage } from '@/lib/language-context'

export function Ceo() {
  const { t } = useLanguage()
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow={t('ceo.eyebrow')} title={t('ceo.title')} />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass mx-auto grid max-w-4xl overflow-hidden rounded-3xl md:grid-cols-[320px_1fr]"
        >
          <div className="relative flex aspect-[4/5] items-center justify-center bg-secondary md:aspect-auto">
            <UserRound className="h-24 w-24 text-muted-foreground/40" aria-hidden="true" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <Quote className="mb-5 h-7 w-7 text-primary/60" aria-hidden="true" />
            <blockquote className="text-pretty text-lg leading-relaxed text-foreground">
              {t('ceo.quote')}
            </blockquote>
            <div className="mt-7 flex items-center gap-4">
              <div className="h-10 w-1 rounded-full bg-primary" />
              <div>
                <p className="font-medium text-foreground">Pedro Ndunguidi Tepina</p>
                <p className="text-sm text-muted-foreground">{t('ceo.role')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
