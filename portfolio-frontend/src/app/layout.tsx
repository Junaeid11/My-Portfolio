import { Metadata } from "next";
import "./globals.css";
import HomePage from "@/components/shared/Home/Home";
import Footer from "@/components/shared/footer";
import Providers from "@/liv/Providers";
import { Toaster } from "sonner";
import StarsCanvas from "@/components/shared/StarBackground";


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


          <div className=" min-h-screen">
            <HomePage />
            <Toaster richColors />
            <StarsCanvas /> {children}
            <Footer />
          </div>
         
        </Providers>
      </body>
    </html>
  );
}
