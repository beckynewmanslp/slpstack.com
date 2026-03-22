'use client'

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', month: 'long', day: 'numeric'
})

const sessions = [
  {
    id: '1',
    time: '8:30 – 9:00',
    students: ['Ava M.', 'Jayden R.', 'Luis T.'],
    goalArea: 'Articulation /r/',
    plan: 'Articulation Bingo',
    status: 'done',
  },
  {
    id: '2',
    time: '9:00 – 9:30',
    students: ['Mia S.', 'Caleb T.'],
    goalArea: 'Language — Syntax',
    plan: null,
    status: 'active',
  },
  {
    id: '3',
    time: '10:00 – 10:30',
    students: ['Jordan K.'],
    goalArea: 'Fluency',
    plan: null,
    status: 'upcoming',
  },
  {
    id: '4',
    time: '11:00 – 11:30',
    students: ['Emma R.', 'Noah P.', 'Sofia L.'],
    goalArea: 'Language — Pragmatics',
    plan: null,
    status: 'upcoming',
  },
]

const statusStyles: Record<string, { dot: string; label: string }> = {
  done:     { dot: '#2FBF71', label: 'Done' },
  active:   { dot: '#2E5FA3', label: 'In Progress' },
  upcoming: { dot: '#CBD5E1', label: 'Upcoming' },
  absent:   { dot: '#E5533D', label: 'Absent' },
}

export default function TodayPage() {
  return (
    <div className="p-6 pb-24 md:pb-6 max-w-2xl mx-auto">

      <div className="mb-6">
        <h1 className="text-2xl font-semibold" style={{ color: '#1B2E4B' }}>
          Today
        </h1>
        <p className="text-sm mt-1" style={{ color: '#5B6B7F' }}>{today}</p>
      </div>

      <div
        className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl border"
        style={{ background: '#fff', borderColor: '#E1E7EF',
          boxShadow: '0 2px 6px rgba(27,46,75,0.06)' }}
      >
        <div className="text-center">
          <div className="text-2xl font-semibold" style={{ color: '#1B2E4B' }}>
            {sessions.length}
          </div>
          <div className="text-xs mt-0.5" style={{ color: '#5B6B7F' }}>Sessions</div>
        </div>
        <div className="text-center border-x" style={{ borderColor: '#E1E7EF' }}>
          <div className="text-2xl font-semibold" style={{ color: '#1B2E4B' }}>
            {sessions.reduce((n, s) => n + s.students.length, 0)}
          </div>
          <div className="text-xs mt-0.5" style={{ color: '#5B6B7F' }}>Students</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold" style={{ color: '#2FBF71' }}>
            {sessions.filter(s => s.status === 'done').length}
          </div>
          <div className="text-xs mt-0.5" style={{ color: '#5B6B7F' }}>Complete</div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {sessions.map((session) => {
          const s = statusStyles[session.status]
          return (
            <div
              key={session.id}
              className="p-4 rounded-xl border cursor-pointer"
              style={{
                background: '#fff',
                borderColor: session.status === 'active' ? '#2E5FA3' : '#E1E7EF',
                boxShadow: '0 2px 6px rgba(27,46,75,0.06)',
                borderWidth: session.status === 'active' ? '2px' : '1px',
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium mb-1" style={{ color: '#5B6B7F' }}>
                    {session.time}
                  </div>
                  <div className="text-base font-semibold truncate" style={{ color: '#1B2E4B' }}>
                    {session.students.join(', ')}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: '#5B6B7F' }}>
                    {session.goalArea}
                  </div>
                  {session.plan ? (
                    <div
                      className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: '#E8F0FB', color: '#2E5FA3' }}
                    >
                      📋 {session.plan}
                    </div>
                  ) : (
                    <button
                      className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-medium border border-dashed"
                      style={{ borderColor: '#E1E7EF', color: '#5B6B7F' }}
                    >
                      + Add plan
                    </button>
                  )}
                </div>
                <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: s.dot }}
                  />
                  <span className="text-xs" style={{ color: '#5B6B7F' }}>{s.label}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
