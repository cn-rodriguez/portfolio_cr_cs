export default function AboutCard() {
  return (
    <div
      className="card card-alt reveal delay-1"
      style={{
        gridColumn: 'span 5',
        padding: '32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        minHeight: '260px',
      }}
    >
      <span className="label">Perfil</span>

      <div style={{
        width: '52px', height: '52px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1a2a1a, #0f1a0f)',
        border: '1px solid rgba(0,255,135,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '22px',
      }}>
        {'</>'}
      </div>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: '15px',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        flex: 1,
      }}>
        Me adapto con facilidad a distintos entornos tecnológicos. Tengo especial
        interés en el rastreo de errores complejos y la implementación de flujos
        de trabajo eficientes. Disfruto los desafíos que exigen investigación y criterio.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {['Microservicios', 'Debugging avanzado', 'Documentación técnica', 'QA'].map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}
