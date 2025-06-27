import { Metadata } from "next";
import "./globals.css";
import HomePage from "@/components/shared/Home/Home";
import Footer from "@/components/shared/footer";
import Providers from "@/liv/Providers";
import { Toaster } from "sonner";
import StarsCanvas from "@/components/shared/StarBackground";

export const metadata: Metadata = {
  title: "Junaeid Ahmed Tanim",
  description: "Professional portfolio of Junaeid Ahmed Tanim, a passionate Full Stack Developer and Power Engineer specializing in modern web applications and innovative solutions.",
  keywords: ["Full Stack Developer", "Power Engineer", "Web Development", "React", "Next.js", "Portfolio", "Junaeid Ahmed Tanim"],
  authors: [{ name: "Junaeid Ahmed Tanim" }],
  creator: "Junaeid Ahmed Tanim",
  publisher: "Junaeid Ahmed Tanim",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noobwork.me",
    title: "Junaeid Ahmed Tanim",
    description: "Professional portfolio showcasing web development projects, skills, and expertise in full-stack development and power engineering.",
    siteName: "Junaeid Ahmed Tanim Portfolio",
    images: [
      {
        url: "https://noobwork.me/profile.png",
        width: 1200,
        height: 630,
        alt: "Junaeid Ahmed Tanim - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaeid Ahmed Tanim",
    description: "Professional portfolio showcasing web development projects and expertise",
    images: ["https://noobwork.me/profile.png"],
  },
  themeColor: "#0f172a",
  manifest: "/manifest.json",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <HomePage />
            <Toaster 
              richColors 
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#1e293b',
                  color: '#f8fafc',
                  border: '1px solid #334155',
                },
              }}
            />
            <StarsCanvas />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
