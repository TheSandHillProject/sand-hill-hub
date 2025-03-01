
import { ProjectProps } from "../components/ProjectCard";

interface PathData {
  title: string;
  description: string;
  color: string;
  longDescription: string;
  projects: ProjectProps[];
}

const pathsData: PathData[] = [
  {
    title: "Principles",
    description: "Core values and guidelines",
    color: "gray-800",
    longDescription: "Discover the foundational principles that guide our open source community. These principles shape everything we do and ensure we stay true to our mission.",
    projects: [
      {
        title: "Open Source Manifesto",
        description: "Our core beliefs and commitments to open source development.",
        link: "#manifesto"
      },
      {
        title: "Contributor Guidelines",
        description: "How to contribute effectively to our projects and community.",
        link: "#guidelines"
      },
      {
        title: "Ethical Framework",
        description: "Ethical considerations that guide our development practices.",
        link: "#ethics"
      }
    ]
  },
  {
    title: "Foundry",
    description: "Incubation projects and initiatives",
    color: "gray-700",
    longDescription: "The Foundry is where new ideas are born and nurtured. Explore our incubation projects that are shaping the future of open source technology.",
    projects: [
      {
        title: "Project Alpha",
        description: "A cutting-edge data visualization library for complex datasets.",
        link: "#alpha"
      },
      {
        title: "Project Beta",
        description: "Simplified machine learning tools for developers of all skill levels.",
        link: "#beta"
      },
      {
        title: "Project Gamma",
        description: "Next-generation authentication system with enhanced security.",
        link: "#gamma"
      },
      {
        title: "Project Delta",
        description: "Open source infrastructure for decentralized applications.",
        link: "#delta"
      }
    ]
  },
  {
    title: "Enterprise",
    description: "Solutions for organizations",
    color: "gray-900",
    longDescription: "Our Enterprise path focuses on providing robust open source solutions that meet the needs of organizations of all sizes.",
    projects: [
      {
        title: "Enterprise Framework",
        description: "Comprehensive tools for integrating open source into enterprise environments.",
        link: "#framework"
      },
      {
        title: "Compliance Toolkit",
        description: "Tools and resources for maintaining compliance while using open source.",
        link: "#compliance"
      },
      {
        title: "Scale Solution",
        description: "Infrastructure solutions for scaling open source applications.",
        link: "#scale"
      }
    ]
  }
];

export default pathsData;
