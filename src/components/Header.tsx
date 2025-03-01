
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full py-6 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <img 
          src="/lovable-uploads/50f3f0b0-ccd5-41a8-a5eb-ac63c9526ace.png" 
          alt="The Sand Hill Project Logo" 
          className="h-20 md:h-24 object-contain mb-4 md:mb-0"
        />
      </div>
    </header>
  );
};

export default Header;
