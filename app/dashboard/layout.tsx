'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Today',     href: '/dashboard',           icon: '📋' },
  { label: 'Caseload',  href: '/dashboard/caseload',  icon: '👥' },
  { label: 'Pipeline',  href: '/dashboard/pipeline',  icon: '🔄' },
  { label: 'Reports',   href: '/dashboard/reports',   icon: '📊' },
  { label: 'Tools',     href: '/dashboard/tools',     icon: '🔧' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#F4F7FB' }}>

      {/* SIDEBAR — desktop */}
      <aside
        className="hidden md:flex flex-col w-56 shrink-0 h-full"
        style={{ background: '#1B2E4B' }}
      >
        <div className="px-5 py-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <span className="text-white font-semibold text-lg tracking-tight">SLPStack</span>
        </div>

        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {navItems.map((item) => {
            const active = pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{
                  background: active ? '#2E5FA3' : 'transparent',
                  color: active ? '#ffffff' : 'rgba(255,255,255,0.6)',
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div
          className="px-4 py-4 border-t text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
        >
          Becky Newman, CCC-SLP
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* BOTTOM NAV — mobile */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 flex border-t z-50"
        style={{ background: '#1B2E4B', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {navItems.map((item) => {
          const active = pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors"
              style={{ color: active ? '#6BB8B8' : 'rgba(255,255,255,0.5)' }}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

    </div>
  )
}
