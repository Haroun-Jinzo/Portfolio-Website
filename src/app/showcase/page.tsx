import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import Image from "next/image";
import FramerWrapper from "@/components/animation/FramerWrapper";

// Import your images from the public folder or any other folder
import img1 from "../../../public/vintageArt/IMG_8.jpg";
import img2 from "../../../public/Projects/0535942d-9650-4f9c-887c-3a88c66d49eephoto.jpeg";
import img3 from "../../../public/vintageArt/IMG_1.jpg";
import img4 from "../../../public/vintageArt/IMG_10.jpg";
import img5 from "../../../public/vintageArt/IMG_14.jpg";
import img6 from "../../../public/Projects/anim.gif";
import img7 from "../../../public/vintageArt/IMG_4.jpg";
import img8 from "../../../public/Projects/loading.gif";
import img9 from "../../../public/vintageArt/IMG_2.webp";
import img10 from "../../../public/vintageArt/IMG_13.jpg";

const SkillPage = () => {
  // Array of images with captions and custom tags
  const images = [
    { 
      src: img1, 
      alt: "nature vibes", 
      caption: "nature vibes", 
      width: 1920, 
      height: 800,
      tags: ["Nature", "Photography"]
    },
    { 
      src: img2, 
      alt: "SEA Expo", 
      caption: "Zelda", 
      width: 1920, 
      height: 800,
      tags: ["Figure", "Gaming"]
    },
    { 
      src: img3, 
      alt: "SEA Expo", 
      caption: "DBZ + NFS", 
      width: 1920, 
      height: 800,
      tags: ["Anime", "Gaming"]
    },
    { 
      src: img4, 
      alt: "SEA Expo", 
      caption: "Urban Life", 
      width: 1920, 
      height: 800,
      tags: ["Travel", "Adventure"]
    },
    { 
      src: img5, 
      alt: "SEA Expo", 
      caption: "Indie Games", 
      width: 1920, 
      height: 800,
      tags: ["Gaming", "Indie"]
    },
    { 
      src: img6, 
      alt: "SEA Expo", 
      caption: "Indie Games", 
      width: 1920, 
      height: 800,
      tags: ["Gaming", "Animation"]
    },
    { 
      src: img7, 
      alt: "SEA Expo", 
      caption: "street vibes", 
      width: 1920, 
      height: 800,
      tags: ["Cities", "Urban"]
    },
    { 
      src: img8, 
      alt: "SEA Expo", 
      caption: "Cute Auth Screen", 
      width: 1920, 
      height: 800,
      tags: ["UI", "Animation"]
    },

    { 
      src: img9, 
      alt: "SEA Expo", 
      caption: "city vibes", 
      width: 1920, 
      height: 800,
      tags: ["Cities", "Urban"]
    },

    { 
      src: img10, 
      alt: "SEA Expo", 
      caption: "Nature vibes", 
      width: 1920, 
      height: 800,
      tags: ["Nature", "Photography"]
    },
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-5 p-4 md:p-5">
      <Badge className="gap-2">
        <Lightbulb className="h-5 w-5" />
        Snapshot
      </Badge>
          <div className="flex flex-col gap-3">
          <Heading>Snapshots</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md">
              Ps: I like Photography and taking pictures of stuff.
            </p>
          </FramerWrapper>
        </div>
      <div className="flex flex-col gap-3 w-full">

        {/* Pinterest-like Masonry Layout */}
        <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid mb-4 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-lg shadow-md hover:shadow-xl overflow-hidden">
                <div className="relative w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto rounded-t-lg"
                  />
                </div>
                <div className="p-3 backdrop-blur-sm bg-white/30">
                  <p className="text-sm md:text-base font-medium">
                    {image.caption}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex flex-wrap gap-2">
                      {image.tags && image.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;