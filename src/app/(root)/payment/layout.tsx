import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanh toán",
};

export default async function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white text-black pt-[165px]">
      <section className="container wrapper-container">
        <div className="bg-white">{children}</div>
      </section>
    </main>
  );
}
