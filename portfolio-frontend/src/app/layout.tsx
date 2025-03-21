import { Metadata } from "next";
import "./globals.css";
import HomePage from "@/components/shared/Home/Home";
import Footer from "@/components/shared/footer";
import Providers from "@/liv/Providers";
import { Toaster } from "sonner";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Noobwork",
  description: "Welcome to my Portfolio",
  openGraph: {
    title: "Noobwork",
    description: "Welcome to my Portfolio",
    images: ["https://drive.google.com/uc?id=1QxRz5cCStlrQyVQPRiF-vV_nxA9gd2kq"], 
    url: "https://eid-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noobwork",
    description: "Welcome to my Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Head>
            {/* Default Meta Tags for Home Page */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Welcome to my Portfolio" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Noobwork" />
            <meta property="og:description" content="Welcome to my Portfolio" />
            <meta property="og:image" content="https://drive.google.com/uc?id=1QxRz5cCStlrQyVQPRiF-vV_nxA9gd2kq" />
            <meta property="og:url" content="https://eid-portfolio.vercel.app" />
            <meta property="og:site_name" content="Noobwork Portfolio" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Noobwork" />
            <meta name="twitter:description" content="Welcome to my Portfolio" />
            <meta name="twitter:image" content="/default-image.jpg" />
            <meta name="twitter:site" content="@your_handle" />
          </Head>

          <HomePage />
          <div className="min-h-screen">
            <Toaster richColors /> {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
