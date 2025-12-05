import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlantic Drones",
  description: "Expertise de l'image aérienne et sol au Pays Basque et dans les Landes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {/* On affiche juste le contenu de la page, sans Header ni Footer globaux */}
        {children}
      </body>
    </html>
  );
}