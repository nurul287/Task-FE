import React from 'react';

interface INavBar {
  title: string;
}

const Navbar: React.FC<INavBar> = ({ title }) => {

  return (
    <nav
      className='min-h-9 shadow-md flex items-center px-2 bg-[#94c947]'
    >
      <div className="ml-2">
        <p className="text-white font-bold text-xl">{title}</p>
      </div>
    </nav>
  );
};
export default Navbar;
