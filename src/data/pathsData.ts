
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
    description: "Mathematical foundations of inference-based compute",
    color: "logo-red",
    longDescription: "This is a deep dive on the fundamentals of modern ML. The curse of dimensionality. Semantic representation in embedding space. \
      Using differentiable models to compute discrete data. Some musings on math and physics in the world of infinite compute.",
    projects: [
      {
        title: "Our Story & Mission",
        description: "How a physicist left Physics™ and traversed the Valley of Death",
        link: "#manifesto"
      },
      {
        title: "Source Material",
        description: "Websites, Papers and Videos that I've found useful in learning the basics of modern ML and AI",
        link: "#material"
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
    description: "Backend development of neural networks",
    color: "logo-orange",
    longDescription: "The Foundry is where we actually dive into the nitty gritty aspects of implementation. \
      Pytorch. Cuda. GPUs vs. CPUs. This is where the rubber meets the road for accelerated compute.",
    projects: [
      {
        title: "Project Alpha",
        description: "Build and train a Transformer Model with your own data",
        link: "#alpha"
      },
      {
        title: "Project Beta",
        description: "Stable Diffusion and high-precision numerical time-series prediction",
        link: "#beta"
      },
      {
        title: "Project Gamma",
        description: "Data summary and heirarchical language through symbol chunking.",
        link: "#gamma"
      },
      {
        title: "Project Delta",
        description: "Building an ontology for diverse software and unstructured data.",
        link: "#delta"
      }
    ]
  },
  {
    title: "Enterprise",
    description: "How to build the future with open-source dev tools",
    color: "logo-blue",
    longDescription: "",
    projects: [
      {
        title: "Source Material",
        description: "A bunch of awesome tools and open source software that make up my AI productivity stack.",
        link: "#material"
      },
      {
        title: "Some Killer Apps",
        description: "Here are some fun apps that I've built using these tools that took less than a day.",
        link: "#compliance"
      },
      {
        title: "Wave Functions & Promptin Engineering",
        description: "How to get the most out of the application layer of inference based models. ",
        link: "#scale"
      }
    ]
  }
];

export default pathsData;
