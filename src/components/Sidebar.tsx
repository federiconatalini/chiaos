import Hambuger from '../icon/hamburger';

interface ISidebar {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: ISidebar) => {
  return (
    <>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-400 text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-1000 ease-out `}
        >
          <Hambuger className="m-[18px]" />
          <ul className="mt-4 flex flex-col items-start p-4">
            <li className="py-8 px-4">Home</li>
            <li className="py-8 px-4">About</li>
            <li className="py-8 px-4">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
