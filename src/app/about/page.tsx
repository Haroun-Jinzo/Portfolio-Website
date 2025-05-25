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
            Game & AI Developer And Game <br /> Designer.
          </Heading>
   
        <FramerWrapper y={0} x={100} >
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg">
          Hi Everyone, I am Haroun Khmiri from Zaghouan, Tunisia.
          I am currently studying for my engineering degree in Data Science & AI in Polytechnqiue Sousse.
          I have created there a new cutting edge VR training applications to track user progress over time.
          I am experienced in Unity, Unreal Engine, and C++.
          I also experimented with AI and Machine Learning, and I am currently working on a Secret project.
          I am a passionate gamer and I love to create games that are fun and engaging.
          I was employed as a Technical Game Designer at SheTech Studio in Riadh.

          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper className="w-full flex flex-row justify-between max-lg:flex-col " y={100} delay={0.30}>
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
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
