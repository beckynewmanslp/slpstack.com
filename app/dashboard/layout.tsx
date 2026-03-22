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

function SLPStackLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Navy hexagon */}
        <polygon points="19,1 35,10 35,23 19,27.5 3,23 3,10" fill="#1B2E4B"/>
        {/* SLP text */}
        <text x="19" y="19" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontWeight="800" fontSize="10" fill="white" letterSpacing="0.5">SLP</text>
        {/* White gap */}
        <polygon points="3,24 19,28.5 35,24 35,25.5 19,30 3,25.5" fill="white"/>
        {/* Blue layer */}
        <polygon points="3,26 19,30.5 35,26 35,30 19,34.5 3,30" fill="#2E5FA3"/>
        {/* White gap */}
        <polygon points="3,31 19,35.5 35,31 35,32.5 19,37 3,32.5" fill="white"/>
        {/* Teal layer */}
        <polygon points="3,33 19,37.5 35,33 35,37 19,41.5 3,37" fill="#6BB8B8"/>
      </svg>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <span style={{ color: '#ffffff', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }}>SLP</span>
        <span style={{ color: '#6BB8B8', fontFamily: 'Inter,sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.02em' }}>Stack</span>
      </div>
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
      <aside className="hidden md:flex flex-col w-56 shrink-0 h-full" style={{ background: '#1B2E4B' }}>
        <div className="px-4 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <SLPStackLogo />
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {navItems.map((item) => {
            const active = pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                style={{ background: active ? '#2E5FA3' : 'transparent', color: active ? '#ffffff' : 'rgba(255,255,255,0.6)' }}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
        <div className="px-4 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: '#2E5FA3', color: '#fff' }}>B</div>
            <div className="min-w-0">
              <div className="text-xs font-medium truncate" style={{ color: 'rgba(255,255,255,0.8)' }}>Becky Newman</div>
              <div className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>CCC-SLP</div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 flex border-t z-50" style={{ background: '#1B2E4B', borderColor: 'rgba(255,255,255,0.08)' }}>
        {navItems.map((item) => {
          const active = pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href}
              className="flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors"
              style={{ color: active ? '#6BB8B8' : 'rgba(255,255,255,0.5)' }}>
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
