import { useState } from 'react';

const FOCUS_AREAS = [
  { icon: '⬡', title: 'Arquitecturas Backend', desc: 'Diseño de APIs REST robustas y sistemas de microservicios escalables con Node.js, Spring Boot y AdonisJS.' },
  { icon: '⬡', title: 'Debugging Profundo', desc: 'Rastreo y resolución de errores en sistemas complejos con baja documentación. Investigación sistemática y criterio técnico.' },
  { icon: '⬡', title: 'Full Stack Integrado', desc: 'Desarrollo end-to-end: desde la base de datos hasta la interfaz. React, Next.js con backends robustos.' },
];

export default function FocusCard() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="card reveal delay-6"
      style={{
        gridColumn: 'span 8',
        padding: '32px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
      }}
    >
      <span className="label">Áreas de Enfoque</span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {FOCUS_AREAS.map((area, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: active === i ? 'rgba(0,255,135,0.05)' : 'transparent',
              border: `1px solid ${active === i ? 'rgba(0,255,135,0.25)' : 'var(--border)'}`,
              borderRadius: '10px',
              padding: '16px 20px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              width: '100%',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              color: active === i ? 'var(--accent)' : 'var(--text-muted)',
              lineHeight: 1.3,
              flexShrink: 0,
              transition: 'color 0.2s',
            }}>
              {active === i ? '▶' : '▷'}
            </span>
            <div>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: 700,
                color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                marginBottom: '4px',
                transition: 'color 0.2s',
              }}>
                {area.title}
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13.5px',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                fontStyle: 'italic',
                opacity: active === i ? 1 : 0,
                maxHeight: active === i ? '100px' : '0',
                overflow: 'hidden',
                transition: 'opacity 0.3s ease, max-height 0.3s ease',
              }}>
                {area.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
