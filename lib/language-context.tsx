'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { type Lang, t as translate } from './i18n'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (path: string) => string }

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    const stored = window.localStorage.getItem('overline-lang') as Lang | null
    if (stored) setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem('overline-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: (path: string) => translate(lang, path) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
