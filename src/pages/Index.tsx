import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import PlacesPage from '@/pages/PlacesPage';
import DiningPage from '@/pages/DiningPage';
import VenuePage from '@/pages/VenuePage';
import ToursPage from '@/pages/ToursPage';
import TicketsPage from '@/pages/TicketsPage';
import VideoPage from '@/pages/VideoPage';

type Page = 'home' | 'places' | 'dining' | 'tours' | 'tickets' | 'video';

export default function Index() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [activeVenueId, setActiveVenueId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    const valid: Page[] = ['home', 'places', 'dining', 'tours', 'tickets', 'video'];
    if (valid.includes(page as Page)) {
      setActivePage(page as Page);
      setActiveVenueId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleVenueOpen = (id: string) => {
    setActiveVenueId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVenueBack = () => {
    setActiveVenueId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <main>
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'places' && <PlacesPage />}
        {activePage === 'dining' && !activeVenueId && (
          <DiningPage onVenueOpen={handleVenueOpen} />
        )}
        {activePage === 'dining' && activeVenueId && (
          <VenuePage venueId={activeVenueId} onBack={handleVenueBack} />
        )}
        {activePage === 'tours' && <ToursPage onNavigate={handleNavigate} />}
        {activePage === 'tickets' && <TicketsPage />}
        {activePage === 'video' && <VideoPage />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
