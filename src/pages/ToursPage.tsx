const VOLCANO_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/a1825739-5ef6-494b-ad48-30d383f0b273.jpg';
const GEYSER_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5547b2ac-20ee-4307-8435-a77f7f991d2c.jpg';
const BEAR_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/65c05a42-5aa0-4ea3-9b03-e65c0e78a01d.jpg';

const tours = [
  {
    title: 'Огонь и лёд',
    days: '3 дня',
    price: 'от 35 000 ₽',
    priceNum: 35000,
    img: VOLCANO_IMG,
    badge: 'Популярный',
    badgeColor: '#C57F4A',
    desc: 'Быстрый, но насыщенный маршрут для тех, кто хочет увидеть главное: действующий вулкан и Долину гейзеров.',
    includes: [
      '✈️ Трансфер из аэропорта',
      '🏨 Проживание (2 ночи)',
      '🌋 Вертолётный облёт Мутновского',
      '♨️ Долина гейзеров',
      '🍽️ Завтраки включены',
      '👨‍🦱 Гид-проводник',
    ],
    highlight: 'Долина гейзеров с воздуха',
    season: 'Июнь – Сентябрь',
  },
  {
    title: 'Дикий край',
    days: '5 дней',
    price: 'от 68 000 ₽',
    priceNum: 68000,
    img: GEYSER_IMG,
    badge: 'Хит сезона',
    badgeColor: '#7DB4B5',
    desc: 'Полноценное погружение в дикую природу Камчатки: от тундры до вулканов, от океана до гейзеров.',
    includes: [
      '✈️ Трансфер туда и обратно',
      '🏕️ Базовый лагерь + 2 отеля',
      '🚁 Вертолётный тур (2 ч.)',
      '🌋 Восхождение на Авачинский',
      '🦀 Дегустация морепродуктов',
      '📸 Фотограф в туре',
    ],
    highlight: 'Восхождение на вулкан',
    season: 'Июль – Август',
  },
  {
    title: 'Экспедиция к медведям',
    days: '2 дня',
    price: 'от 22 000 ₽',
    priceNum: 22000,
    img: BEAR_IMG,
    badge: 'Экзотика',
    badgeColor: '#8B9E4A',
    desc: 'Вертолётный тур на Курильское озеро. Наблюдение за медведями в дикой природе с расстояния 10 метров.',
    includes: [
      '🚁 Вертолёт туда и обратно',
      '🐻 Наблюдение за медведями',
      '🎣 Рыбалка на нерестовой реке',
      '🍱 Обед у озера',
      '🛡️ Страховка и безопасность',
      '📹 Видеосъёмка тура',
    ],
    highlight: 'Медведи на расстоянии 10 м',
    season: 'Август – Сентябрь',
  },
];

interface ToursPageProps {
  onNavigate: (page: string) => void;
}

export default function ToursPage({ onNavigate }: ToursPageProps) {
  return (
    <div style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
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
              🧭 3 пакета
            </span>
          </div>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}
          >
            Туры на Камчатку
          </h1>
          <p style={{ color: '#A8A09A', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Готовые экспедиции с опытными гидами. Всё включено — трансфер, жильё, вертолёты.
          </p>
        </div>

        {/* Tours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="card-base"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                  src={tour.img}
                  alt={tour.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="gradient-overlay" style={{ position: 'absolute', inset: 0 }} />

                {/* Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: `${tour.badgeColor}22`,
                    border: `1px solid ${tour.badgeColor}66`,
                    color: tour.badgeColor,
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '0.72rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {tour.badge}
                </span>

                {/* Days badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(17,21,28,0.8)',
                    color: '#F0EDE8',
                    borderRadius: '20px',
                    padding: '4px 12px',
                    fontSize: '0.72rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  ⏱ {tour.days}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 800,
                    color: '#F0EDE8',
                    fontSize: '1.25rem',
                    letterSpacing: '-0.03em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {tour.title}
                </h3>

                {/* Highlight */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(125,180,181,0.1)',
                    border: '1px solid rgba(125,180,181,0.2)',
                    borderRadius: '8px',
                    padding: '4px 10px',
                    marginBottom: '0.875rem',
                    width: 'fit-content',
                  }}
                >
                  <span style={{ color: '#7DB4B5', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'Manrope, sans-serif' }}>
                    ⭐ {tour.highlight}
                  </span>
                </div>

                <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {tour.desc}
                </p>

                {/* Includes */}
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  <div
                    style={{
                      color: '#F0EDE8',
                      fontSize: '0.78rem',
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    Включено
                  </div>
                  {tour.includes.map((inc, j) => (
                    <div
                      key={j}
                      style={{
                        color: '#A8A09A',
                        fontSize: '0.82rem',
                        paddingBottom: '0.3rem',
                        paddingTop: '0.3rem',
                        borderBottom: j < tour.includes.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      {inc}
                    </div>
                  ))}
                </div>

                {/* Season */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '1.25rem',
                  }}
                >
                  <span style={{ color: '#6B6560', fontSize: '0.78rem' }}>🗓 Сезон: </span>
                  <span style={{ color: '#7DB4B5', fontSize: '0.78rem', fontWeight: 600, fontFamily: 'Manrope, sans-serif' }}>
                    {tour.season}
                  </span>
                </div>

                {/* Price + CTA */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 800,
                        color: '#C57F4A',
                        fontSize: '1.4rem',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {tour.price}
                    </div>
                    <div style={{ color: '#6B6560', fontSize: '0.72rem' }}>с человека</div>
                  </div>
                  <button
                    className="btn-terra"
                    style={{ padding: '10px 20px', fontSize: '0.875rem' }}
                  >
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: 'rgba(197,127,74,0.06)',
            border: '1px solid rgba(197,127,74,0.15)',
            borderRadius: 16,
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>💡</span>
          <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.6 }}>
            <strong style={{ color: '#F0EDE8' }}>Индивидуальный тур:</strong> Все пакеты можно адаптировать под вашу группу, даты и бюджет. Напишите нам — составим маршрут мечты.
          </p>
        </div>
      </div>
    </div>
  );
}
