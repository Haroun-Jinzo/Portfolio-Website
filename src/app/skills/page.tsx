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

        <p className="text-[#3a0b0b] font-poppins text-xl w-full text-primary max-sm:text-lg">
        Game Developer & Software Engineer with 4+ years of experience building immersive games and 1 year in a professional work environment (mobile, VR/AR, desktop) and high-performance systems. Expertise in Unity, C++ engine development, and AI integration, with a focus on clean, optimized code.<br/>

        Core Skills:<br/>

        Built many games (card strategy, hack-and-slash, endless runners) and a custom C++ game engine (OpenGL, octree collision, 25% latency reduction).<br/>

        Engineered VR healthcare platforms with real-time biometric tracking and AR exploration games (Niantic Lightship), boosting engagement by 30%.<br/>

        Developed AI/ML systems (C++/Python) for salary prediction (95% accuracy) and procedural tools cutting design time by 70%.<br/>

        Optimized critical systems (A* pathfinding, heap algorithms) for scalable 3D navigation and world generation.<br/>

        Shipped Impact:<br/>

        Delivered a carbon footprint calculator for 500+ users at King Khalid Foundation.<br/>

        Outperformed Python ML libraries by 20% with a custom C++ framework.<br/>

        Tech Stack:<br/>
        Languages: C#, C++, Python | Engines: Unity, OpenGL | Tools: FMOD, Git, Kafka | AI: K-Means, Neural Networks<br/>




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
