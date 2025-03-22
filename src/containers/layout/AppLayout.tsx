"use client";
import { FloatingNote } from "@/components/FloatingNote";
import { AppShell } from "@mantine/core";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      header={{
        height: 45,
      }}
      footer={{
        height: 512,
      }}
      styles={{
        main: { minHeight: "auto" },
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main pb={0} pl={10} pr={10}>
        <FloatingNote />
        {children}
      </AppShell.Main>
      <AppShell.Footer pos="relative" p="36px 10px" mt={50}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
