import type { Metadata } from "next";
import { ApolloWrapper } from "@levelstudio/utiles/apollo/client";
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
        <main className="min-h-screen grid">
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
        </main>
      </body>
    </html>
  );
}