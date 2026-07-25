'use client'

import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { langMeta, type Lang } from '@/lib/i18n'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21.9v-8h2.7l.4-3.1h-3.1V8.8c0-.9.25-1.5 1.55-1.5h1.65V4.5c-.3-.04-1.3-.12-2.45-.12-2.4 0-4.05 1.46-4.05 4.15v2.36H7.5v3.1h2.7v8h3.3z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
]

export function Footer() {
  const { lang, setLang, t } = useLanguage()

  const columns = [
    {
      title: t('footer.quickLinks'),
      links: [
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.dashboard'), href: '#dashboard' },
        { label: t('nav.services'), href: '#services' },
        { label: t('nav.partnership'), href: '#partnership' },
        { label: t('faq.eyebrow'), href: '#faq' },
        { label: t('nav.contact'), href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <img src="/images/logo.png" alt="OverLine Digital" className="h-9 w-9 object-contain" />
              <span className="font-semibold tracking-tight text-foreground">
                OverLine <span className="text-muted-foreground">Digital</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{t('footer.tagline')}</p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label={t('footer.languages')}>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t('footer.languages')}</p>
            <ul className="flex flex-col gap-2.5">
              {(Object.keys(langMeta) as Lang[]).map((code) => (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => setLang(code)}
                    className={`text-sm transition-colors hover:text-foreground ${
                      code === lang ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {langMeta[code].flag} {langMeta[code].label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t('footer.contact')}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/242065342402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  +242 06 534 24 02
                </a>
              </li>
              <li>
                <a
                  href="mailto:overlinedigital@toxicx.tech"
                  className="flex items-start gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  overlinedigital@toxicx.tech
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Brazzaville, Republic of the Congo
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OverLine Digital. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              {t('footer.terms')}
            </a>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{t('footer.builtIn')}</p>
        </div>
      </div>
    </footer>
  )
}
