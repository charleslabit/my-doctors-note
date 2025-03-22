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
        <link
          rel="icon"
          href="https://mydoctorsnote.co/cdn/shop/files/Medexcuse_favicon.png?crop=center&height=32&v=1740244640&width=32"
        />
      </head>
      <body>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
