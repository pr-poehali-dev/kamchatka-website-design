import { useState } from 'react';
import { venues, type Venue } from '@/data/venues';
import Icon from '@/components/ui/icon';

const priceMap: Record<string, string> = {
  '₽': 'до 500 ₽',
  '₽₽': '500–1500 ₽',
  '₽₽₽': '1500–3000 ₽',
  '₽₽₽₽': 'от 3000 ₽',
};

interface VenuePageProps {
  venueId: string;
  onBack: () => void;
}

function YandexMap({ venue }: { venue: Venue }) {
  const mapUrl = `https://yandex.ru/maps/?ll=${venue.lng},${venue.lat}&z=16&pt=${venue.lng},${venue.lat},pm2rdm&text=${encodeURIComponent(venue.address)}`;
  const embedUrl = `https://yandex.ru/map-widget/v1/?ll=${venue.lng}%2C${venue.lat}&z=16&pt=${venue.lng}%2C${venue.lat}&mode=whatshere&source=constructorLink`;

  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="340"
        frameBorder="0"
        title={`Карта — ${venue.name}`}
        style={{ display: 'block' }}
        allowFullScreen
      />
      <div
        style={{
          background: '#181E28',
          padding: '1rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <div>
          <div style={{ color: '#F0EDE8', fontSize: '0.875rem', fontWeight: 500 }}>
            📍 {venue.address}
          </div>
        </div>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glacier"
          style={{ padding: '8px 16px', fontSize: '0.8rem', textDecoration: 'none', display: 'inline-block' }}
        >
          Открыть в Яндекс.Картах
        </a>
      </div>
    </div>
  );
}

export default function VenuePage({ venueId, onBack }: VenuePageProps) {
  const venue = venues.find((v) => v.id === venueId);
  const [activePhoto, setActivePhoto] = useState(0);

  if (!venue) {
    return (
      <div style={{ paddingTop: '8rem', textAlign: 'center' }}>
        <p style={{ color: '#A8A09A' }}>Заведение не найдено</p>
        <button onClick={onBack} className="btn-terra" style={{ marginTop: '1rem', padding: '10px 20px' }}>
          Назад
        </button>
      </div>
    );
  }

  const otherVenues = venues.filter((v) => v.id !== venueId && v.category === venue.category).slice(0, 3);

  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto px-6" style={{ maxWidth: '1100px' }}>

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#A8A09A',
            fontSize: '0.875rem',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '2rem',
            padding: 0,
            transition: 'color 0.2s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = '#F0EDE8')}
          onMouseOut={(e) => (e.currentTarget.style.color = '#A8A09A')}
        >
          <Icon name="ArrowLeft" size={16} />
          Назад к заведениям
        </button>

        {/* Hero image + gallery */}
        <div style={{ marginBottom: '2.5rem' }}>
          {/* Main photo */}
          <div
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              height: 'clamp(260px, 45vw, 480px)',
              position: 'relative',
              marginBottom: '0.75rem',
            }}
          >
            <img
              src={venue.photos[activePhoto]}
              alt={venue.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.4s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17,21,28,0.7) 0%, transparent 50%)',
              }}
            />
            {/* Rating overlay */}
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(17,21,28,0.75)',
                backdropFilter: 'blur(10px)',
                borderRadius: 12,
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ fontSize: '1rem' }}>⭐</span>
              <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#F0EDE8', fontSize: '1rem' }}>
                {venue.rating}
              </span>
              <span style={{ color: '#6B6560', fontSize: '0.75rem' }}>({venue.reviewCount})</span>
            </div>
          </div>

          {/* Thumbnails */}
          {venue.photos.length > 1 && (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {venue.photos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  style={{
                    width: 72,
                    height: 56,
                    borderRadius: 10,
                    overflow: 'hidden',
                    border: `2px solid ${activePhoto === i ? '#C57F4A' : 'transparent'}`,
                    cursor: 'pointer',
                    padding: 0,
                    flexShrink: 0,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <img
                    src={photo}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* Left: main info */}
          <div>
            {/* Title block */}
            <div
              style={{
                background: '#181E28',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h1
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 800,
                      color: '#F0EDE8',
                      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                      letterSpacing: '-0.04em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {venue.name}
                  </h1>
                  <span style={{ color: '#7DB4B5', fontFamily: 'Manrope, sans-serif', fontWeight: 500, fontSize: '0.95rem' }}>
                    {venue.type}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 800,
                      color: '#C57F4A',
                      fontSize: '1.5rem',
                    }}
                  >
                    {venue.price}
                  </div>
                  <div style={{ color: '#6B6560', fontSize: '0.78rem' }}>{priceMap[venue.price]}</div>
                </div>
              </div>

              <p style={{ color: '#A8A09A', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {venue.fullDesc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {venue.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(197,127,74,0.08)',
                      border: '1px solid rgba(197,127,74,0.2)',
                      borderRadius: '20px',
                      padding: '5px 14px',
                      fontSize: '0.82rem',
                      color: '#C57F4A',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              {[
                { icon: '⏰', label: 'Часы работы', value: venue.hours },
                { icon: '📞', label: 'Телефон', value: venue.phone },
                { icon: '📍', label: 'Адрес', value: venue.address },
              ].map((inf, i) => (
                <div
                  key={i}
                  style={{
                    background: '#181E28',
                    borderRadius: 14,
                    border: '1px solid rgba(255,255,255,0.07)',
                    padding: '1.1rem 1.25rem',
                  }}
                >
                  <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>{inf.icon}</div>
                  <div style={{ color: '#6B6560', fontSize: '0.72rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>
                    {inf.label}
                  </div>
                  <div style={{ color: '#F0EDE8', fontSize: '0.85rem', fontWeight: 500 }}>{inf.value}</div>
                </div>
              ))}
            </div>

            {/* Menu */}
            {venue.menu.length > 0 && (
              <div
                style={{
                  background: '#181E28',
                  borderRadius: 20,
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '1.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    color: '#F0EDE8',
                    fontSize: '1.125rem',
                    marginBottom: '1.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  🍽️ Меню (выдержки)
                </h2>
                {venue.menu.map((section, si) => (
                  <div key={si} style={{ marginBottom: si < venue.menu.length - 1 ? '1.25rem' : 0 }}>
                    <div
                      style={{
                        color: '#7DB4B5',
                        fontSize: '0.75rem',
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {section.section}
                    </div>
                    {section.items.map((item, ii) => (
                      <div
                        key={ii}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          padding: '0.6rem 0',
                          borderBottom: ii < section.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                          gap: '1rem',
                        }}
                      >
                        <div>
                          <span style={{ color: '#F0EDE8', fontSize: '0.875rem', fontWeight: 500 }}>{item.name}</span>
                          {item.desc && (
                            <span style={{ color: '#6B6560', fontSize: '0.78rem', display: 'block', marginTop: '1px' }}>
                              {item.desc}
                            </span>
                          )}
                        </div>
                        <span
                          style={{
                            color: '#C57F4A',
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Map */}
            <div
              style={{
                background: '#181E28',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '1.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  color: '#F0EDE8',
                  fontSize: '1.125rem',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                🗺️ На карте
              </h2>
              <YandexMap venue={venue} />
            </div>

            {/* CTA */}
            <div
              style={{
                background: 'linear-gradient(135deg, #1E1A14 0%, #1A1E26 100%)',
                borderRadius: 20,
                border: '1px solid rgba(197,127,74,0.2)',
                padding: '1.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#F0EDE8', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  Хотите попасть сюда?
                </div>
                <div style={{ color: '#A8A09A', fontSize: '0.85rem' }}>
                  Включите это место в тур или забронируйте столик
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${venue.phone.replace(/\s/g, '')}`}
                  className="btn-glacier"
                  style={{ padding: '10px 18px', fontSize: '0.875rem', textDecoration: 'none', display: 'inline-block' }}
                >
                  📞 Позвонить
                </a>
                <button
                  className="btn-terra"
                  style={{ padding: '10px 18px', fontSize: '0.875rem' }}
                >
                  Забронировать стол
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other venues */}
        {otherVenues.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                color: '#F0EDE8',
                fontSize: '1.25rem',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Также рекомендуем
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {otherVenues.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onBack();
                    setTimeout(() => {
                      const el = document.getElementById(`venue-${v.id}`);
                      if (el) el.click();
                    }, 100);
                  }}
                  className="card-base"
                  style={{
                    display: 'flex',
                    gap: '0.875rem',
                    alignItems: 'center',
                    padding: '1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                  }}
                >
                  <img
                    src={v.coverImg}
                    alt={v.name}
                    style={{ width: 60, height: 60, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#F0EDE8', fontSize: '0.95rem' }}>{v.name}</div>
                    <div style={{ color: '#7DB4B5', fontSize: '0.78rem', marginBottom: '2px' }}>{v.type}</div>
                    <div style={{ color: '#C57F4A', fontWeight: 700, fontSize: '0.85rem' }}>{v.price}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
