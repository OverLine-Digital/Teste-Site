'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Check,
  ChevronLeft,
  ChevronRight,
  UploadCloud,
  CalendarClock,
  Sparkles,
} from 'lucide-react'
import {
  allServices,
  estimatedDelivery,
  type Service,
  type DurationOption,
} from '@/lib/services'
import { supabase } from '@/lib/supabase'

const steps = ['Service', 'Duration', 'Project', 'Files', 'Details', 'Summary']
const requestTypes = ['Website', 'Software', 'Android App', 'iOS App', 'Android & iOS']
const delayOptions = ['5 Days', '1 Week', '2 Weeks', '3 Weeks', '4 Weeks']
const WEB_APP_IDS = ['website-development', 'mobile-applications']

type CustomerInfo = {
  fullName: string
  company: string
  email: string
  phone: string
  country: string
  whatsapp: string
}

const emptyCustomer: CustomerInfo = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  whatsapp: '',
}

export function BookingModal({
  open,
  initialService,
  onClose,
}: {
  open: boolean
  initialService: Service | null
  onClose: () => void
}) {
  const [step, setStep] = useState(0)
  const [service, setService] = useState<Service | null>(null)
  const [duration, setDuration] = useState<DurationOption | null>(null)
  const [requestType, setRequestType] = useState<string | null>(null)
  const [delayLabel, setDelayLabel] = useState<string>('4 Weeks')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState<string[]>([])
  const [customer, setCustomer] = useState<CustomerInfo>(emptyCustomer)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const isWebOrApp = service ? WEB_APP_IDS.includes(service.id) : false

  async function handleSubmit() {
    if (!service) return
    setSubmitting(true)
    setSubmitError(null)

    const { error } = await supabase.from('bookings').insert({
      service_id: service.id,
      service_name: service.name,
      duration_label: isWebOrApp ? delayLabel : duration?.label,
      duration_weeks: isWebOrApp ? null : duration?.weeks,
      request_type: isWebOrApp ? requestType : null,
      description,
      files,
      full_name: customer.fullName,
      company: customer.company,
      email: customer.email,
      phone: customer.phone,
      country: customer.country,
      whatsapp: customer.whatsapp,
    })

    setSubmitting(false)

    if (error) {
      setSubmitError(error.message)
      return
    }
    setSubmitted(true)
  }

  useEffect(() => {
    if (open) {
      setService(initialService)
      setStep(initialService ? 1 : 0)
      setDuration(null)
      setRequestType(null)
      setDelayLabel('4 Weeks')
      setDescription('')
      setFiles([])
      setCustomer(emptyCustomer)
      setSubmitted(false)
    }
  }, [open, initialService])

  const escHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', escHandler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', escHandler)
      document.body.style.overflow = ''
    }
  }, [open, escHandler])

  const canNext = () => {
    switch (step) {
      case 0:
        return service !== null
      case 1:
        return isWebOrApp ? requestType !== null && delayLabel !== '' : duration !== null
      case 2:
        return description.trim().length > 10
      case 3:
        return true
      case 4:
        return (
          customer.fullName.trim() !== '' &&
          customer.email.trim() !== '' &&
          customer.phone.trim() !== ''
        )
      default:
        return true
    }
  }

  const inputClass =
    'w-full rounded-xl border border-input bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/40 transition-colors'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-background/70 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Book a service"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {submitted ? 'Request received' : `Step ${step + 1} of ${steps.length}`}
                </p>
                <h3 className="text-sm font-medium text-foreground">
                  {submitted ? 'Thank you' : steps[step]}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking dialog"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Progress */}
            {!submitted && (
              <div className="flex gap-1.5 px-6 pt-4">
                {steps.map((s, i) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                      i <= step ? 'bg-primary' : 'bg-secondary'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 glow-blue"
                  >
                    <Check className="h-7 w-7 text-primary" />
                  </motion.span>
                  <h4 className="mb-2 text-xl font-semibold text-foreground">
                    Your request has been submitted
                  </h4>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Our team will review your project and contact you within 24 hours via email or
                    WhatsApp with a detailed proposal.
                  </p>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Step 0: Service */}
                    {step === 0 && (
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {allServices.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              setService(s)
                              setDuration(null)
                            }}
                            className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${
                              service?.id === s.id
                                ? 'border-primary/60 bg-primary/10'
                                : 'border-border bg-secondary/50 hover:border-primary/30'
                            }`}
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/12">
                              <s.icon className="h-4 w-4 text-primary" />
                            </span>
                            <span className="text-sm text-foreground">{s.name}</span>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Step 1: Duration */}
                    {step === 1 && service && isWebOrApp && (
                      <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                          What do you need for{' '}
                          <span className="text-foreground">{service.name}</span>?
                        </p>
                        <label className="mb-2 mt-4 block text-xs text-muted-foreground">Type *</label>
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {requestTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setRequestType(type)}
                              className={`rounded-xl border p-3.5 text-left text-sm transition-all ${
                                requestType === type
                                  ? 'border-primary/60 bg-primary/10 text-foreground'
                                  : 'border-border bg-secondary/50 text-muted-foreground hover:border-primary/30'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>

                        <label className="mb-2 mt-6 block text-xs text-muted-foreground">
                          Delivery Timeline * <span className="text-muted-foreground/70">(default: 4 Weeks)</span>
                        </label>
                        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
                          {delayOptions.map((d) => (
                            <button
                              key={d}
                              type="button"
                              onClick={() => setDelayLabel(d)}
                              className={`rounded-xl border p-3 text-center text-xs transition-all ${
                                delayLabel === d
                                  ? 'border-primary/60 bg-primary/10 text-foreground'
                                  : 'border-border bg-secondary/50 text-muted-foreground hover:border-primary/30'
                              }`}
                            >
                              {d}
                            </button>
                          ))}
                        </div>

                        <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/8 px-4 py-3">
                          <CalendarClock className="h-4 w-4 shrink-0 text-primary" />
                          <p className="text-xs leading-relaxed text-foreground">
                            The final price depends on the timeline chosen and the complexity of your
                            request. You'll receive a tailored quote after our team reviews your project.
                          </p>
                        </div>
                      </div>
                    )}

                    {step === 1 && service && !isWebOrApp && (
                      <div>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Choose a timeline for{' '}
                          <span className="text-foreground">{service.name}</span>.
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {service.durations.map((d) => (
                            <button
                              key={d.label}
                              type="button"
                              onClick={() => setDuration(d)}
                              className={`relative rounded-xl border p-4 text-left transition-all ${
                                duration?.label === d.label
                                  ? 'border-primary/60 bg-primary/10'
                                  : 'border-border bg-secondary/50 hover:border-primary/30'
                              }`}
                            >
                              {d.recommended && (
                                <span className="absolute -top-2.5 right-3 flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                                  <Sparkles className="h-2.5 w-2.5" /> Recommended
                                </span>
                              )}
                              <p className="text-sm font-medium text-foreground">{d.label}</p>
                              <p className="mt-1 text-xs text-muted-foreground">
                                Delivery by {estimatedDelivery(d.weeks)}
                              </p>
                            </button>
                          ))}
                        </div>
                        {duration && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 flex items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/8 px-4 py-3"
                          >
                            <CalendarClock className="h-4 w-4 shrink-0 text-primary" />
                            <p className="text-sm text-foreground">
                              Estimated delivery:{' '}
                              <span className="font-medium text-primary">
                                {estimatedDelivery(duration.weeks)}
                              </span>
                            </p>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Step 2: Describe */}
                    {step === 2 && (
                      <div>
                        <label
                          htmlFor="project-description"
                          className="mb-2 block text-sm text-muted-foreground"
                        >
                          Describe your project, goals and any references
                        </label>
                        <textarea
                          id="project-description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows={8}
                          placeholder="Tell us about your vision, target audience, key features, and anything else that will help us understand your project..."
                          className={`${inputClass} resize-none leading-relaxed`}
                        />
                        <p className="mt-2 text-xs text-muted-foreground">
                          Minimum 10 characters · {description.trim().length} written
                        </p>
                      </div>
                    )}

                    {/* Step 3: Files */}
                    {step === 3 && (
                      <div>
                        <label
                          htmlFor="file-upload"
                          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/40 px-6 py-12 text-center transition-colors hover:border-primary/50 hover:bg-primary/5"
                        >
                          <UploadCloud className="mb-3 h-8 w-8 text-primary" />
                          <p className="text-sm font-medium text-foreground">
                            Upload briefs, logos or references
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            PDF, images, documents — optional
                          </p>
                          <input
                            id="file-upload"
                            type="file"
                            multiple
                            className="sr-only"
                            onChange={(e) => {
                              const names = Array.from(e.target.files ?? []).map((f) => f.name)
                              setFiles((prev) => [...prev, ...names])
                            }}
                          />
                        </label>
                        {files.length > 0 && (
                          <ul className="mt-4 flex flex-col gap-2">
                            {files.map((f, i) => (
                              <li
                                key={`${f}-${i}`}
                                className="flex items-center justify-between rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-sm text-foreground"
                              >
                                <span className="truncate">{f}</span>
                                <button
                                  type="button"
                                  aria-label={`Remove ${f}`}
                                  onClick={() =>
                                    setFiles((prev) => prev.filter((_, idx) => idx !== i))
                                  }
                                  className="ml-3 text-muted-foreground hover:text-foreground"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* Step 4: Customer */}
                    {step === 4 && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {(
                          [
                            ['fullName', 'Full Name *', 'Pedro Tepina'],
                            ['company', 'Company', 'Your company'],
                            ['email', 'Email *', 'you@company.com'],
                            ['phone', 'Phone *', '+242 ...'],
                            ['country', 'Country', 'Republic of the Congo'],
                            ['whatsapp', 'WhatsApp', '+242 ...'],
                          ] as [keyof CustomerInfo, string, string][]
                        ).map(([key, label, placeholder]) => (
                          <div key={key}>
                            <label
                              htmlFor={`field-${key}`}
                              className="mb-1.5 block text-xs text-muted-foreground"
                            >
                              {label}
                            </label>
                            <input
                              id={`field-${key}`}
                              type={key === 'email' ? 'email' : 'text'}
                              value={customer[key]}
                              placeholder={placeholder}
                              onChange={(e) =>
                                setCustomer((prev) => ({ ...prev, [key]: e.target.value }))
                              }
                              className={inputClass}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 5: Summary */}
                    {step === 5 && service && (duration || isWebOrApp) && (
                      <div className="flex flex-col gap-3">
                        {(
                          isWebOrApp
                            ? [
                                ['Solution', service.name],
                                ['Type', requestType ?? '—'],
                                ['Timeline', delayLabel],
                                ['Name', customer.fullName],
                                ['Email', customer.email],
                                ['Phone', customer.phone],
                                ['Files', files.length > 0 ? `${files.length} attached` : 'None'],
                              ]
                            : [
                                ['Solution', service.name],
                                ['Duration', duration!.label],
                                ['Estimated delivery', estimatedDelivery(duration!.weeks)],
                                ['Name', customer.fullName],
                                ['Email', customer.email],
                                ['Phone', customer.phone],
                                ['Files', files.length > 0 ? `${files.length} attached` : 'None'],
                              ]
                        ).map(([label, value]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between rounded-xl border border-border bg-secondary/50 px-4 py-3"
                          >
                            <span className="text-xs text-muted-foreground">{label}</span>
                            <span className="text-sm font-medium text-foreground">{value}</span>
                          </div>
                        ))}
                        <div className="rounded-xl border border-border bg-secondary/50 px-4 py-3">
                          <p className="mb-1 text-xs text-muted-foreground">Project description</p>
                          <p className="text-sm leading-relaxed text-foreground">{description}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {!submitted && (
              <div className="flex items-center justify-between border-t border-border px-6 py-4">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canNext()}
                    className="flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-40 disabled:hover:brightness-100 glow-blue"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 glow-blue disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Submit Request'} <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            )}
            {submitError && (
              <p className="px-6 pb-4 text-xs text-red-400">
                Something went wrong: {submitError}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
