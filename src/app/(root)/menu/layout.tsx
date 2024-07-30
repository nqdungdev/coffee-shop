import Breadcrumbs from "@/components/common/breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Thực đơn",
};

export default async function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white text-black pt-[165px]">
      <Breadcrumbs />
      <section className="container mt-4">
        <Suspense>{children}</Suspense>
      </section>
    </main>
  );
}
