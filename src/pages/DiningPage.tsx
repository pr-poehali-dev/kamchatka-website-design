import { useState } from 'react';
import { venues } from '@/data/venues';

const priceMap: Record<string, string> = {
  '₽': 'до 500 ₽',
  '₽₽': '500–1500 ₽',
  '₽₽₽': '1500–3000 ₽',
  '₽₽₽₽': 'от 3000 ₽',
};

interface DiningPageProps {
  onVenueOpen: (id: string) => void;
}

export default function DiningPage({ onVenueOpen }: DiningPageProps) {
  const [tab, setTab] = useState<'eat' | 'fun'>('eat');

  const filtered = venues.filter((v) => v.category === tab);

  // Центр карты — Петропавловск-Камчатский
  const mapCenter = { lat: 53.0445, lng: 158.6540 };
  const allMapUrl = `https://yandex.ru/map-widget/v1/?ll=${mapCenter.lng}%2C${mapCenter.lat}&z=14&mode=search&text=${encodeURIComponent('Петропавловск-Камчатский рестораны')}`;

  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(197,127,74,0.1)',
              border: '1px solid rgba(197,127,74,0.25)',
              borderRadius: '20px',
              padding: '5px 14px',
              marginBottom: '1rem',
            }}
          >
            <span style={{ color: '#C57F4A', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              🦀 Заведения
            </span>
          </div>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}
          >
            Где поесть и отдохнуть
          </h1>
          <p style={{ color: '#A8A09A', fontSize: '1.1rem', maxWidth: '520px', lineHeight: 1.7 }}>
            Камчатская кухня — это свежайшие морепродукты, дикая рыба и соленый океанский ветер прямо в тарелке.
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'inline-flex',
            background: '#181E28',
            borderRadius: 14,
            padding: '4px',
            marginBottom: '2.5rem',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {[
            { id: 'eat', label: '🍽️ Поесть' },
            { id: 'fun', label: '🎉 Повеселиться' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as 'eat' | 'fun')}
              style={{
                padding: '10px 24px',
                borderRadius: 10,
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                background: tab === t.id ? '#C57F4A' : 'transparent',
                color: tab === t.id ? '#F0EDE8' : '#A8A09A',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {filtered.map((item) => (
            <button
              key={item.id}
              id={`venue-${item.id}`}
              onClick={() => onVenueOpen(item.id)}
              className="card-base"
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Cover image */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img
                  src={item.coverImg}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(17,21,28,0.7) 0%, transparent 60%)',
                  }}
                />
                {/* Rating */}
                <span
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    background: 'rgba(17,21,28,0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#F0EDE8',
                    borderRadius: '20px',
                    padding: '3px 10px',
                    fontSize: '0.78rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                  }}
                >
                  ⭐ {item.rating}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem' }}>
                  <h3
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      color: '#F0EDE8',
                      fontSize: '1.05rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.name}
                  </h3>
                  <div style={{ textAlign: 'right', marginLeft: '8px', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#C57F4A', fontSize: '0.9rem' }}>
                      {item.price}
                    </div>
                    <div style={{ color: '#6B6560', fontSize: '0.68rem' }}>{priceMap[item.price]}</div>
                  </div>
                </div>

                <div style={{ color: '#7DB4B5', fontSize: '0.78rem', fontFamily: 'Manrope, sans-serif', fontWeight: 500, marginBottom: '0.6rem' }}>
                  {item.type}
                </div>

                <p style={{ color: '#A8A09A', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '0.875rem', flex: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '0.875rem' }}>
                  {item.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px',
                        padding: '2px 9px',
                        fontSize: '0.72rem',
                        color: '#A8A09A',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#6B6560', fontSize: '0.75rem' }}>⏰ {item.hours}</span>
                  <span
                    style={{
                      color: '#C57F4A',
                      fontSize: '0.82rem',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    Подробнее →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Map of all venues */}
        <div
          style={{
            background: '#181E28',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.07)',
            overflow: 'hidden',
            marginBottom: '2rem',
          }}
        >
          <div style={{ padding: '1.5rem 1.75rem 1rem' }}>
            <h2
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                color: '#F0EDE8',
                fontSize: '1.125rem',
                marginBottom: '0.25rem',
              }}
            >
              🗺️ Все заведения на карте
            </h2>
            <p style={{ color: '#A8A09A', fontSize: '0.85rem' }}>
              Петропавловск-Камчатский — нажмите на карточку заведения, чтобы открыть точный адрес
            </p>
          </div>
          <iframe
            src={allMapUrl}
            width="100%"
            height="380"
            frameBorder="0"
            title="Карта заведений Камчатки"
            style={{ display: 'block' }}
            allowFullScreen
          />
        </div>

        {/* Price Legend */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            background: '#181E28',
            borderRadius: 14,
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.25rem',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#6B6560', fontSize: '0.8rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>Ценовой индекс:</span>
          {Object.entries(priceMap).map(([key, val]) => (
            <span key={key} style={{ color: '#A8A09A', fontSize: '0.8rem' }}>
              <span style={{ color: '#C57F4A', fontWeight: 700 }}>{key}</span> — {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
