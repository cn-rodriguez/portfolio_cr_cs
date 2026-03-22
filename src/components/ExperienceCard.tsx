const EXPERIENCES = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Usercode SpA',
    period: 'Ago 2024 — Actualidad',
    location: 'Remoto · Santiago, Chile',
    active: true,
    responsibilities: [
      'Desarrollo de software a medida para distintos clientes',
      'Mantenimiento evolutivo de sistemas productivos complejos',
      'Investigación y documentación de funcionalidades no registradas',
      'Rastreo y resolución de errores en arquitecturas de microservicios',
      'Pruebas QA antes del despliegue a producción',
    ],
    tech: ['React', 'Next.js 15', 'Angular 8', 'Node.js', 'AdonisJS 6', 'Spring Boot 2.6', 'Laravel', 'TypeScript', 'Java 8', 'SQL Server', 'PostgreSQL'],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Corp. Educacional Aventura',
    period: 'Dic 2022 — Feb 2023',
    location: 'Práctica · Coquimbo, Chile',
    active: false,
    responsibilities: [
      'Diseño y desarrollo de plataforma de agendamiento de citas',
      'Definición de arquitectura frontend y backend',
      'Diseño de interfaz de usuario moderna e intuitiva',
      'Modelado e implementación de base de datos',
      'Configuración y despliegue en producción',
    ],
    tech: ['React 18', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
  },
];

export default function ExperienceCard() {
  return (
    <div
      className="card reveal delay-3"
      style={{ gridColumn: 'span 8', padding: '32px 36px 36px' }}
    >
      <span className="label" style={{ display: 'block', marginBottom: '28px' }}>Experiencia</span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '20px' }}>
            {/* Timeline line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
              <div style={{
                width: '10px', height: '10px',
                borderRadius: '50%',
                background: exp.active ? 'var(--accent)' : 'var(--text-muted)',
                boxShadow: exp.active ? '0 0 10px var(--accent-glow)' : 'none',
                flexShrink: 0,
              }} />
              {idx < EXPERIENCES.length - 1 && (
                <div style={{
                  width: '1px',
                  flex: 1,
                  background: 'var(--border)',
                  marginTop: '6px',
                  minHeight: '32px',
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingBottom: idx < EXPERIENCES.length - 1 ? '0' : '0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {exp.role}
                    {exp.active && (
                      <span style={{
                        marginLeft: '8px',
                        fontFamily: 'var(--font-display)',
                        fontSize: '9px',
                        padding: '2px 7px',
                        background: 'rgba(0,255,135,0.1)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(0,255,135,0.25)',
                        borderRadius: '3px',
                        verticalAlign: 'middle',
                        letterSpacing: '0.1em',
                      }}>ACTUAL</span>
                    )}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    color: 'var(--accent-dim)',
                    marginTop: '2px',
                  }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--text-muted)' }}>{exp.period}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: 'var(--text-muted)', marginTop: '1px' }}>{exp.location}</p>
                </div>
              </div>

              <ul style={{ margin: '12px 0 14px', paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {exp.responsibilities.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '11px', marginTop: '3px', flexShrink: 0 }}>›</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{r}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {exp.tech.map(t => (
                  <span key={t} className="tag" style={{ fontSize: '10px', padding: '2px 8px' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
