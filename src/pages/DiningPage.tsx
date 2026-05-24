import { useState } from 'react';

const restaurants = [
  {
    name: 'Hesburger',
    type: 'Ресторан быстрого питания',
    desc: 'Финская сеть бургеров с натуральными ингредиентами. Фирменные бургеры, картошка фри и молочные коктейли.',
    price: '₽',
    rating: '4.3',
    tags: ['🍔 Бургеры', '🍟 Картошка', '🥤 Коктейли'],
    hours: '09:00 – 23:00',
  },
  {
    name: 'У Вулкана',
    type: 'Авторская кухня',
    desc: 'Современная интерпретация камчатской кухни. Строганина из нельмы и бурая икра.',
    price: '₽₽₽₽',
    rating: '4.8',
    tags: ['🧊 Строганина', '🥚 Икра', '🍷 Вино'],
    hours: '13:00 – 00:00',
  },
  {
    name: 'Порт',
    type: 'Рыбный ресторан',
    desc: 'Свежий улов прямо с рыболовецких судов. Рыба дня, палтус на гриле, камбала.',
    price: '₽₽',
    rating: '4.7',
    tags: ['🐠 Улов дня', '🔥 Гриль', '🍋 Простая еда'],
    hours: '11:00 – 22:00',
  },
  {
    name: 'Берег',
    type: 'Кафе с видом',
    desc: 'Завтраки и обеды с видом на Авачинскую бухту. Рыбные пироги и чай из трав.',
    price: '₽₽',
    rating: '4.6',
    tags: ['🫖 Травяной чай', '🥧 Пироги', '🌅 Вид'],
    hours: '08:00 – 20:00',
  },
];

const bars = [
  {
    name: 'Огонь',
    type: 'Бар',
    desc: 'Крафтовое пиво и коктейли с названиями камчатских вулканов. Авторский бар на набережной.',
    price: '₽₽',
    rating: '4.8',
    tags: ['🍺 Крафт', '🍹 Коктейли', '🎵 Живая музыка'],
    hours: '17:00 – 02:00',
  },
  {
    name: 'Сопка',
    type: 'Бар-ресторан',
    desc: 'Широкий выбор виски и камчатской настойки. Тёплая атмосфера, деревянный интерьер.',
    price: '₽₽₽',
    rating: '4.7',
    tags: ['🥃 Виски', '🎶 Джаз', '🪵 Тепло'],
    hours: '18:00 – 03:00',
  },
  {
    name: 'Лава',
    type: 'Клуб-бар',
    desc: 'Танцы, диджеи и неоновые вулканы на стенах. Главное ночное место Петропавловска.',
    price: '₽₽',
    rating: '4.5',
    tags: ['💃 Танцы', '🎤 DJ', '🌋 Атмосфера'],
    hours: '21:00 – 05:00',
  },
  {
    name: 'Тихий океан',
    type: 'Бар с видом',
    desc: 'Панорамный вид на Тихий океан. Идеальное место для встречи заката с бокалом.',
    price: '₽₽₽',
    rating: '4.9',
    tags: ['🌊 Вид', '🌅 Закат', '🍷 Вино'],
    hours: '14:00 – 00:00',
  },
];

const priceMap: Record<string, string> = {
  '₽': 'до 500 ₽',
  '₽₽': '500–1500 ₽',
  '₽₽₽': '1500–3000 ₽',
  '₽₽₽₽': 'от 3000 ₽',
};

function PlaceCard({ item }: { item: typeof restaurants[0] }) {
  return (
    <div className="card-base" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div>
          <h3
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              color: '#F0EDE8',
              fontSize: '1.1rem',
              letterSpacing: '-0.02em',
              marginBottom: '0.2rem',
            }}
          >
            {item.name}
          </h3>
          <span style={{ color: '#7DB4B5', fontSize: '0.78rem', fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}>
            {item.type}
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              color: '#C57F4A',
              fontSize: '0.95rem',
            }}
          >
            {item.price}
          </div>
          <div style={{ color: '#6B6560', fontSize: '0.72rem' }}>{priceMap[item.price]}</div>
        </div>
      </div>

      <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem' }}>
        {item.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
        {item.tags.map((tag, i) => (
          <span
            key={i}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '3px 10px',
              fontSize: '0.75rem',
              color: '#A8A09A',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#6B6560', fontSize: '0.78rem' }}>⏰ {item.hours}</span>
        <span style={{ color: '#F0EDE8', fontSize: '0.85rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}>
          ⭐ {item.rating}
        </span>
      </div>
    </div>
  );
}

export default function DiningPage() {
  const [tab, setTab] = useState<'eat' | 'fun'>('eat');

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
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {(tab === 'eat' ? restaurants : bars).map((item, i) => (
            <PlaceCard key={i} item={item} />
          ))}
        </div>

        {/* Price Legend */}
        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: '#181E28',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
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