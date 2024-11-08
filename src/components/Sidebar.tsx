import { useNavigate } from 'react-router-dom';
import Hambuger from '../icon/hamburger';
import SidebarItem from './SidebarItem';

interface ISidebar {
  isOpen: boolean;
}

const ItemSidebar = [
  {
    text: 'Home',
    goTo: '/',
  },
  {
    text: 'About',
    goTo: '/about',
  },
  {
    text: 'Contact',
    goTo: '/contact',
  },
];

const Sidebar = ({ isOpen }: ISidebar) => {
  const navigate = useNavigate();

  const handleClick = (destination: string) => {
    navigate(destination);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-400 text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-1000 ease-out `}
        >
          <Hambuger className="m-[18px]" />
          <ul className="mt-4 flex flex-col  ">
            {ItemSidebar.map((item, key) => (
              <SidebarItem
                key={key}
                text={item.text}
                onClick={() => handleClick(item.goTo)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
