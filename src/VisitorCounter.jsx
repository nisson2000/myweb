import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate fetching a visitor count, which increments on each page load
    const count = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount'), 10) : 0;
    setVisitorCount(count + 1);
    localStorage.setItem('visitorCount', count + 1);
  }, []);

  return (
    <div>
      <h3>Visitor Count: {visitorCount}</h3>
    </div>
  );
};

export default VisitorCounter;

