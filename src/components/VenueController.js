import React, { useState, useEffect } from 'react';

function VenueController() {
  const [lights, setLights] = useState(false);
  const [ac, setAc] = useState(false);
  const [screen, setScreen] = useState(false);
  const [log, setLog] = useState([]);

  useEffect(() => {
    const message = `🔄 Status Updated — Lights: ${lights ? 'ON' : 'OFF'}, AC: ${ac ? 'ON' : 'OFF'}, Screen: ${screen ? 'ON' : 'OFF'}`;
    setLog((prev) => [...prev.slice(-4), message]);
  }, [lights, ac, screen]);

  return (
    <div style={{
      margin: '30px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      width: '90%',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#1f3c88' }}>🏟️ Venue Control Panel</h2>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setLights(!lights)} style={{ marginRight: '10px' }}>
          {lights ? '💡 Turn Off Lights' : '💡 Turn On Lights'}
        </button>
        <button onClick={() => setAc(!ac)} style={{ marginRight: '10px' }}>
          {ac ? '❄️ Turn Off AC' : '❄️ Turn On AC'}
        </button>
        <button onClick={() => setScreen(!screen)}>
          {screen ? '📽️ Turn Off Screen' : '📽️ Turn On Screen'}
        </button>
      </div>

      <h4>📋 Activity Log</h4>
      <ul>
        {log.map((entry, index) => (
          <li key={index} style={{ fontSize: '14px' }}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default VenueController;
