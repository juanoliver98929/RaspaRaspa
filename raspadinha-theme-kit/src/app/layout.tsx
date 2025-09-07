import "./globals.css";
import "../styles/theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raspadinha",
  description: "Sistema de raspadinha - front e painel"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
