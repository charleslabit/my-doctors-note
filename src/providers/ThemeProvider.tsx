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
      lh: 2,
    },
  },
  Anchor: {
    styles: () => ({
      root: {
        color: "#121212BF",
      },
    }),
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
    primaryColor: "blue",
    fontFamily: "sans-serif",
    white: "#FFFFFF", // Replace white color
    black: "#333333",
  });

  return (
    <>
      <ColorSchemeScript forceColorScheme={"light"} />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <Notifications position="top-right" />
        <ModalsProvider modalProps={{ centered: true }}>
          {children}
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
