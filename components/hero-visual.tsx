'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Bell,
  CreditCard,
  FileText,
  FolderKanban,
  MessageSquare,
  TrendingUp,
} from 'lucide-react'

const bars = [42, 68, 55, 80, 62, 92, 74]

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-hidden="true">
      {/* Laptop / dashboard */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="glass-strong relative z-10 overflow-hidden rounded-2xl shadow-2xl shadow-primary/10"
      >
        {/* Titlebar */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            overline.digital / dashboard
          </span>
        </div>

        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr]">
          {/* Sidebar */}
          <div className="border-r border-border p-3">
            {[
              { icon: BarChart3, label: 'Overview', active: true },
              { icon: FolderKanban, label: 'Projects' },
              { icon: MessageSquare, label: 'Messages' },
              { icon: CreditCard, label: 'Payments' },
              { icon: FileText, label: 'Invoices' },
            ].map((item) => (
              <div
                key={item.label}
                className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-1.5 text-[10px] ${
                  item.active
                    ? 'bg-primary/15 text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-3 w-3 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-foreground">Analytics</p>
              <span className="flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[9px] text-primary">
                <TrendingUp className="h-2.5 w-2.5" /> +24%
              </span>
            </div>
            {/* Chart */}
            <div className="mb-4 flex h-24 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                  className={`flex-1 rounded-t-sm ${i === 5 ? 'bg-primary' : 'bg-primary/25'}`}
                />
              ))}
            </div>
            {/* Rows */}
            {[
              { name: 'E-commerce Platform', pct: 82 },
              { name: 'Mobile Banking App', pct: 56 },
              { name: 'Corporate Website', pct: 94 },
            ].map((p) => (
              <div key={p.name} className="mb-2.5">
                <div className="mb-1 flex items-center justify-between text-[9px]">
                  <span className="text-muted-foreground">{p.name}</span>
                  <span className="font-mono text-primary">{p.pct}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${p.pct}%` }}
                    transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating card: notification */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 0.5 }}
        className="glass-strong absolute -right-3 -top-8 z-20 flex items-center gap-3 rounded-xl px-4 py-3 shadow-xl shadow-primary/10 sm:-right-8"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
          <Bell className="h-4 w-4 text-primary" />
        </span>
        <div>
          <p className="text-xs font-medium text-foreground">New message</p>
          <p className="text-[10px] text-muted-foreground">Project approved ✓</p>
        </div>
      </motion.div>

      {/* Floating card: deliverable status */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 1 }}
        className="glass-strong absolute -bottom-8 -left-3 z-20 rounded-xl px-4 py-3 shadow-xl shadow-primary/10 sm:-left-8"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Deliverable #0247
        </p>
        <p className="mt-1 text-sm font-semibold text-foreground">Client review approved</p>
        <p className="text-[10px] text-primary">Ready · Website Development</p>
      </motion.div>

      {/* Floating phone mockup */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [3, 5, 3] }}
        transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 0.8 }}
        className="glass-strong absolute -bottom-12 right-2 z-20 hidden w-28 rounded-2xl p-2 shadow-xl shadow-primary/10 sm:block"
      >
        <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-muted-foreground/30" />
        <div className="rounded-xl bg-background/60 p-2.5">
          <div className="mb-2 h-1.5 w-12 rounded-full bg-primary/50" />
          <div className="mb-1 h-1 w-full rounded-full bg-secondary" />
          <div className="mb-1 h-1 w-3/4 rounded-full bg-secondary" />
          <div className="mb-2 h-1 w-5/6 rounded-full bg-secondary" />
          <div className="flex gap-1">
            <div className="h-6 flex-1 rounded-md bg-primary/20" />
            <div className="h-6 flex-1 rounded-md bg-secondary" />
          </div>
        </div>
      </motion.div>

      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-primary/10 blur-[80px]" />
    </div>
  )
}
