import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    Image: string;
    videoLink?: string;    // optional demo/video URL
    projectLink?: string;  // optional project/web URL
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videoLink = value.videoLink;
  const projectLink = value.projectLink;

  const isYouTube = videoLink?.includes("youtu.be") || videoLink?.includes("youtube.com");
  const isGoogleDrive = videoLink?.includes("drive.google.com");

  const getVideoId = (url: string): string => {
    if (url.includes("youtu.be")) {
      return url.split("/").pop() || "";
    }
    const params = new URLSearchParams(new URL(url).search);
    return params.get("v") || "";
  };

  const getGoogleDriveEmbedUrl = (url: string): string => {
    const match = url.match(/[-\w]{25,}/);
    return match ? `https://drive.google.com/file/d/${match[0]}/preview` : url;
  };

  const getMediaContent = () => {
    if (showVideo && videoLink) {
      if (isYouTube) {
        return (
          <div className="absolute inset-0">
            <iframe
              src={`https://www.youtube.com/embed/${getVideoId(videoLink)}?autoplay=1`}
              className="w-full h-full rounded-md"
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      } else if (isGoogleDrive) {
        return (
          <div className="absolute inset-0">
            <iframe
              src={getGoogleDriveEmbedUrl(videoLink)}
              className="w-full h-full rounded-md"
              onLoad={() => setIsLoading(false)}
              allowFullScreen
            />
          </div>
        );
      }
    }

    // Fallback: show image (poster) and Play overlay
    return (
      <div className="absolute inset-0 group">
        <Image
          src={value.Image}
          alt={value.title}
          layout="fill"
          className="rounded-md object-cover"
          onLoad={() => setIsLoading(false)}
        />
        {videoLink && !showVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
            <Play className="w-12 h-12 text-white" />
          </div>
        )}
      </div>
    );
  };

  return (
    <FramerWrapper
      className="max-w-[32%] min-h-[345px] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl">{value.title}</CardTitle>
        </CardHeader>

        <div className="w-full px-6 mb-4">
          <div className="relative w-full aspect-[16/9]">
            {getMediaContent()}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-md">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
          </div>
        </div>

        <CardContent>
          <p className="text-base font-poppins">{value.description}</p>
          <div className="w-full h-fit flex mt-4 justify-center flex-row flex-wrap gap-2">
            {value.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${
                  tag === 'Nextjs' ? 'bg-teal-100 text-teal-800' :
                  tag === 'Freelancing' ? 'bg-yellow-100 text-yellow-800' :
                  tag === 'Shadcn Ui' ? 'bg-blue-100 text-blue-800' :
                  tag === 'Typescript' ? 'bg-red-100 text-red-800' :
                  tag === 'Supabase' ? 'bg-violet-100 text-violet-800' :
                  tag === 'Redis' ? 'bg-pink-100 text-pink-800' :
                  tag === 'MySQL' ? 'bg-orange-100 text-orange-800' :
                  tag === 'Zustand' ? 'bg-indigo-100 text-indigo-800' :
                  'bg-gray-100 text-gray-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="items-center justify-center flex mt-auto pt-4 gap-2 flex-wrap">
          {videoLink && (
            <button
              onClick={() => setShowVideo(true)}
              className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'flex')}
            >
              Watch Demo <Play className="h-5 w-5 ml-1" />
            </button>
          )}

          {projectLink && (
            <Link
              href={projectLink}
              target="_blank"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'flex')}
            >
              Visit Project <ArrowUpRight className="h-5 w-5 ml-1" />
            </Link>
          )}
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
