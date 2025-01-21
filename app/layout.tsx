import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LevelStudio",
  description: "Aplicación de prueba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <main className="min-h-screen grid p-5">
          {children}
        </main>
      </body>
    </html>
  );
}