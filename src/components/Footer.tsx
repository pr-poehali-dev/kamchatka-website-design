import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  return (
    <footer
      style={{
        background: '#0D1017',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: 'linear-gradient(135deg, #C57F4A 0%, #8B4A1E 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                }}
              >
                🌋
              </div>
              <span
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  color: '#F0EDE8',
                  letterSpacing: '-0.02em',
                }}
              >
                Камчатка
              </span>
            </div>
            <p style={{ color: '#A8A09A', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '320px', marginBottom: '1.5rem' }}>
              Полный гид по краю вулканов и гейзеров. Туры, заведения, билеты и вдохновение для вашего путешествия.
            </p>

            {/* Subscribe */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                style={{
                  flex: 1,
                  background: '#181E28',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: '10px 14px',
                  color: '#F0EDE8',
                  fontSize: '0.875rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
              <button
                className="btn-terra"
                style={{ padding: '10px 16px', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
              >
                Подписаться
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                color: '#F0EDE8',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Навигация
            </h4>
            {[
              { id: 'home', label: 'Главная' },
              { id: 'places', label: 'Места' },
              { id: 'dining', label: 'Заведения' },
              { id: 'tours', label: 'Туры' },
              { id: 'tickets', label: 'Билеты' },
              { id: 'video', label: 'Видео' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="block mb-2 nav-link"
                style={{ fontSize: '0.875rem' }}
              >
                {item.label}
              </button>
            ))}
          </div>


        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: '#6B6560', fontSize: '0.8rem' }}>
            © 2024 Камчатка. Начало земли. Все права защищены.
          </p>
          <p style={{ color: '#6B6560', fontSize: '0.8rem' }}>
            Петропавловск-Камчатский, Камчатский край
          </p>
        </div>
      </div>
    </footer>
  );
}