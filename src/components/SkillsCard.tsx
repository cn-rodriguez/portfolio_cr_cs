const SKILLS = [
  { category: 'Frontend', items: ['React', 'Next.js 15', 'Angular', 'TailwindCSS', 'TypeScript', 'JavaScript'] },
  { category: 'Backend',  items: ['Node.js', 'Express', 'AdonisJS 6', 'Spring Boot', 'Laravel', 'PHP', 'Java 8'] },
  { category: 'Bases de datos', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'Sequelize', 'LucidORM'] },
  { category: 'Herramientas', items: ['Git', 'Microservicios', 'REST APIs', 'Debugging'] },
];

// Flatten for ticker
const ALL = SKILLS.flatMap(s => s.items.map(item => ({ item, cat: s.category })));

export default function SkillsCard() {
  // Double the array for seamless loop
  const doubled = [...ALL, ...ALL];

  return (
    <div
      className="card reveal delay-2"
      style={{ gridColumn: 'span 12', padding: '28px 0 24px' }}
    >
      <div style={{ padding: '0 32px 20px' }}>
        <span className="label">Stack Tecnológico</span>
      </div>

      {/* Ticker */}
      <div className="ticker-wrapper" style={{ paddingBottom: '4px' }}>
        <div className="ticker-inner">
          {doubled.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0',
                padding: '0 6px',
              }}
            >
              <span className="tag" style={{ fontSize: '12px', padding: '4px 12px' }}>
                {s.item}
              </span>
              <span style={{
                color: 'var(--text-muted)',
                fontSize: '10px',
                padding: '0 10px',
                fontFamily: 'var(--font-display)',
              }}>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category breakdown */}
      <div className="skills-cats" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'var(--border)',
        marginTop: '20px',
      }}>
        {SKILLS.map(s => (
          <div key={s.category} style={{
            background: 'var(--bg-card)',
            padding: '18px 22px',
          }}>
            <p className="label" style={{ marginBottom: '12px' }}>{s.category}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
              {s.items.map(item => (
                <span key={item} style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  padding: '2px 8px',
                  border: '1px solid var(--border)',
                  borderRadius: '3px',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.color = 'var(--accent)';
                    (e.target as HTMLElement).style.borderColor = 'rgba(0,255,135,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.target as HTMLElement).style.borderColor = 'var(--border)';
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
