const STATS = [
  { value: '3+', label: 'Años de\nexperiencia', accent: true },
  { value: '2', label: 'Empresas\ntrabajadas', accent: false },
  { value: 'C2', label: 'Inglés\navanzado', accent: true },
  { value: '10+', label: 'Tecnologías\ndomesticadas', accent: false },
];

export default function StatsCard() {
  return (
    <div
      className="card card-alt reveal delay-2"
      style={{
        gridColumn: 'span 4',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1px',
        background: 'var(--border)',
        overflow: 'hidden',
      }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          style={{
            background: 'var(--bg-card-alt)',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '32px',
            fontWeight: 800,
            color: s.accent ? 'var(--accent)' : 'var(--text-primary)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
          }}>
            {s.value}
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            color: 'var(--text-muted)',
            whiteSpace: 'pre-line',
            lineHeight: 1.4,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
