import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  const experiences = [
    {
      duration: "Oct 2023 - Sep 2024",
      position: "Game Developer",
      company: "SheTech | Dubai, UAE",
      details: [
        'I was part of a team of game developers, overseeing the "Virtual Adventure Workout" project.',
        "Crafted innovative game mechanics, menus, and intricate systems, including Heart Rate Tracking and calorie tracking.",
        "Established seamless data flow between games and a comprehensive dashboard, enhancing user experience and data analysis.",
        "I developed very intresiting gameplay designs , Npc behaviour and sound system using FMOD.",
      ],
      projects: [
        "VR Warmup Module",
        "Celestial Ride Odyssey: VR Biking Module",
        "King Khaled Foundation XR Car Carbon Emission",
        "Baha an XR mounmental game similar to Pokemon Go"
      ],
    },
    {
      duration: "Jan 2023 - Jun 2023",
      position: "Game Developer Internship",
      company: "Herodot Studio | Tunis, Tunisia",
      details: [
        "Worked with a team of developers on various games.",
        "Optimized Mobile Experience.",
        "Worked with Unity UI.",
      ],
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className="gap-2">
        <Briefcase className="h-5 w-5" />
        Work Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Work Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col gap-5">
        {experiences.map((exp, index) => (
          <div className="w-full h-fit flex" key={index}>
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.2 + index * 0.1}
              className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md"
            >
              {exp.duration}
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.2 + index * 0.1}
              className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md"
            >
              <div className="text-2xl font-rubik max-sm:text-xl">
                {exp.position}, <br />
                {exp.company}
              </div>
              <ul className="list-disc ml-5 font-poppins text-base text-primary max-sm:text-xs">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              {exp.projects && (
                <p className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
                  <strong>Projects:</strong> {exp.projects.join(", ")}
                </p>
              )}
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};
export default educationPage;
