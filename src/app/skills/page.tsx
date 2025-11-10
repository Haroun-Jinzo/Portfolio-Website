import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from '../../../public/html.png'
import css from '../../../public/css.png'
import scss from '../../../public/scss.png'
import js from '../../../public/js.png'
import ts from '../../../public/ts.png'
import react from '../../../public/react.png'
import nextjs from '../../../public/nextjs.jpeg'
import cplus from '../../../public/c++.jpeg'
import tailwind from '../../../public/tailwindcss.png'
import github from '../../../public/github.png'
import vscode from '../../../public/vscode.png'
import FramerWrapper from "@/components/animation/FramerWrapper";
const skillPage = () => {

    const language = [
        {alt:"html", img:html},
        {alt:"css", img:css},
        {alt:"js", img:js},
        {alt:"ts", img:ts},
        {alt:"cplus", img:cplus},
    ]
    const framework = [
        {alt:"react", img:react},
        {alt:"nextjs", img:nextjs},
        {alt:"scss", img:scss},
        {alt:"tailwind", img:tailwind},
        {alt:"github", img:github},
        {alt:"vscode", img:vscode},
    ]
       

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>
        <FramerWrapper y={0} x={200} >

        <p className="text-[#3a0b0b] font-poppins text-xl w-full text-primary max-sm:text-lg bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md">
        Game Developer & Software Engineer with an experience of building immersive games and 1 year in a professional work environment (mobile, VR/AR, desktop) and high-performance systems. Expertise in Unity, C++ engine development, and AI integration, with a focus on clean, optimized code.<br/>

        Core Skills:<br/>

        prototyped few games (turn base card game, hack-and-slash, endless runner) and a custom C++ game engine (OpenGL, assimp, STB_Image)(still very early and getting updates).<br/>

        Engineered VR healthcare platforms with real-time biometric tracking and AR exploration games (Niantic Lightship).<br/>

        Developed AI/ML systems (C++/Python) for salary prediction and procedural tools cutting design time.<br/>

        Optimized critical systems (A* pathfinding, heap algorithms) for scalable 3D navigation and world generation.<br/>

        Shipped Impact:<br/>

        Delivered a carbon footprint app for King Khalid Foundation.<br/>

        Desinged custom C++ DL, ML system(still very early and getting updates).<br/>

        Tech Stack:<br/>
        Languages: C#, C++, Python | Engines: Unity | Library: OpenGL, assimp, STB_Image | Tools: FMOD, Git, Kafka, .net, anaconda | AI: Scikit-learn, Neural Networks, ML, DL<br/>




        </p>
        </FramerWrapper>
        {/* <FramerWrapper y={100} delay={0.30} className="block">
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Programming Languages
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={language} />
        </div>
        </FramerWrapper>
        <FramerWrapper  className="block" y={100} delay={0.32}>
        <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
           Framework/Libraries and Version Control
        </h1>
        <div className="w-full h-fit flex-row flex justify-between items-center">
        <SkillsFooter items={framework} />
        </div>
        </FramerWrapper> */}
      </div>
    </div>
  );
};

export default skillPage;
