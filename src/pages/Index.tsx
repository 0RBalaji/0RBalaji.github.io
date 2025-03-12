import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Bot, Cpu, Github, Linkedin, Mail, CircuitBoard, GraduationCap, 
  Briefcase, Home, Trophy, Award, BadgeCheck, Star, Code, 
  Settings, Terminal, Database, Brain, Cog, ExternalLink,
  Navigation, Eye, GitBranch, Scan, Search, Map, Router, 
  FileCode, Binary, Coffee, Box, Database as DbIcon,
  Shapes, Ruler, Pencil, Boxes, Wrench, Wind, Leaf,
  Microchip, Radio, Laptop, Component, Workflow,
  BarChart, LineChart, PieChart, Sigma, ChartBar, ArrowUpDown,
  Play, Timer, Factory, Network, Wifi, SlidersHorizontal,
  GitFork, Wrench as Tools, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectDialog } from "@/components/sections/ProjectDialog";
import { TechnicalSkillsSection } from "@/components/sections/TechnicalSkillsSection";
import { SoftwareToolsSection } from "@/components/sections/SoftwareToolsSection";
import { IndustryCollaborationsSection } from "@/components/sections/IndustryCollaborationsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact info copied!",
      description: "My email has been copied to your clipboard."
    });
    navigator.clipboard.writeText("rajalbandi2balaji@gmail.com");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const backgroundVariants = {
    initial: {
      background: "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)"
    },
    animate: {
      background: [
        "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)",
        "linear-gradient(225deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)",
        "linear-gradient(405deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)",
        "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 100%)"
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const skillCategories = [{
    title: "Robotics",
    icon: <Bot className="w-10 h-10" />,
    skills: [{
      name: "ROS2",
      icon: <Terminal className="w-4 h-4 mr-2" />,
      image: "/ros.png"
    }, {
      name: "SLAM",
      icon: <Map className="w-4 h-4 mr-2" />,
      image: "/slam.png"
    }, {
      name: "Path Planning",
      icon: <Navigation className="w-4 h-4 mr-2" />,
      image: "/path.png"
    }, {
      name: "Computer Vision",
      icon: <Eye className="w-4 h-4 mr-2" />,
      image: "/cv.png"
    }, {
      name: "Kinematics",
      icon: <GitBranch className="w-4 h-4 mr-2" />,
      image: "/kinematics.png"
    }, {
      name: "Simulation",
      icon: <Play className="w-4 h-4 mr-2" />,
      image: "/simulation.png"
    }, {
      name: "Reverse Engineering",
      icon: <Scan className="w-4 h-4 mr-2" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }],
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }, {
    title: "Programming",
    icon: <Code className="w-10 h-10" />,
    skills: [{
      name: "Python",
      icon: <FileCode className="w-4 h-4 mr-2" />,
      image: "/python.png"
    }, {
      name: "C++",
      icon: <Binary className="w-4 h-4 mr-2" />,
      image: "/cpp.png"
    }, {
      name: "C",
      icon: <Code className="w-4 h-4 mr-2" />,
      image: "/c.png"
    }, {
      name: "Git",
      icon: <GitFork className="w-4 h-4 mr-2" />,
      image: "/git.png"
    }, {
      name: "SQL",
      icon: <DbIcon className="w-4 h-4 mr-2" />,
      image: "/sql.png"
    }, {
      name: "DBMS",
      icon: <Database className="w-4 h-4 mr-2" />,
      image: "/dbms.png"
    }],
    bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }, {
    title: "Modelling & Analysis",
    icon: <CircuitBoard className="w-10 h-10" />,
    skills: [{
      name: "CAD Modelling",
      icon: <Box className="w-4 h-4 mr-2" />,
      image: "/cad.png"
    }, {
      name: "CFD",
      icon: <Wind className="w-4 h-4 mr-2" />,
      image: "/cfd.png"
    }, {
      name: "Sustainability",
      icon: <Leaf className="w-4 h-4 mr-2" />,
      image: "/sustainability.png"
    }, {
      name: "Motion Study",
      icon: <Play className="w-4 h-4 mr-2" />,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
    }, {
      name: "FEA",
      icon: <Ruler className="w-4 h-4 mr-2" />,
      image: "/fea.png"
    }, {
      name: "3D Printing",
      icon: <Boxes className="w-4 h-4 mr-2" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }],
    bgImage: "https://images.unsplash.com/photo-14887235947-a955ef187fcc"
  }, {
    title: "Electronics",
    icon: <Cpu className="w-10 h-10" />,
    skills: [{
      name: "PCB Design",
      icon: <Component className="w-4 h-4 mr-2" />,
      image: "/pcb.png"
    }, {
      name: "I2C",
      icon: <CircuitBoard className="w-4 h-4 mr-2" />,
      image: "/i2c.png"
    }, {
      name: "SPI Interface",
      icon: <Radio className="w-4 h-4 mr-2" />,
      image: "/spi.png"
    }],
    bgImage: "https://images.unsplash.com/photo-1498058792275-0ad4aaf24ca7"
  }, {
    title: "Embedded Development",
    icon: <Microchip className="w-10 h-10" />,
    skills: [{
      name: "Microcontroller Programming",
      icon: <Cpu className="w-4 h-4 mr-2" />,
      image: "/microcontroller.png"
    }, {
      name: "Raspberry Pi",
      icon: <CircuitBoard className="w-4 h-4 mr-2" />,
      image: "/raspberry.png"
    }, {
      name: "Jetson Nano",
      icon: <Microchip className="w-4 h-4 mr-2" />,
      image: "/jetson.png"
    }, {
      name: "Sensor Fusion",
      icon: <Radio className="w-4 h-4 mr-2" />,
      image: "/sensor-fusion.png"
    }],
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  }, {
    title: "Automation",
    icon: <Cog className="w-10 h-10" />,
    skills: [{
      name: "PLC",
      icon: <Play className="w-4 h-4 mr-2" />,
      image: "/plc.png"
    }, {
      name: "Process Automation",
      icon: <Settings className="w-4 h-4 mr-2" />,
      image: "/process-automation.png"
    }, {
      name: "Industry 4.0",
      icon: <Network className="w-4 h-4 mr-4" />,
      image: "/industry40.png"
    }, {
      name: "IoT",
      icon: <Wifi className="w-4 h-4 mr-2" />,
      image: "/iot.png"
    }, {
      name: "Fleet Management",
      icon: <Map className="w-4 h-4 mr-2" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    }],
    bgImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }];

  const softwareTools = [
    {
      category: "Software & Tools",
      tools: [
        { name: "SolidWorks", image: "/solidworks.png" },
        { name: "ANSYS", image: "/ansys.png" },
        { name: "3D Experience", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
        { name: "MATLAB", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" },
        { name: "Simulink", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" },
        { name: "Codesys", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
        { name: "Altium", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
        { name: "Eagle", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
        { name: "Gazebo", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
        { name: "Github", image: "/git.png" },
        { name: "RobotStudio", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
        { name: "RoboAnalyser", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
        { name: "Mech Analyser", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
        { name: "VS Code", image: "/vscode.png" },
        { name: "Docker", image: "/docker.png" },
        { name: "Linux", image: "/linux.png" }
      ]
    }
  ];

  const collaborationProjects = [
    {
      title: "Industrial Automation Project",
      brief: "Implemented automated production line control systems",
      links: [
        { title: "View Project", url: "#" },
        { title: "Documentation", url: "#" }
      ]
    },
    {
      title: "Robotics Research Collaboration",
      brief: "Developed advanced robotic control algorithms",
      links: [
        { title: "View Research", url: "#" },
        { title: "Paper", url: "#" }
      ]
    }
  ];

  const projects = [
    {
      title: "Autonomous Mobile Robot",
      brief: "Developed a ROS2-based autonomous navigation system",
      description: "Full description of the autonomous mobile robot project...",
      technologies: ["ROS2", "Python", "Computer Vision", "SLAM"],
      images: ["/robot1.png", "/robot2.png"]
    },
    {
      title: "Smart Manufacturing System",
      brief: "Implemented an IoT-based manufacturing monitoring system",
      description: "Full description of the smart manufacturing system...",
      technologies: ["IoT", "Python", "Machine Learning", "Industrial Automation"],
      images: ["/manufacturing1.png", "/manufacturing2.png"]
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      <IntroSection 
        handleContactClick={handleContactClick}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      
      <AboutSection 
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />
      
      <ExperienceSection 
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <TechnicalSkillsSection
        skillCategories={skillCategories}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <SoftwareToolsSection
        softwareTools={softwareTools}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <IndustryCollaborationsSection
        collaborationProjects={collaborationProjects}
        setSelectedProject={setSelectedProject}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <AchievementsSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <FeaturedProjectsSection
        projects={projects}
        setSelectedProject={setSelectedProject}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        cardVariants={cardVariants}
        backgroundVariants={backgroundVariants}
      />

      <GetInTouchSection
        handleContactClick={handleContactClick}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-16 text-center"
      >
        <p className="text-2xl tracking-wide select-none text-slate-500 font-semibold text-center md:text-lg">
          "SCIENCE IS ELEGANT"
        </p>
      </motion.div>

      <ProjectDialog 
        selectedProject={selectedProject}
        onOpenChange={(open) => setSelectedProject(open ? selectedProject : null)}
        projects={projects}
      />
    </div>
  );
};

export default Index;
