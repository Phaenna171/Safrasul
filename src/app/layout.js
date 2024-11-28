import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safrasul Sementes",
  description: "Qualidade que enriquece o agro!",
  icons: {
    icon: "/imgs/logo.svg", // O caminho relativo para o seu ícone
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
