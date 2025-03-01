
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
  return (
    <button
      onClick={onClick}
      className={cn(
        "path-button w-full md:w-64 flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300",
        isActive 
          ? `bg-${color} text-white shadow-lg scale-[1.02]` 
          : "bg-white hover:bg-gray-50 text-gray-800 shadow-sm"
      )}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-balance opacity-90">{description}</p>
    </button>
  );
};

export default PathButton;
