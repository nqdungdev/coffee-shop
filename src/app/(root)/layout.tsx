import type { Metadata } from "next";
import { Oswald, Josefin_Sans } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Gờ coffee", template: "Gờ coffee | %s" },
  description: "Gờ coffee website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>

        <Footer />
      </body>
    </html>
  );
}
