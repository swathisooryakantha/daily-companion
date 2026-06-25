import type { ReactNode } from 'react'
import type { Routine, RoutineCompletion } from '../lib/types'

export function Card({ children, className = '', style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm backdrop-blur-sm md:p-6 ${className}`} style={style}>
      {children}
    </div>
  )
}

export function VoiceLine({ children, emoji, className = '' }: { children: ReactNode; emoji?: string; className?: string }) {
  return (
    <p className={`font-display text-lg leading-snug text-[var(--paper)] ${className}`}>
      {emoji && <span className="mr-2">{emoji}</span>}
      {children}
    </p>
  )
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false,
}: {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}) {
  const styles = {
    primary: 'bg-[var(--accent)] text-[#1e1b38] hover:brightness-95',
    secondary: 'bg-white/10 text-[var(--paper)] hover:bg-white/15',
    ghost: 'bg-transparent text-[var(--paper)]/70 hover:text-[var(--paper)]',
  }[variant]
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full px-4 py-2.5 text-sm font-medium transition disabled:opacity-40 ${styles} ${className}`}
    >
      {children}
    </button>
  )
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-[var(--paper)] outline-[var(--accent)] placeholder:text-white/30 ${props.className ?? ''}`}
    />
  )
}

export function ProgressBar({ value, markers = [] }: { value: number; markers?: number[] }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${pct}%` }} />
      {markers.map((m) => (
        <div key={m} className="absolute top-0 h-2 w-px bg-[var(--ink)]/60" style={{ left: `${m}%` }} />
      ))}
    </div>
  )
}

export function EmptyState({ text }: { text: string }) {
  return <p className="py-8 text-center text-sm text-white/40">{text}</p>
}

export function PersonalityBadge({ name, emoji }: { name: string; emoji: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-dim)] px-3 py-1 text-xs font-medium text-[var(--paper)]">
      <span>{emoji}</span>
      {name}
    </span>
  )
}

export function RoutineChecklist({
  routines,
  completions,
  onToggle,
}: {
  routines: Routine[]
  completions: RoutineCompletion[]
  onToggle: (routineId: string, existing: RoutineCompletion | undefined) => void
}) {
  if (routines.length === 0) return null
  return (
    <div className="space-y-2">
      {routines.map((r) => {
        const existing = completions.find((c) => c.routine_id === r.id)
        return (
          <label key={r.id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm">
            <input type="checkbox" checked={existing?.done ?? false} onChange={() => onToggle(r.id, existing)} className="size-4 accent-[var(--accent)]" />
            <span className={existing?.done ? 'text-white/40 line-through' : 'text-[var(--paper)]'}>{r.name}</span>
          </label>
        )
      })}
    </div>
  )
}
