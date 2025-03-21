import { Layout } from "@/containers/layout";
import { ThemeProvider } from "@/providers";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "My Doctors Note",
  description: "My Doctors Note Replica",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/next.svg" />
      </head>
      <body>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
