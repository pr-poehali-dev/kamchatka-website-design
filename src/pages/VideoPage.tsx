import { useState } from 'react';

const VOLCANO_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/a1825739-5ef6-494b-ad48-30d383f0b273.jpg';
const GEYSER_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5547b2ac-20ee-4307-8435-a77f7f991d2c.jpg';
const BEAR_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/65c05a42-5aa0-4ea3-9b03-e65c0e78a01d.jpg';
const AVACHA_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5810b38f-ba82-4e23-ac8b-182067f5c7af.jpg';

const fishingVideos = [
  { title: 'Нерка в Курильском озере', duration: '14:32', img: BEAR_IMG, views: '284 тыс' },
  { title: 'Рыбалка на Семячик. Горбуша', duration: '22:15', img: AVACHA_IMG, views: '156 тыс' },
  { title: 'Форель на горных реках', duration: '18:07', img: GEYSER_IMG, views: '91 тыс' },
];

const extraVideos = [
  { title: 'Восхождение на Авачинский', duration: '31:20', img: VOLCANO_IMG, views: '423 тыс' },
  { title: 'Долина гейзеров с дрона', duration: '08:45', img: GEYSER_IMG, views: '890 тыс' },
  { title: 'Медведи Камчатки 4K', duration: '19:55', img: BEAR_IMG, views: '1.2 млн' },
  { title: 'Авачинская бухта. Закат', duration: '05:30', img: AVACHA_IMG, views: '312 тыс' },
];

function PlayButton({ size = 64 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: 'rgba(197,127,74,0.9)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 0 30px rgba(197,127,74,0.4)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flexShrink: 0,
      }}
    >
      <span style={{ fontSize: size * 0.35 + 'px', marginLeft: '3px' }}>▶</span>
    </div>
  );
}

function VideoCard({
  title,
  duration,
  img,
  views,
  size = 'sm',
}: {
  title: string;
  duration: string;
  img: string;
  views: string;
  size?: 'sm' | 'md';
}) {
  const [hovered, setHovered] = useState(false);
  const imgH = size === 'md' ? '180px' : '140px';

  return (
    <div
      className="card-base"
      style={{ overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'relative', height: imgH, overflow: 'hidden' }}>
        <img
          src={img}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(17,21,28,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
            backgroundColor: hovered ? 'rgba(17,21,28,0.55)' : 'rgba(17,21,28,0.35)',
          }}
        >
          <PlayButton size={48} />
        </div>
        <span
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            right: '0.75rem',
            background: 'rgba(17,21,28,0.85)',
            color: '#F0EDE8',
            borderRadius: '6px',
            padding: '2px 8px',
            fontSize: '0.75rem',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
          }}
        >
          {duration}
        </span>
      </div>
      <div style={{ padding: '0.875rem' }}>
        <div
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 600,
            color: '#F0EDE8',
            fontSize: '0.875rem',
            marginBottom: '0.25rem',
            letterSpacing: '-0.01em',
          }}
        >
          {title}
        </div>
        <div style={{ color: '#6B6560', fontSize: '0.75rem' }}>👁 {views} просмотров</div>
      </div>
    </div>
  );
}

export default function VideoPage() {
  const [guideOpen, setGuideOpen] = useState(false);
  const [question, setQuestion] = useState('');

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
              ▶️ Видео
            </span>
          </div>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}
          >
            Камчатка в движении
          </h1>
          <p style={{ color: '#A8A09A', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Настоящая Камчатка — живая, шумящая и непредсказуемая. Смотрите, прежде чем решиться.
          </p>
        </div>

        {/* Main Video */}
        <div
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            marginBottom: '4rem',
            cursor: 'pointer',
          }}
        >
          <img
            src={VOLCANO_IMG}
            alt="Главное видео"
            style={{ width: '100%', height: 'clamp(280px, 50vw, 520px)', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(17,21,28,0.9) 0%, rgba(17,21,28,0.3) 60%, rgba(17,21,28,0.1) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: '3rem',
            }}
          >
            <PlayButton size={80} />
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 800,
                  color: '#F0EDE8',
                  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.5rem',
                }}
              >
                Камчатка. Документальный фильм. 4K
              </div>
              <div style={{ color: '#A8A09A', fontSize: '0.9rem' }}>
                1ч 12мин · 4.2 млн просмотров
              </div>
            </div>
          </div>
        </div>

        {/* Fishing Section */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)' }}
            >
              🎣 Рыбалка на Камчатке
            </h2>
            <button style={{ color: '#C57F4A', fontSize: '0.875rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
              Смотреть всё →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fishingVideos.map((v, i) => (
              <VideoCard key={i} {...v} size="md" />
            ))}
          </div>
        </div>

        {/* Extra Videos Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2
              className="section-title"
              style={{ fontSize: 'clamp(1.375rem, 3vw, 1.75rem)' }}
            >
              Также смотрите
            </h2>
            <button style={{ color: '#C57F4A', fontSize: '0.875rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>
              YouTube канал →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {extraVideos.map((v, i) => (
              <VideoCard key={i} {...v} />
            ))}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Ask Guide */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1E1A14 0%, #1C1816 100%)',
              borderRadius: 20,
              border: '1px solid rgba(197,127,74,0.2)',
              padding: '2rem',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🧭</div>
            <h3
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                color: '#F0EDE8',
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
              }}
            >
              Задать вопрос гиду
            </h3>
            <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Наши эксперты ответят на любые вопросы о Камчатке, турах и рыбалке.
            </p>
            {guideOpen ? (
              <div>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ваш вопрос о Камчатке..."
                  rows={3}
                  style={{
                    width: '100%',
                    background: '#11151C',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10,
                    padding: '10px 14px',
                    color: '#F0EDE8',
                    fontSize: '0.875rem',
                    outline: 'none',
                    fontFamily: 'Inter, sans-serif',
                    resize: 'none',
                    marginBottom: '0.75rem',
                  }}
                />
                <button className="btn-terra" style={{ padding: '10px 20px', fontSize: '0.875rem', width: '100%' }}>
                  Отправить вопрос
                </button>
              </div>
            ) : (
              <button
                className="btn-terra"
                style={{ padding: '10px 20px', fontSize: '0.875rem' }}
                onClick={() => setGuideOpen(true)}
              >
                Задать вопрос
              </button>
            )}
          </div>

          {/* YouTube */}
          <div
            style={{
              background: 'linear-gradient(135deg, #1A1E14 0%, #161A1C 100%)',
              borderRadius: 20,
              border: '1px solid rgba(125,180,181,0.15)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>▶️</div>
              <h3
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 700,
                  color: '#F0EDE8',
                  fontSize: '1.125rem',
                  marginBottom: '0.5rem',
                }}
              >
                YouTube канал
              </h3>
              <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Более 200 видео о природе, рыбалке, турах и быте на Камчатке. Подписывайтесь.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#C57F4A', fontSize: '1.25rem' }}>12.4K</div>
                <div style={{ color: '#6B6560', fontSize: '0.75rem' }}>подписчиков</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#7DB4B5', fontSize: '1.25rem' }}>200+</div>
                <div style={{ color: '#6B6560', fontSize: '0.75rem' }}>видео</div>
              </div>
              <button
                className="btn-glacier"
                style={{ padding: '10px 20px', fontSize: '0.875rem', marginLeft: 'auto' }}
              >
                На канал →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
