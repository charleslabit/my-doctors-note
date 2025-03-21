"use client";
import {
  Button,
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

const themeComponents = {
  Button: Button.extend({
    defaultProps: {
      radius: "md",
    },
  }),
  Stack: {
    defaultProps: {
      gap: 10,
    },
  },

  Card: {
    defaultProps: {
      radius: "md",
    },
    styles: () => ({
      root: {
        wordBreak: "break-word",
      },
    }),
  },

  Text: {
    defaultProps: {
      fz: 16,
    },
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // In Next.js, during SSR, we need to delay the rendering of the app until the colorScheme is determined
  const [hydrated, setHydrated] = useState(false);
  // Use effect to ensure we run this logic only on the client-side
  useEffect(() => {
    setHydrated(true);
  }, []);
  // Avoid hydration errors: Don't render until the app is hydrated  this is for theme settings
  if (!hydrated) return null;

  const theme = createTheme({
    cursorType: "pointer",
    components: themeComponents,
    primaryColor: "light",
    fontFamily: "sans-serif",
    white: "#FFFFFF", // Replace white color
    black: "#333333",
    colors: {
      light: [
        "#FFF5E1", // Soft peach for background or light sections
        "#FFD9B3", // Warm apricot for cards or highlights
        "#FFB74D", // Vibrant orange for interactive elements
        "#FF9800", // Bold amber for call-to-action buttons
        "#F57C00", // Deep orange for hover effects or emphasis
        "#F44336", // Bright red for sales, alerts, or standout elements
        "#E91E63", // Vivid pink for accents or playful touches
        "#9C27B0", // Rich purple for contrast or branding highlights
        "#673AB7", // Deep violet for headers or text
        "#3F51B5", // Strong blue for trust-building elements (e.g., checkout)
      ],
    },
  });

  return (
    <>
      <ColorSchemeScript forceColorScheme={"dark"} />
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Notifications position="top-right" />
        <ModalsProvider modalProps={{ centered: true }}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
