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
      title: "Academic Project: Financial Report Analysis",
      description:
        " I designed Financial Report Analysis natural language processing system designed to automate the extraction, analysis, and insight generation from financial reports. The platform processes PDF documents.",
      tags: [ "Python", "NLP", "Spacy", "NLTK", "GenAI", "Neural Networks"],
      projectLink: "https://github.com/Haroun-Jinzo/FinancialReportAnalysis-NLP#",
      Image: "/Financial_Report_Analysis.png",
    },
    {
      title: "Personal Project: C++ ML Framework in STL",
      description:
        "Technologies: C++, STL, K-Means, K-NN, Neural Networks. Built ML algorithms from scratch (K-Means, K-NN, neural networks) in C++.",
      tags: ["C++", "Machine Learning", "Deep Learning", "Neural Networks"],
      projectLink: "https://github.com/Haroun-Jinzo/ML-DL-project/",
      Image: "/c++.jpeg",
    },
    {
      title: "Personal Project: Stock values Prediction Model",
      description:
        " Developed a stock values prediction model utilizing techniques such as LTSM and recurrent neural network in python. ",
      tags: ["Deep Learning", "LTSM", "RNN", "Python"],
      videoLink: "https://colab.research.google.com/drive/1LZfc5BjAuljD4GWJp5T6pp-NzFDVx-VT?usp=sharing",
      Image: "/Stock_Price_Prediction.png",
    },
    {
      title: " Intern Project: AI-Based Early Prediction of Pathogen Identification and Antibiotic Resistance from Blood Culture Signals",
      description:
        " •-Designed models that Identifies pathogens through blood culture cells and predict their antibiotic resistances.",
      tags: ["ScikitLearn", "Python", "Machine Learning", "Deep Learning"],
      Image: "/AI_based_Pathogens_Detection.png",
    },
    {
      title: "Personal Project: Turn-Based Tactical Card Game Powered by GOAP AI system",
      description:
        "Designed a top-down tactical card game combining turn-based combat with dynamic card mechanics and strategic AI opponents. Each card represents a character or action, allowing for diverse strategies and gameplay styles. The AI adapts to player tactics, providing a challenging experience.",
      tags: ["Unity", "Game Design", "AI"],
      videoLink: "https://drive.google.com/file/d/1TaYUrhgpM9qOuphTKTa49Y8_OPJKS0R7/view?usp=drive_link",
      Image: "/unityGames.jpg",
    },
    {
      title: "Academic Project: Narrative game with reinforcement learning",
      description:
        "Developed a game where AI suspects learn to lie, evade, and deceive while the human player tries to catch them, powered with reinforcement learning and gemini API.",
      tags: ["Python", "Reinforcement Learning", "Unity", "Gamification"],
      projectLink: "https://github.com/Haroun-Jinzo/ReinforcementLearning_NarrativeGame/tree/main?tab=readme-ov-file",
      Image: "/Reinforcement_Learning.png",
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
      title: "Salary Prediction Model In Python Anaconda",
      description:
        "Trained regression models for salary prediction. Deployed models via REST APIs and Streamlit dashboards for real-time user interaction.",
      tags: ["AI", "Machine Learning", "Python"],
      videoLink: "https://drive.google.com/file/d/19lBMVYQymCwcft_6z0jJJIR9NU1z9SC7/view?usp=drive_link",
      projectLink: "https://github.com/Haroun-Jinzo/ML-Model-ExoPlanet",
      Image: "/ML-Salary.png",
    },
    {
      title: "Personal Project: Procedural World Generation",
      description:
        "Technologies: Unity, C#, Perlin Noise, Custom Algorithms. Developed a terrain generation system creating forests, deserts, and mountains, Optimized chunk loading for seamless open-world exploration with minimal performance overhead.",
      tags: ["Unity", "Research"],
      videoLink: "https://drive.google.com/file/d/1NF_N-8DQClz9C7yKQydbu6zokqml0_3D/view?usp=drive_link",
      Image: "/Procedural.jpg",
    },

    {
      title: "Personal Project: Heap-Optimized Pathfinding",
      description:
        "Engineered a high-performance pathfinding system using heap sorting.",
      tags: ["Unity", "AI", "Research"],
      videoLink: "https://drive.google.com/file/d/1e-UAl27ISLV5OSHTxgs6rLonLaz5iNq6/view?usp=drive_link",
      Image: "/path.gif",
    },
    {
      title: "Personal Project: Custom C++ Game Engine (OpenGL)",
      description:
        "Technologies: C++, OpenGL, Assimp, STB_Image, Octree Collision. Developed a 3D engine with dynamic lighting, model loading, and octree-optimized collisions.",
      tags: ["C++", "Game Engine", "OpenGL"],
      videoLink: "https://drive.google.com/file/d/1QfCzkxXwajf_oI0pMQClLjDb4H2OyOuM/view?usp=drive_link",
      Image: "/c++.jpeg",
    },
    
    {
      title: "Professional Work: Celestial Ride Odyssey",
      description:
        `While gameplay elements may vary across levels, the metrics we collect remain consistent. This ensures continuity in tracking the player's
         performance and allows for comprehensive analysis regardless of the specific challenges presented in each level.`,
      tags: ["Unity", "VR/AR", "Game Design"],
      videoLink: "https://drive.google.com/file/d/1GABpCwn7PFBv-_CPqVSTvVV_ZlSmETGr/view?usp=drive_link",
      Image: "/BikingAssets.jpg",
    },
   
    {
      title: "Professiona Work: Virtual Adventur Workout",
      description:
        "Step into a new era with our VR health system. It integrates virtual reality for precision in patient care, with intuitive interfaces and real-time insights. ",
      tags: ["Unity", "VR/AR", "Game Design"],
      videoLink: "https://youtu.be/dlesYVUaPOs",
      Image: "/Projects/VAWLogo.png",
    },
    {
      title: "Professional Work: The Training Nova",
      description:
        "Unravel the chilling mystery of your family's demise in this psychological horror game, designed for Android and iOS. As you delve into your fragmented memories, each relived moment brings you closer to the truth—but at the cost of your sanity.",
      tags: ["Unity", "VR/AR", "Game Design"],
      videoLink: "https://drive.google.com/file/d/1IGrnolFxSuY-OsUvQakQHbkHY0AfgoSs/view?usp=drive_link",
      Image: "/Screenshot_309.png",
    },
    {
      title: "Academic Project: Recommendation Engine Backend",
      description:
        "Technologies: gRPC, GraphQL, Kafka, JWT, REST. Designed a microservice architecture for user authentication, product cataloging, and recommendations.",
      tags: ["C#", "asp.net", "Backend"],
      projectLink: "https://github.com/Haroun-Jinzo/Microservices/",
      Image: "/netCsharp.png",
    },
    {
      title: "Academic Project: Library Management System",
      description:
        "Technologies: C#, .NET, SQLite, LiveCharts. Created a desktop app automating book/member tracking and loan management, Integrated LiveCharts for dynamic dashboards visualizing borrowing trends and overdue fees.",
      tags: ["C#", "winforms", "Desktop App"],
      projectLink: "https://github.com/Haroun-Jinzo/.netLibrary/",
      Image: "/net_winforms.png",
    },
    {
      title: "King Khaled Foundation - Carbon Emission",
      description:
        "A project made for King Khalid Foundation. It calculates the carbon footprint of the user and also shows how much carbon is reduced if the user is not using the device properly. ",
      tags: ["WebGL", "Unity"],
      videoLink: "https://rupeespot.com/",
      Image: "/Projects/kkf-master-brand.jpg",
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
            <p className="font-poppins text-lg w-full text-primary max-sm:text-base bg-gradient-to-r from-white/50 via-green-200/50 to-blue-600/50 p-4 rounded-lg shadow-md">
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
