"use client";
import { Box, Center } from "@mantine/core";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const FloatingNote = () => {
  const [position, setPosition] = useState<"unset" | "fixed">("unset");
  const [isVisible, setIsVisible] = useState(true); // Controls opacity & transform
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isScrollingUp = scrollY < lastScrollY.current;

          if (scrollY === 0) {
            setPosition("unset");
            setIsVisible(true); // Show when at top
          } else if (isScrollingUp) {
            setPosition("fixed");
            setIsVisible(true); // Show when scrolling up
          } else {
            setIsVisible(false); // Hide when scrolling down
          }

          lastScrollY.current = scrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Center
      p="20px 50px"
      pos={position}
      top={position === "fixed" ? 45 : "auto"}
      left={0}
      w="100%"
      bg="white"
      style={{
        zIndex: 1000,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
      }}
    >
      <Box p={7.5}>
        <Image
          width={240}
          height={29.5}
          src="https://mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=600"
          alt="My Doctors Note"
          priority={true}
        />
      </Box>
    </Center>
  );
};
