
import Head from 'next/head';
import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export const siteConfig = {
  name: "Haroun Khmiri",
  description: "I am a Passionate Game Developer",
  ogImage: " ",
  url: "https://www.harounkhmiri.xyz/",
}
export default function Home() {
  return (
    
   <>
   <Head>
   <meta name="google-site-verification" content="JUxGwefytSDxyGZnUl-RtyV6BlerLuehaItGGFxIXdE" />
      </Head>
      {/* LEFT SIDE  */}
      <FramerWrapper className=" h-full w-auto flex flex-col justify-start gap-4" y={0} x={-100}>
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-4">
          <SocialLinks />
        </div>
       <DownLoadResumeBtn/>
      </FramerWrapper>
      {/* RIGHT SIDE image  */}
      <FramerWrapper className="h-full w-[47%] relative block   max-lg:hidden" y={0} x={100}>
       
      {/* IMAGE  */}
        <HeroImage />
      </FramerWrapper>
     
      {/* GITHUB BUTTON  */}
      <GithubBtn/>
      </>
  );
}
