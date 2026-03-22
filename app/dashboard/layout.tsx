'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Today',    href: '/dashboard',          icon: '📋' },
  { label: 'Caseload', href: '/dashboard/caseload', icon: '👥' },
  { label: 'Pipeline', href: '/dashboard/pipeline', icon: '🔄' },
  { label: 'Reports',  href: '/dashboard/reports',  icon: '📊' },
  { label: 'Tools',    href: '/dashboard/tools',    icon: '🔧' },
]

function SLPStackLogo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      {/* Icon */}
      <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top hex: navy with SLP */}
        <polygon points="16,0 28,7 28,19 16,26 4,19 4,7" fill="#2E5FA3"/>
        <text x="16" y="17" textAnchor="middle" fontFamily="Inter,sans-serif" fontWeight="700" fontSize="8" fill="white">SLP</text>
        {/* Middle chevron: blue */}
        <polygon points="4,21 16,28 28,21 28,25 16,32 4,25" fill="#4A7FC1"/>
        {/* Bottom chevron: teal */}
        <polygon points="4,27 16,34 28,27 28,31 16,36 4,31" fill="#6BB8B8"/>
      </svg>
      {/* Wordmark — hidden when collapsed */}
      {!collapsed && (
        <div className="flex items-baseline gap-0">
          <span style={{ color: '#ffffff', fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: '18px', letterSpacing: '-0.02em' }}>SLP</span>
          <span style={{ color: '#6BB8B8', fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: '18px', letterSpacing: '-0.02em' }}>Stack</span>
        </div>
      )}
    </div>
  )
}

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
        {/* Logo */}
        <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <SLPStackLogo />
        </div>

        {/* Nav links */}
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

        {/* User area */}
        <div
          className="px-4 py-4 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              style={{ background: '#2E5FA3', color: '#fff' }}
            >
              B
            </div>
            <div className="min-w-0">
              <div className="text-xs font-medium truncate" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Becky Newman
              </div>
              <div className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>
                CCC-SLP
              </div>
            </div>
          </div>
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
