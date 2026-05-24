import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PlacesPage from '@/pages/PlacesPage';
import DiningPage from '@/pages/DiningPage';
import ToursPage from '@/pages/ToursPage';
import TicketsPage from '@/pages/TicketsPage';
import VideoPage from '@/pages/VideoPage';

type Page = 'home' | 'places' | 'dining' | 'tours' | 'tickets' | 'video';

export default function Index() {
  const [activePage, setActivePage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    const valid: Page[] = ['home', 'places', 'dining', 'tours', 'tickets', 'video'];
    if (valid.includes(page as Page)) {
      setActivePage(page as Page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <main>
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'places' && <PlacesPage />}
        {activePage === 'dining' && <DiningPage />}
        {activePage === 'tours' && <ToursPage onNavigate={handleNavigate} />}
        {activePage === 'tickets' && <TicketsPage />}
        {activePage === 'video' && <VideoPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
