import { useEffect, useState } from 'react';

export default function HeroCard() {
  const [phase, setPhase] = useState<'typing' | 'done'>('typing');
  const name = 'Carlos Rodríguez';
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(name.slice(0, i + 1));
      i++;
      if (i >= name.length) {
        clearInterval(id);
        setPhase('done');
      }
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="card card-accent-line reveal delay-0"
      style={{
        gridColumn: 'span 7',
        padding: '40px 44px 36px',
        background: 'linear-gradient(135deg, #111113 0%, #0f1410 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '260px',
      }}
    >
      {/* Corner grid decoration */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '260px', height: '260px',
        backgroundImage: `
          linear-gradient(rgba(0,255,135,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,135,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 65%)',
        WebkitMaskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Status badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
        <span className="dot-live" />
        <span className="label">Disponible para proyectos</span>
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 3.8vw, 54px)',
        fontWeight: 800,
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        lineHeight: 1.05,
        marginBottom: '6px',
      }}>
        {displayed}
        {phase === 'typing' && <span className="cursor-blink" />}
      </h1>

      {/* Role */}
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(13px, 1.4vw, 16px)',
        fontWeight: 400,
        color: 'var(--accent)',
        letterSpacing: '0.08em',
        marginBottom: '22px',
      }}>
        &gt; Desarrollador Full Stack <span style={{ color: 'var(--text-muted)' }}>·</span> Backend-Oriented
      </p>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(14px, 1.2vw, 16px)',
        fontWeight: 300,
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        maxWidth: '520px',
        fontStyle: 'italic',
      }}>
        Especializado en JavaScript, TypeScript y Java. Apasionado por el diagnóstico
        de sistemas complejos y la mejora continua de arquitecturas productivas.
      </p>

      {/* Bottom location */}
      <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span className="label">Coquimbo, Chile</span>
      </div>
    </div>
  );
}
