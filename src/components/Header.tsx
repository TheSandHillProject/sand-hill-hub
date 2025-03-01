
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full py-6 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <img 
          src="/lovable-uploads/b886e2e6-c532-47d4-923d-ca1476cf06ea.png" 
          alt="The Sand Hill Project Logo" 
          className="h-24 md:h-32 object-contain mb-2 md:mb-0"
        />
      </div>
    </header>
  );
};

export default Header;
