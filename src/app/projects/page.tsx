"use client";

import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import React, { useState } from "react";

const ProjectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Celestial Ride Odyssey",
      description:
        `While gameplay elements may vary across levels, the metrics we collect remain consistent. This ensures continuity in tracking the player's
         performance and allows for comprehensive analysis regardless of the specific challenges presented in each level.`,
      tags: ["Unity", "VR/AR", "Game Design"],
      videoLink: "https://drive.google.com/file/d/1GABpCwn7PFBv-_CPqVSTvVV_ZlSmETGr/view?usp=drive_link",
      Image: "/BikingAssets.jpg",
    },
   
    {
      title: "Virtual Adventur Workout",
      description:
        "Step into a new era with our VR health system. It integrates virtual reality for precision in patient care, with intuitive interfaces and real-time insights. ",
      tags: ["Unity", "VR/AR", "Game Design"],
      videoLink: "https://youtu.be/dlesYVUaPOs",
      Image: "/Projects/VAWLogo.png",
    },
    {
      title: "The Training Nova",
      description:
        "Unravel the chilling mystery of your family's demise in this psychological horror game, designed for Android and iOS. As you delve into your fragmented memories, each relived moment brings you closer to the truth—but at the cost of your sanity.",
      tags: ["Unity", "VR/AR", "Game Design"],
      videoLink: "https://drive.google.com/file/d/1IGrnolFxSuY-OsUvQakQHbkHY0AfgoSs/view?usp=drive_link",
      Image: "/Screenshot_309.png",
    },
    {
      title: "Turn-Based Tactical Card",
      description:
        "Designed a top-down tactical card game combining turn-based combat with dynamic card mechanics and strategic AI opponents. The game features a unique card system where players can draw, play, and upgrade cards to influence the battlefield. Each card represents a character or action, allowing for diverse strategies and gameplay styles. The AI adapts to player tactics, providing a challenging experience. The project emphasizes strategic depth, player choice, and engaging combat mechanics.",
      tags: ["Unity", "Game Design"],
      videoLink: "https://drive.google.com/file/d/1TaYUrhgpM9qOuphTKTa49Y8_OPJKS0R7/view?usp=drive_link",
      Image: "/unityGames.jpg",
    },

    {
      title: "Hack-and-Slash Combat System with Parrying",
      description:
        "Built a real-time combat system with parrying mechanics and adaptive music using FMOD and Integrated AI-driven enemy behaviors and combo systems for fluid combat interactions. The project focuses on creating a dynamic and engaging combat experience, allowing players to execute combos, parry attacks, and experience responsive audio feedback that enhances immersion. The AI adapts to player actions, providing a challenging and rewarding gameplay loop.",
      tags: ["Unity","Game Design"],
      videoLink: "https://drive.google.com/file/d/1aB20RAfZZNA3DTBBLVpZD8MP-yqBGkor/view?usp=drive_link",
      Image: "/unityGames.jpg",
    },

    {
      title: "Procedural World Generation Engine",
      description:
        "Technologies: Unity, C#, Perlin Noise, Custom Algorithms. Developed a terrain generation system creating forests, deserts, and mountains, Optimized chunk loading for seamless open-world exploration with minimal performance overhead.",
      tags: ["Unity", "Research"],
      videoLink: "https://drive.google.com/file/d/1NF_N-8DQClz9C7yKQydbu6zokqml0_3D/view?usp=drive_link",
      Image: "/Procedural.jpg",
    },

    {
      title: "Pathfinding with Heap-Optimized 3D Grid System",
      description:
        "Engineered a high-performance pathfinding system using heap sorting.",
      tags: ["Unity", "AI", "Research"],
      videoLink: "https://drive.google.com/file/d/1e-UAl27ISLV5OSHTxgs6rLonLaz5iNq6/view?usp=drive_link",
      Image: "/path.gif",
    },

    {
      title: "Little Artist",
      description:
        "an interactive iOS application designed to inspire creativity in children through engaging drawing activities. The app features a simple and intuitive user interface tailored for young users, providing a fun and educational platform to explore their artistic talents. It includes a variety of coloring pages, drawing tools, and customization options",
      tags: ["Unity", "Mobile Game"],
      videoLink: "https://drive.google.com/file/d/1WcaAintbpSRgYr1of8f383IHbCeBJWE_/view?usp=sharing",
      Image: "/Projects/drawingBook.png",
    },
    {
      title: "AR Exploration Game (Niantic Lightship)",
      description:
        "Developed a Pokémon GO-style AR game using real-world geolocation data, enabling users to discover and interact with virtual POIs. ",
      tags: ["Unity", "VR/AR", "Game Design", "Research"],
      videoLink: "https://drive.google.com/file/d/1j5kes9Y3KpTYZMAzYlLSuGUXcj6j9p6c/view?usp=drive_link",
      Image: "/niantic.png",
    },

    {
      title: "2D Infinite Vertical Scroller Game",
      description:
        "Built a mobile-friendly endless jumper with procedurally generated obstacles. ",
      tags: ["Unity", "Game Design"],
      videoLink: "https://drive.google.com/file/d/1YuVKOfFXNFKJTiPPlIAnLeyfzN_9YxLp/view?usp=drive_link",
      projectLink: "https://github.com/Haroun-Jinzo/2dEndlessRunner",
      Image: "/unityGames.jpg",
    },
    {
      title: "King Khaled Foundation - Carbon Emission",
      description:
        "A project made for King Khalid Foundation. It calculates the carbon footprint of the user and also shows how much carbon is reduced if the user is not using the device properly. ",
      tags: ["WebGL", "Unity"],
      videoLink: "https://rupeespot.com/",
      Image: "/Projects/kkf-master-brand.jpg",
    },
    {
      title: "Custom C++ Game Engine (OpenGL)",
      description:
        "Technologies: C++, OpenGL, Assimp, STB_Image, Octree Collision. Developed a 3D engine with dynamic lighting, model loading, and octree-optimized collisions.",
      tags: ["C++", "Game Engine", "OpenGL"],
      videoLink: "https://drive.google.com/file/d/1QfCzkxXwajf_oI0pMQClLjDb4H2OyOuM/view?usp=drive_link",
      Image: "/c++.jpeg",
    },
    
    {
      title: "Salary Prediction Model In Python Anaconda",
      description:
        "Trained regression models for salary prediction. Deployed models via REST APIs and Streamlit dashboards for real-time user interaction.",
      tags: ["AI", "Machine Learning", "Python"],
      videoLink: "https://drive.google.com/file/d/19lBMVYQymCwcft_6z0jJJIR9NU1z9SC7/view?usp=drive_link",
      projectLink: "https://github.com/Haroun-Jinzo/ML-Model-ExoPlanet",
      Image: "/ML-Salary.png",
    },
    {
      title: "Exo Planet Detection Model In Python Anaconda",
      description:
        "Trained regression models for exoplanet identification. Deployed models via REST APIs and Streamlit dashboards for real-time user interaction.",
      tags: ["AI", "Machine Learning", "Python"],
      videoLink: "https://drive.google.com/file/d/1KznMF-NrBOHZmRgPBgJFDVYYnPsK92Pv/view?usp=drive_link",
      projectLink: "https://github.com/Haroun-Jinzo/SalaryModel",
      Image: "/ExoPlanet-ML.jpeg",
    },
    {
      title: "C++ ML/DL in STL",
      description:
        "Technologies: C++, STL, K-Means, K-NN, Neural Networks. Built ML algorithms from scratch (K-Means, K-NN, neural networks) in C++.",
      tags: ["C++", "Machine Learning", "Deep Learning"],
      projectLink: "https://github.com/Haroun-Jinzo/ML-DL-project/",
      Image: "/c++.jpeg",
    },
    {
      title: "Scalable Recommendation Engine Backend",
      description:
        "Technologies: gRPC, GraphQL, Kafka, JWT, REST. Designed a microservice architecture for user authentication, product cataloging, and recommendations.",
      tags: ["C#", "asp.net", "Backend"],
      projectLink: "https://github.com/Haroun-Jinzo/Microservices/",
      Image: "/netCsharp.png",
    },
    {
      title: "Library Management System",
      description:
        "Technologies: C#, .NET, SQLite, LiveCharts. Created a desktop app automating book/member tracking and loan management, Integrated LiveCharts for dynamic dashboards visualizing borrowing trends and overdue fees.",
      tags: ["C#", "winforms", "Desktop App"],
      projectLink: "https://github.com/Haroun-Jinzo/.netLibrary/",
      Image: "/net_winforms.png",
    },

  ];

    // All unique tags
    const allTags = Array.from(new Set(Projects.flatMap((project) => project.tags)));

    const [activeTag, setActiveTag] = useState("All");
  
    // Filter projects based on active tag
    const filteredProjects = activeTag === "All"
      ? Projects
      : Projects.filter((project) => project.tags.includes(activeTag));
  
    return (
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
        <Badge className=" gap-2">
          <Layers className="h-5 w-5" />
          Projects
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Projects</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base">
              I love to Build Cool Projects. Here, you&#x27;ll find a curated
              collection of my creative endeavors and technical projects. Each
              piece represents a journey of innovation, problem-solving, and
              continuous learning. Feel free to explore this showcase of my
              passion and expertise in action.
            </p>
          </FramerWrapper>
        </div>
  
        {/* Tag Menu */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            className={`px-3 py-1 rounded-full ${activeTag === "All" ? "bg-primary text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTag("All")}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full ${activeTag === tag ? "bg-primary text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
  
        {/* Project Cards */}
        <div className="w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
          {filteredProjects.map((val, indx) => {
            return <ProjectCards key={indx} value={val} num={indx} />;
          })}
        </div>
      </div>
    );
  };

export default ProjectsPage;
