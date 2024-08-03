import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
};

export default async function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="bg-white text-black pt-[165px]">{children}</main>;
}
