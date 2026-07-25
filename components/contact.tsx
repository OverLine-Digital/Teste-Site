'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { useLanguage } from '@/lib/language-context'

export function Contact() {
  const { t } = useLanguage()

  const cards = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+242 06 534 24 02',
      action: { label: t('contact.whatsappCta'), href: 'https://wa.me/242065342402' },
      secondary: { label: t('contact.call'), href: 'tel:+242065342402' },
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'overlinedigital@toxicx.tech',
      action: { label: t('contact.emailCta'), href: 'mailto:overlinedigital@toxicx.tech' },
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Brazzaville, Republic of the Congo',
      action: {
        label: t('contact.mapCta'),
        href: 'https://www.google.com/maps/search/?api=1&query=Brazzaville%2C+Republic+of+the+Congo',
      },
    },
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} description={t('contact.desc')} />

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,102,255,0.1)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 transition-all group-hover:bg-primary/20">
                <card.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{card.label}</p>
              <p className="mb-6 mt-2 flex-1 text-lg font-medium text-foreground">{card.value}</p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={card.action.href}
                  target={card.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                >
                  {card.action.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                {card.secondary && (
                  <a
                    href={card.secondary.href}
                    className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    {card.secondary.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
