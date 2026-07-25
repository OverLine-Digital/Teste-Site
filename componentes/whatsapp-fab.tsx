'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/242065342402"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
