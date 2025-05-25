import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink, Github, Gitlab, } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    { name: "Github", link: "https://github.com/Haroun-Jinzo", icon: <Github /> },
    { name: "Twitter", link: "https://x.com/Haroun78396855?t=OX-S022JaksLIRnUgFpBmA&s=07", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/haroun-khmiri-5581a2239/", icon: <Linkedin /> },
    { name: "Gitlab", link: "https://gitlab.com/TheRealJinzo", icon: <Gitlab /> },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125
        
        return (
          <FramerWrapper key={indx} delay={timing} y={50}>

          <Link  target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >{itm.icon}</Link>
            </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
