import React from 'react'

const EventInfo = ({ onOpenModal }) => {
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
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '1rem',
              }}
            >
              SAVE THE DATE
            </p>

            <p className="info-hero-date">14.06.2025</p>
            <p className="info-hero-month">Junho — a noite mais especial</p>
          </div>

          <div className="info-card pink">
            <div className="info-icon">🕐</div>
            <p className="info-label">Horário</p>
            <p className="info-value">20h00</p>
            <p className="info-sub">Pontualidade é linda ✨</p>
          </div>

          <div className="info-card yellow">
            <div className="info-icon">🏛️</div>
            <p className="info-label">Local</p>
            <p className="info-value">Espaço Villa Jardim</p>
            <p className="info-sub">Rua das Palmeiras, 420 — São Paulo</p>
          </div>

          <div className="info-card green">
            <div className="info-icon">👗</div>
            <p className="info-label">Dress Code</p>
            <p className="info-value">Tropical Neon</p>
            <p className="info-sub">Cores vibrantes, brilho e alegria!</p>
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

      <section className="rsvp-section">
        <div className="rsvp-inner">
          <p className="section-label">💌 confirmação</p>
          <h2 className="rsvp-title">Você vem?</h2>

          <p className="rsvp-body">
            A Maria Clara ficaria feliz demais com sua presença.
            <br />
            Confirme até{' '}
            <strong style={{ color: 'var(--neon-yellow)' }}>
              07 de Junho
            </strong>{' '}
            para garantir seu lugar nessa noite inesquecível.
          </p>

          <button className="rsvp-btn" onClick={onOpenModal} id="rsvpBtn">
            CONFIRMAR PRESENÇA
          </button>

          <p
            style={{
              marginTop: '2rem',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
            }}
          >
            Dúvidas? Entre em contato via WhatsApp
          </p>
        </div>

        <svg
          width="100%"
          height="80"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
        >
          <path
            d="M0 40 Q 360 0 720 40 Q 1080 80 1440 40 L1440 80 L0 80Z"
            fill="#0a1a0f"
            opacity="0.4"
          />
        </svg>
      </section>
    </div>
  )
}

export default EventInfo