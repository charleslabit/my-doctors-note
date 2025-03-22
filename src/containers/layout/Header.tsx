"use client";

import { Center, Text } from "@mantine/core";
import { useEffect, useState } from "react";

const MINUTES = 60 * 10;

export const Header = () => {
  const [timeLeft, setTimeLeft] = useState(MINUTES);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  return (
    <Center bg="#2323FD" p="10px 0px">
      <Text c="white" fw={600} fz={16}>
        30% OFF If you order in the next {formatTime(timeLeft)}
      </Text>
    </Center>
  );
};
