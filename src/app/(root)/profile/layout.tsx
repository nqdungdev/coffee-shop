import userApiRequest from "@/utils/requests/user.request";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";

type Props = {
  params: { id: string };
};

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
// read route params
//   const id = params.id;

//   const product = await fetch(
//     `${process.env.NEXT_PUBLIC_TMDB_URL}/movie/${id}?language=vi&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
//   ).then((res) => res.json());

// optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ["/images/vercel.svg", ...previousImages],
//     },
//   };
// }

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const userId = cookieStore.get("userId");
  const accessToken = cookieStore.get("accessToken");
  try {
    if (userId && accessToken) {
      const { payload } = await userApiRequest.getMyProfile(
        accessToken.value,
        userId.value
      );
      console.log("payload:", payload);
    }
  } catch (error) {}

  return (
    <main className="bg-white text-black pt-[165px]">
      <section className="min-h-[200px] h-[200px] text-center overflow-hidden">
        <div className="bg-[url(/uploads/source/background/coffee-background-1.jpg)] bg-cover w-full h-full">
          <div className="relative flex justify-center items-center w-full h-full after:absolute after:bg-black after:bg-opacity-50 after:left-0 after:top-0 after:w-full after:h-full">
            <h1 className="text-center text-[40px] text-white font-bold z-10">
              Hồ sơ của tôi
            </h1>
          </div>
        </div>
      </section>

      <section className="m-0 bg-[#e6e6e6] py-3">
        <div className="container">{children}</div>
      </section>
    </main>
  );
}
