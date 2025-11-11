import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anime" },
    { hobby: "Tech Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
       
          <Heading>
            AI systems Architecture & Data Scientist, Game Developer.
          </Heading>
   
        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg bg-gradient-to-r from-white/90 via-green-200/70 to-blue-600/50 p-4 rounded-lg shadow-md">
          Hi Everyone, I am Haroun Khmiri from Zaghouan, Tunisia.
          I am currently studying for my engineering degree in Data Science & AI in Polytechnqiue Sousse.
          I am Passionate AI and software engineer with hands-on experience in machine learning, deep learning, NLP, and system optimization.
          Skilled in designing intelligent models and developing scalable backend systems. Experienced in game development and real-time systems with Unity and OpenGL.
          Adept at bridging theory and practice through academic research, personal projects, and professional applications.

          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md" y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start "
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
