import React from 'react'

const EventInfo = () => {
  return (
    <div>
      <section className="info-section" id="info">
        <p className="section-label">📍 informações do evento</p>
        <h2 className="section-title">Detalhes da festa</h2>

        <div className="info-grid">

          <div className="info-hero-card">
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '0.4em',
                fontSize: '0.85rem',
                color: 'rgba(38, 38, 38, 0.4)',
                marginBottom: '1rem',
              }}
            >
              SAVE THE DATE
            </p>

            <p className="info-hero-date">20.06.2026</p>
          </div>

          <div className="info-card pink">
            <div className="info-icon">🕐</div>
            <p className="info-label">Horário</p>
            <p className="info-value">20h00</p>
            <p className="info-sub">Pontualidade é show</p>
          </div>

          <div className="info-card yellow">
            <div className="info-icon">🏛️</div>
            <p className="info-label">Local</p>
            <p className="info-value">Espaço Kalamazoo</p>
            <p className="info-sub">Rua Rt 6, 12, Residencial do Trabalhador, entrada da Vila São Vincente (Igrejinha) Anápolis.</p>
          </div>

          <div className="info-card green">
            <div className="info-icon">👗</div>
            <p className="info-label">Traje</p>
            <p className="info-value">Social</p>
            <p className="info-sub">Passeio completo</p>
          </div>

          <div className="info-card orange">
            <div className="info-icon">🌴</div>
            <p className="info-label">Tema</p>
            <p className="info-value">Retro Tropical</p>
            <p className="info-sub">Câmeras vintage, discoteca & selva</p>
          </div>

        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            opacity: 0.3,
          }}
        >
        </div>
      </section>
    </div>
  )
}

export default EventInfo