import React from 'react';
import TicketSection from './components/TicketSection';
import VenueController from './components/VenueController';

function App() {
  return (
    <div style={{
      fontFamily: 'Segoe UI',
      backgroundColor: '#f5f8ff',
      minHeight: '100vh',
      padding: '30px'
    }}>
      <h1 style={{ textAlign: 'center', color: '#1f3c88' }}>
        🎟️ EventSync Dashboard
      </h1>
      <p style={{ textAlign: 'center', fontSize: '18px' }}>
        Live Ticketing and Smart Venue Control System
      </p>
      <TicketSection />
      <VenueController />
    </div>
  );
}

export default App;
