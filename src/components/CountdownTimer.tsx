'use client';

import { useEffect, useState } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-07T09:00:00-07:00'); // 9 AM PST

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Launching Alpha in</h3>
      <div className="flex gap-4 justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-sm text-gray-300">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
          <div className="text-sm text-gray-300">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-300">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-300">Seconds</div>
        </div>
      </div>
    </div>
  );
}; 