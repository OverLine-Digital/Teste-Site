'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Pricing } from '@/components/pricing'
import { DashboardPreview } from '@/components/dashboard-preview'
import { Partnership } from '@/components/partnership'
import { Ceo } from '@/components/ceo'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'
import { AiAssistant } from '@/components/ai-assistant'
import { WhatsappFab } from '@/components/whatsapp-fab'
import type { Service } from '@/lib/services'

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [assistantOpen, setAssistantOpen] = useState(false)

  const openBooking = (service: Service | null) => {
    setSelectedService(service)
    setBookingOpen(true)
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenAssistant={() => setAssistantOpen(true)} />
        <About />
        <Services onRequestService={(s) => openBooking(s)} />
        <Pricing onRequestService={(s) => openBooking(s)} />
        <DashboardPreview />
        <Partnership />
        <Ceo />
        <Faq />
        <Contact />
      </main>
      <Footer />

      <BookingModal
        open={bookingOpen}
        initialService={selectedService}
        onClose={() => setBookingOpen(false)}
      />
      <AiAssistant open={assistantOpen} onOpenChange={setAssistantOpen} />
      <WhatsappFab />
    </>
  )
}
