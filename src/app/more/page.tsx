import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, PackagePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import FramerWrapper from "@/components/animation/FramerWrapper";

const morePage = () => {
  const morelink = [
    {
      title: "Medium",
      description:
        "I write blogs on game development, trending tech stacks or Unity guide or tips in Medium",
      link: "https://medium.com/@Zareals",
    },

    {
      title: "Personal Blog",
      description:
        "yea, I made one of these for laugh and giggles",
      link: "https://personal-blog-gamma-liard.vercel.app/",
    },
    {
      title: "Upwork",
      description:
        "Sometimes I like that sweet, sweet extra income. You can find me on Upwork",
      link: "https://www.upwork.com/freelancers/~01df48f5b7fb5bc3ad",
    },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <PackagePlus className="h-5 w-5" />
        More
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>More</Heading>
      </div>
        <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
              Still Under Construct.
            </p>
    </div>
  );
};

export default morePage;
