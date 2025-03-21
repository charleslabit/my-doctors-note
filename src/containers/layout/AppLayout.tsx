"use client";
import { AppShell } from "@mantine/core";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      header={{
        height: 36,
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer pos="relative">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
