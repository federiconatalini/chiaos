import { useState } from 'react';
import Hambuger from '../icon/hamburger';
import Sidebar from './Sidebar';

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex justify-start w-full">
      <button onClick={() => openSideBar()}>
        <Hambuger />
        <Sidebar isOpen={isOpen} />
      </button>
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="font-sans">CHIAOS</h1>
      </div>
    </div>
  );
};
export default Topbar;
