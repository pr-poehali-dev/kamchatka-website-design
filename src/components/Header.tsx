import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'places', label: 'Места' },
  { id: 'dining', label: 'Заведения' },
  { id: 'tours', label: 'Туры' },
  { id: 'tickets', label: 'Билеты' },
  { id: 'video', label: 'Видео' },
];

export default function Header({ activePage, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(17,21,28,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="container mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5"
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #C57F4A 0%, #8B4A1E 100%)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
              }}
            >
              🌋
            </div>
            <span
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 800,
                fontSize: '1rem',
                color: '#F0EDE8',
                letterSpacing: '-0.02em',
              }}
            >
              Камчатка
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate('tours')}
              className="btn-terra px-4 py-2 text-sm"
            >
              Забронировать тур
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: '#F0EDE8' }}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: '#181E28',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '1rem 1.5rem',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className="block w-full text-left py-3 nav-link"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('tours'); setMenuOpen(false); }}
            className="btn-terra w-full mt-4 py-3 text-sm"
          >
            Забронировать тур
          </button>
        </div>
      )}
    </header>
  );
}
