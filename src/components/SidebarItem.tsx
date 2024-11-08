interface ISidebar {
  onClick?: () => void;
  text: string;
}

const SidebarItem = ({ onClick, text }: ISidebar) => {
  return (
    <li
      onClick={onClick}
      className="w-full h-full flex justify-start pl-4 py-8 px-4 hover:bg-gray-500 hover:text-white transition-colors duration-200"
    >
      {text}
    </li>
  );
};

export default SidebarItem;
