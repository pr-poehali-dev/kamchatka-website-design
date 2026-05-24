import { useState } from 'react';

const routes = [
  { from: 'Москва (SVO)', code: 'MOW' },
  { from: 'Санкт-Петербург (LED)', code: 'SPB' },
  { from: 'Владивосток (VVO)', code: 'VVO' },
  { from: 'Новосибирск (OVB)', code: 'OVB' },
];

const flights = [
  { from: 'Москва', airline: 'Аэрофлот', time: '8ч 30мин', price: '18 500 ₽', depart: '07:15', arrive: '21:45+1', days: ['Пн', 'Ср', 'Пт', 'Вс'] },
  { from: 'Москва', airline: 'Россия', time: '8ч 45мин', price: '15 200 ₽', depart: '23:55', arrive: '14:40+1', days: ['Вт', 'Чт', 'Сб'] },
  { from: 'СПб', airline: 'Победа', time: '9ч 20мин', price: '12 800 ₽', depart: '06:00', arrive: '19:20', days: ['Пн', 'Пт'] },
  { from: 'Владивосток', airline: 'Aurora', time: '2ч 15мин', price: '6 400 ₽', depart: '10:30', arrive: '14:45', days: ['Ежедневно'] },
];

const seasons = [
  {
    name: 'Лето',
    months: 'Июль – Август',
    emoji: '☀️',
    color: '#C57F4A',
    desc: 'Лучшее время. Медведи, рыбалка, зелёные вулканы, тёплое море.',
    rating: 5,
  },
  {
    name: 'Ранняя осень',
    months: 'Сентябрь',
    emoji: '🍂',
    color: '#7DB4B5',
    desc: 'Нерест лосося. Яркие краски тундры. Меньше туристов.',
    rating: 4,
  },
  {
    name: 'Зима',
    months: 'Декабрь – Март',
    emoji: '❄️',
    color: '#9ECBCC',
    desc: 'Горнолыжный сезон, снегоходы, северное сияние.',
    rating: 3,
  },
  {
    name: 'Весна',
    months: 'Апрель – Июнь',
    emoji: '🌸',
    color: '#8B6A3E',
    desc: 'Снег ещё лежит. Хорошо для лыжного туризма.',
    rating: 2,
  },
];

const transfers = [
  { icon: '🚌', title: 'Автобус-шаттл', desc: 'Аэроэкспресс до центра', price: '250 ₽', time: '40 мин' },
  { icon: '🚕', title: 'Такси', desc: 'Яндекс Go, СитиМобил', price: 'от 600 ₽', time: '25 мин' },
  { icon: '🚗', title: 'Аренда авто', desc: 'От 2 500 ₽/сутки (4WD)', price: 'от 2 500 ₽', time: '30 мин' },
  { icon: '🚁', title: 'Вертолёт', desc: 'Прямо в тур из аэропорта', price: 'от 8 000 ₽', time: '20 мин' },
];

export default function TicketsPage() {
  const [from, setFrom] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');

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
              ✈️ Билеты
            </span>
          </div>
          <h1
            className="section-title"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}
          >
            Найти билеты на Камчатку
          </h1>
          <p style={{ color: '#A8A09A', fontSize: '1.1rem', maxWidth: '560px', lineHeight: 1.7 }}>
            Прямые рейсы в Петропавловск-Камчатский (PKC) из крупнейших городов России.
          </p>
        </div>

        {/* Search Widget */}
        <div
          style={{
            background: '#181E28',
            borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🔍</span>
            <h2
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                color: '#F0EDE8',
                fontSize: '1.125rem',
              }}
            >
              Поиск авиабилетов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* From */}
            <div>
              <label style={{ color: '#6B6560', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
                Откуда
              </label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                style={{
                  width: '100%',
                  background: '#11151C',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '11px 14px',
                  color: from ? '#F0EDE8' : '#6B6560',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                }}
              >
                <option value="">Выберите город</option>
                {routes.map((r) => (
                  <option key={r.code} value={r.code} style={{ color: '#F0EDE8', background: '#181E28' }}>
                    {r.from}
                  </option>
                ))}
              </select>
            </div>

            {/* To */}
            <div>
              <label style={{ color: '#6B6560', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
                Куда
              </label>
              <div
                style={{
                  width: '100%',
                  background: '#11151C',
                  border: '1px solid rgba(197,127,74,0.3)',
                  borderRadius: 10,
                  padding: '11px 14px',
                  color: '#C57F4A',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                🌋 Петропавловск-Камчатский (PKC)
              </div>
            </div>

            {/* Date */}
            <div>
              <label style={{ color: '#6B6560', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
                Дата вылета
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: '100%',
                  background: '#11151C',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '11px 14px',
                  color: '#F0EDE8',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  colorScheme: 'dark',
                }}
              />
            </div>

            {/* Passengers */}
            <div>
              <label style={{ color: '#6B6560', fontSize: '0.75rem', fontFamily: 'Manrope, sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
                Пассажиры
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                style={{
                  width: '100%',
                  background: '#11151C',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '11px 14px',
                  color: '#F0EDE8',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                }}
              >
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n} style={{ color: '#F0EDE8', background: '#181E28' }}>
                    {n} {n === 1 ? 'пассажир' : n < 5 ? 'пассажира' : 'пассажиров'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="btn-terra"
            style={{ marginTop: '1.25rem', padding: '13px 32px', fontSize: '1rem', width: '100%' }}
          >
            🔍 Найти билеты
          </button>
        </div>

        {/* Popular Routes */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2
            className="section-title"
            style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}
          >
            Популярные маршруты
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {flights.map((f, i) => (
              <div
                key={i}
                className="card-base"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#F0EDE8', fontSize: '1rem' }}>
                      {f.from} → Петропавловск
                    </div>
                    <div style={{ color: '#6B6560', fontSize: '0.78rem', marginTop: '2px' }}>{f.airline}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: '#F0EDE8', fontSize: '0.9rem', fontWeight: 600 }}>{f.depart}</span>
                    <span style={{ color: '#6B6560', fontSize: '0.8rem' }}>→</span>
                    <span style={{ color: '#F0EDE8', fontSize: '0.9rem', fontWeight: 600 }}>{f.arrive}</span>
                    <span style={{ color: '#6B6560', fontSize: '0.78rem', marginLeft: '4px' }}>({f.time})</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {f.days.map((d, j) => (
                      <span
                        key={j}
                        style={{
                          background: 'rgba(125,180,181,0.1)',
                          color: '#7DB4B5',
                          borderRadius: '6px',
                          padding: '2px 7px',
                          fontSize: '0.7rem',
                          fontFamily: 'Manrope, sans-serif',
                          fontWeight: 600,
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 800,
                      color: '#C57F4A',
                      fontSize: '1.25rem',
                    }}
                  >
                    {f.price}
                  </div>
                  <button className="btn-terra" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                    Купить
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Seasons */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Лучшие сезоны
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {seasons.map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#181E28',
                  borderRadius: 16,
                  border: `1px solid ${s.color}22`,
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.emoji}</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#F0EDE8', fontSize: '1rem', marginBottom: '0.25rem' }}>
                  {s.name}
                </div>
                <div style={{ color: s.color, fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'Manrope, sans-serif' }}>
                  {s.months}
                </div>
                <p style={{ color: '#A8A09A', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {s.desc}
                </p>
                <div>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ fontSize: '0.75rem', opacity: j < s.rating ? 1 : 0.2 }}>⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transfer */}
        <div>
          <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Трансфер из аэропорта
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {transfers.map((t, i) => (
              <div
                key={i}
                style={{
                  background: '#181E28',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{t.icon}</div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, color: '#F0EDE8', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  {t.title}
                </div>
                <div style={{ color: '#6B6560', fontSize: '0.78rem', marginBottom: '0.75rem' }}>{t.desc}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#C57F4A', fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>{t.price}</span>
                  <span style={{ color: '#6B6560', fontSize: '0.75rem' }}>⏱ {t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
