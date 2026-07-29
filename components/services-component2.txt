'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { serviceCategories, type Service } from '@/lib/services'
import { serviceI18n, categoryI18n } from '@/lib/i18n'
import { useLanguage } from '@/lib/language-context'
import { SectionHeading } from './section-heading'

export function Services({ onRequestService }: { onRequestService: (service: Service) => void }) {
  const { lang, t } = useLanguage()

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          description={t('services.desc')}
        />

        <div className="flex flex-col gap-16">
          {serviceCategories.map((category) => (
            <div key={category.id}>
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="mb-6 flex items-center gap-4"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {categoryI18n[category.id]?.[lang] ?? category.name}
                </h3>
                <div className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-muted-foreground">
                  {String(category.services.length).padStart(2, '0')}
                </span>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {category.services.map((service, i) => {
                  const localized = serviceI18n[service.id]?.[lang]
                  return (
                    <motion.article
                      key={service.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="group glass relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,102,255,0.12)]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                        <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <h4 className="mb-2 font-medium text-foreground">{localized?.name ?? service.name}</h4>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {localized?.description ?? service.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => onRequestService(service)}
                        className="flex items-center justify-between rounded-full border border-border px-4 py-2 text-sm text-foreground transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        {t('services.request')}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
