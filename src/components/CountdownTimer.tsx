'use client';

import { useEffect, useState } from 'react';

export const CountdownTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (secondsLeft === 0) {
      window.location.href = 'https://cloudmcp.dev';
      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">
        We are launching as &quot;Cloud MCP&quot;, visit us at{' '}
        <a href="https://cloudmcp.dev" className="text-blue-400 hover:text-blue-300">
          https://cloudmcp.dev
        </a>
      </h3>
      <div className="text-center">
        <div className="text-3xl font-bold text-white">{secondsLeft}</div>
        <div className="text-sm text-gray-300">Redirecting in seconds...</div>
      </div>
    </div>
  );
}; 