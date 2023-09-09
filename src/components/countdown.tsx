import React, { useState, useEffect } from 'react';
import { Text } from '@chakra-ui/react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = +targetDate - +now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, );

    return () => clearTimeout(timer);
  }, []);

  return (
    <Text fontSize="3xl" fontWeight="bold" textAlign="center" style={{
        background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
      QRS 2024
    </Text>
  );
};

export default CountdownTimer;
//{`${timeLeft.days} Days ${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds} `}