
import React from "react";
import { cn } from "@/lib/utils";

interface PathButtonProps {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  color: string;
}

const PathButton = ({ 
  title,
  description,
  isActive,
  onClick,
  color
}: PathButtonProps) => {
  // Map color strings to TailwindCSS classes
  const getColorClasses = (colorName: string, isActive: boolean) => {
    if (isActive) {
      switch(colorName) {
        case 'primary-purple':
          return 'bg-[#9b87f5] text-white';
        case 'secondary-purple':
          return 'bg-[#7E69AB] text-white';
        case 'tertiary-purple':
          return 'bg-[#6E59A5] text-white';
        default:
          return 'bg-gray-800 text-white';
      }
    } else {
      switch(colorName) {
        case 'primary-purple':
          return 'hover:bg-[#9b87f5]/10 text-gray-800';
        case 'secondary-purple':
          return 'hover:bg-[#7E69AB]/10 text-gray-800';
        case 'tertiary-purple':
          return 'hover:bg-[#6E59A5]/10 text-gray-800';
        default:
          return 'hover:bg-gray-50 text-gray-800';
      }
    }
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "path-button w-full md:w-64 flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300",
        getColorClasses(color, isActive),
        isActive ? "shadow-lg scale-[1.02]" : "bg-white shadow-sm"
      )}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-balance opacity-90">{description}</p>
    </button>
  );
};

export default PathButton;
