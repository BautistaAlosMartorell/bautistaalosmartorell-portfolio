import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bautista Alós Martorell | Full-Stack & Data Science",
  description:
    "Portfolio de Bautista Alós Martorell — Ingeniero en Sistemas especializado en desarrollo Full-Stack, Data Science y Machine Learning.",
  metadataBase: new URL("https://bautistaalos.vercel.app"),
  openGraph: {
    title: "Bautista Alós Martorell | Full-Stack & Data Science",
    description:
      "Estudiante avanzado de Ingeniería en Sistemas. Desarrollo proyectos full-stack y data-driven que combinan ingeniería de software y toma de decisiones basada en datos.",
    type: "website",
    locale: "es_AR",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
