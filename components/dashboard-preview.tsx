'use client'

import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  CreditCard,
  FileText,
  Vault,
  LifeBuoy,
  Settings,
  Bell,
  TrendingUp,
  Check,
} from 'lucide-react'
import { SectionHeading } from './section-heading'
import { useLanguage } from '@/lib/language-context'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FolderKanban, label: 'Projects' },
  { icon: MessageSquare, label: 'Messages', badge: 3 },
  { icon: CreditCard, label: 'Payments' },
  { icon: FileText, label: 'Invoices' },
  { icon: Vault, label: 'Project Vault' },
  { icon: LifeBuoy, label: 'Support' },
  { icon: Settings, label: 'Settings' },
]

const timeline = [
  { phase: 'Analysis', pct: 100 },
  { phase: 'Planning', pct: 100 },
  { phase: 'Design', pct: 100 },
  { phase: 'Development', pct: 68 },
  { phase: 'Testing', pct: 20 },
  { phase: 'Deployment', pct: 0 },
  { phase: 'Support', pct: 0 },
]

const activity = [
  { text: 'Design mockups approved', time: '2h ago' },
  { text: 'Invoice #0247 paid', time: '5h ago' },
  { text: 'New message from project manager', time: '1d ago' },
  { text: 'Development sprint 3 started', time: '2d ago' },
]

export function DashboardPreview() {
  const { t } = useLanguage()
  return (
    <section id="dashboard" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[400px] w-[500px] rounded-full bg-primary/5 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('dashboard.eyebrow')}
          title={t('dashboard.title')}
          description={t('dashboard.desc')}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong overflow-hidden rounded-3xl shadow-2xl shadow-primary/10"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                <span className="font-mono text-[10px] font-bold text-primary-foreground">O</span>
              </span>
              <span className="text-xs font-medium text-foreground">OverLine Platform</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="relative">
                <Bell className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="h-7 w-7 rounded-full bg-primary/20 text-center text-[10px] leading-7 text-primary">
                PT
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[200px_1fr_280px]">
            {/* Sidebar */}
            <nav
              className="hidden border-r border-border p-3 lg:block"
              aria-label="Dashboard navigation preview"
            >
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`mb-1 flex items-center justify-between rounded-lg px-3 py-2 text-xs ${
                    item.active
                      ? 'bg-primary/12 text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="rounded-full bg-primary px-1.5 text-[9px] leading-4 text-primary-foreground">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            {/* Main content */}
            <div className="border-r border-border p-5">
              <div className="mb-5 grid grid-cols-3 gap-3">
                {[
                  { label: 'Active Projects', value: '4' },
                  { label: 'Pending Invoices', value: '1' },
                  { label: 'Messages', value: '3' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-3.5">
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-xl font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Project Timeline */}
              <div className="glass rounded-xl p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-medium text-foreground">Project Timeline</p>
                  <span className="flex items-center gap-1 rounded-full bg-primary/12 px-2 py-0.5 text-[10px] text-primary">
                    <TrendingUp className="h-2.5 w-2.5" aria-hidden="true" /> On track
                  </span>
                </div>
                <ol className="flex flex-col gap-3">
                  {timeline.map((t, i) => (
                    <li key={t.phase} className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] ${
                          t.pct === 100
                            ? 'bg-primary text-primary-foreground'
                            : t.pct > 0
                              ? 'border border-primary/60 text-primary'
                              : 'border border-border text-muted-foreground'
                        }`}
                      >
                        {t.pct === 100 ? <Check className="h-3 w-3" aria-hidden="true" /> : i + 1}
                      </span>
                      <span
                        className={`w-24 text-xs ${
                          t.pct > 0 ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                      >
                        {t.phase}
                      </span>
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                      <span className="w-9 text-right font-mono text-[10px] text-muted-foreground">
                        {t.pct}%
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right column */}
            <div className="hidden p-5 lg:block">
              <p className="mb-3 text-xs font-medium text-foreground">Recent Activity</p>
              <ul className="flex flex-col gap-3">
                {activity.map((a, i) => (
                  <motion.li
                    key={a.text}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="glass rounded-xl px-3.5 py-3"
                  >
                    <p className="text-xs leading-relaxed text-foreground">{a.text}</p>
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground">{a.time}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
