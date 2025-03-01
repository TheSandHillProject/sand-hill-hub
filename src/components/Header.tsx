
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center w-full py-4 px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <img 
          src="lovable-uploads/b886e2e6-c532-47d4-923d-ca1476cf06ea.png" 
          alt="The Sand Hill Project Logo" 
          className="h-28 md:h-36 object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
