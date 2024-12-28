import Link from "next/link";
import landingPageImg from '../../public/quickfolio-logo.png'
import Image from "next/image";
import { auth } from "@/components/auth";
import { redirect } from "next/navigation";


export const siteConfig = {
  name: "Quickfolio - one page, many links.",
  description: "Quickfolio help you to Create a personalized page to showcase all your social media profiles in one place.",
  ogImage: "https://Quickfolio.vercel.app/og-image.png",
  url: "https://Quickfolio.vercel.app",
}
export default async function Home() {
  const session = await auth()
  if(session?.user) return redirect('/create')
  return (
    <div className=" relative h-screen w-full flex justify-center items-center">
      <div className="bg-white">
    

    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">Simplify your online presence!</p>
                    <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-[5.3rem]">
                      Take control of your links with 
                      <span className="hidden lg:inline">&nbsp;&nbsp;&nbsp;&nbsp; &gt; &gt;</span>
                      <span className="inline lg:hidden">&nbsp;Quickfolio</span>
                    </h1>

                    <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Your all-in-one link management solution</p>

                    <Link href="/create" title="signup" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-primary rounded-full lg:mt-16 hover:bg-primary/90" role="button">
                        Get your Link
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>

                    <p className="mt-5 text-gray-600">Already joined us? <Link href="/auth/signin" title="signin" className="text-black transition-all duration-200 hover:underline">Log in</Link></p>
                </div>

                <div className="flex items-center justify-center mt-20 lg:justify-end text-6xl lg:text-9xl">
                    <Image className="w-20 lg:w-36 rounded-full" src={landingPageImg} alt="heroImg" />
                    <span className="text-primary">Q</span>uickfolio
                </div>
            </div>
        </div>
    </section>
</div>


    </div>
  );
}
