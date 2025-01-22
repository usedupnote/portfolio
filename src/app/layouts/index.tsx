
import type { Metadata } from "next";
import '../styles';

export const metadata: Metadata = {
  title: "LeongMyung's Portfolio",
  description: "Frontend Developer LeongMyung Lee(usedupnote)'s Portfolio",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}