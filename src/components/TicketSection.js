import React, { useState, useEffect } from 'react';

function TicketSection() {
  const [available, setAvailable] = useState(100);
  const [sold, setSold] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (available > 0) {
        setAvailable((prev) => prev - 1);
        setSold((prev) => prev + 1);
      }
    }, 3000); // Simulate 1 ticket sold every 3 seconds

    return () => clearInterval(interval);
  }, [available]);

  return (
    <div style={{
      margin: '30px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      width: '90%',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#1f3c88' }}>🎫 Live Ticket Status</h2>
      <p><strong>Available Tickets:</strong> {available}</p>
      <p><strong>Sold Tickets:</strong> {sold}</p>
    </div>
  );
}

export default TicketSection;
