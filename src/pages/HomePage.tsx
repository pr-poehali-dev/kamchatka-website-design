interface HomePageProps {
  onNavigate: (page: string) => void;
}

const VOLCANO_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/a1825739-5ef6-494b-ad48-30d383f0b273.jpg';

const sections = [
  { id: 'places', emoji: '🗻', title: 'Места', desc: '6 природных чудес, которые изменят твой взгляд на мир' },
  { id: 'dining', emoji: '🦀', title: 'Заведения', desc: 'Рестораны с крабами и барные вечера в краю вулканов' },
  { id: 'tours', emoji: '🧭', title: 'Туры', desc: 'Готовые экспедиции от 2 до 5 дней с гидом' },
  { id: 'tickets', emoji: '✈️', title: 'Билеты', desc: 'Прямые рейсы из Москвы, СПб и Владивостока' },
];

const facts = [
  { value: '300+', label: 'Вулканов', sub: 'из них 29 действующих' },
  { value: '≈3 200', label: 'Км берегов', sub: 'омываемых Тихим океаном' },
  { value: '12', label: 'Месяцев зимы', sub: 'снег не тает до июня' },
  { value: '160+', label: 'Видов птиц', sub: 'занесённых в Красную книгу' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '700px',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${VOLCANO_IMG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        {/* Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(17,21,28,0.3) 0%, rgba(17,21,28,0.2) 40%, rgba(17,21,28,0.85) 80%, rgba(17,21,28,1) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(17,21,28,0.5) 0%, transparent 60%)',
          }}
        />

        {/* Content */}
        <div
          className="container mx-auto px-6"
          style={{
            maxWidth: '1200px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: '6rem',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div className="animate-fade-in-up delay-100">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(197,127,74,0.15)',
                border: '1px solid rgba(197,127,74,0.3)',
                borderRadius: '20px',
                padding: '6px 14px',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: '#C57F4A', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                🌋 Камчатский край
              </span>
            </div>
          </div>

          <h1
            className="hero-title animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              color: '#F0EDE8',
              marginBottom: '1.25rem',
            }}
          >
            Камчатка.
            <br />
            <span style={{ color: '#C57F4A' }}>Начало</span> земли.
          </h1>

          <p
            className="animate-fade-in-up delay-300"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#A8A09A',
              fontSize: '1.125rem',
              maxWidth: '520px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            Край активных вулканов, кипящих гейзеров и диких медведей. Здесь заканчивается Россия и начинается Тихий океан.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <button
              onClick={() => onNavigate('tours')}
              className="btn-terra"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              Выбрать тур
            </button>
            <button
              onClick={() => onNavigate('places')}
              className="btn-glacier"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              Смотреть места
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            zIndex: 10,
          }}
        >
          <span style={{ color: '#6B6560', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Manrope, sans-serif' }}>
            Листай
          </span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #C57F4A, transparent)' }} />
        </div>
      </section>

      {/* Section Cards */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-deep)' }}>
        <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map((s, i) => (
              <button
                key={s.id}
                onClick={() => onNavigate(s.id)}
                className="card-base text-left"
                style={{
                  padding: '1.75rem 1.5rem',
                  animationDelay: `${i * 0.1}s`,
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.emoji}</div>
                <h3
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    color: '#F0EDE8',
                    fontSize: '1.125rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: '#A8A09A', fontSize: '0.8rem', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
                <div
                  style={{
                    marginTop: '1.25rem',
                    color: '#C57F4A',
                    fontSize: '0.8rem',
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Открыть →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section
        style={{
          padding: '5rem 0',
          background: '#0D1017',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="text-center mb-12">
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.75rem' }}
            >
              Камчатка в цифрах
            </h2>
            <p style={{ color: '#A8A09A', fontSize: '1rem' }}>
              Факты, которые трудно представить, пока не увидишь своими глазами
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((f, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  background: '#181E28',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="stat-number">{f.value}</div>
                <div
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    color: '#F0EDE8',
                    fontSize: '1rem',
                    marginTop: '0.5rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  {f.label}
                </div>
                <div style={{ color: '#6B6560', fontSize: '0.78rem' }}>{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-deep)' }}>
        <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div
            style={{
              borderRadius: 20,
              background: 'linear-gradient(135deg, #1E1A14 0%, #1A1E26 100%)',
              border: '1px solid rgba(197,127,74,0.2)',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                height: 200,
                background: 'radial-gradient(ellipse, rgba(197,127,74,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <span style={{ fontSize: '3rem' }}>🌋</span>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', maxWidth: '600px' }}
            >
              Готовы к приключению на краю земли?
            </h2>
            <p style={{ color: '#A8A09A', maxWidth: '480px', lineHeight: 1.7 }}>
              Подберём тур под ваши даты и бюджет. Гарантируем незабываемые впечатления.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => onNavigate('tours')}
                className="btn-terra"
                style={{ padding: '14px 32px', fontSize: '1rem' }}
              >
                Смотреть туры
              </button>
              <button
                onClick={() => onNavigate('tickets')}
                className="btn-glacier"
                style={{ padding: '14px 32px', fontSize: '1rem' }}
              >
                Найти билеты
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
