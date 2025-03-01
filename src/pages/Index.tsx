
import React, { useState } from "react";
import Header from "../components/Header";
import PathButton from "../components/PathButton";
import PathSection from "../components/PathSection";
import pathsData from "../data/pathsData";
import { motion } from "framer-motion";

const Index = () => {
  const [activePath, setActivePath] = useState<number | null>(null);

  const handlePathClick = (index: number) => {
    setActivePath(activePath === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Sand Hill Project</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A open source community dedicated to giving subject matter experts direct control over the tools of the AI era.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-medium mb-8 text-center">Explore Our Paths</h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch">
            {pathsData.map((path, index) => (
              <PathButton
                key={path.title}
                title={path.title}
                description={path.description}
                isActive={activePath === index}
                onClick={() => handlePathClick(index)}
                color={path.color}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-12">
          {pathsData.map((path, index) => (
            <PathSection
              key={path.title}
              title={path.title}
              description={path.longDescription}
              projects={path.projects}
              isActive={activePath === index}
              color={path.color}
            />
          ))}
        </div>
      </main>

      <footer className="w-full py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} The Sand Hill Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
