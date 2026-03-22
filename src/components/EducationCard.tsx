export default function EducationCard() {
  return (
    <div
      className="card card-alt reveal delay-4"
      style={{
        gridColumn: 'span 4',
        padding: '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <span className="label">Formación</span>

      <div style={{
        padding: '20px',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        background: 'rgba(0,255,135,0.02)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        <div style={{
          width: '36px', height: '36px',
          borderRadius: '8px',
          background: 'rgba(0,255,135,0.08)',
          border: '1px solid rgba(0,255,135,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>

        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '13px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '4px',
          }}>
            Analista Programador
          </h3>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            color: 'var(--accent-dim)',
            marginBottom: '6px',
          }}>
            CFT INACAP
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
          }}>
            La Serena, Chile
          </p>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '10px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}>
            Mar 2020 — Jul 2023
          </span>
        </div>
      </div>

      {/* Languages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span className="label">Idiomas</span>
        {[
          { lang: 'Español', level: 'Nativo', pct: 100 },
          { lang: 'Inglés', level: 'C2 — Avanzado', pct: 92 },
        ].map(({ lang, level, pct }) => (
          <div key={lang}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--text-primary)' }}>{lang}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: 'var(--accent)' }}>{level}</span>
            </div>
            <div style={{ height: '3px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${pct}%`,
                background: 'linear-gradient(90deg, var(--accent-dim), var(--accent))',
                borderRadius: '2px',
                transition: 'width 1.2s cubic-bezier(0.22,1,0.36,1)',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
