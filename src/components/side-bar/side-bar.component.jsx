import { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { NavigationContext } from "../../contexts/navigation.context";

const SideBar = () => {
  const { PATH_LIST, handleOpenSideBar } = useContext(NavigationContext);

  return (
    <aside className="flex flex-col h-full w-3/5 fixed top-0 right-0 bg-navy-blue-400 z-10">
      <RiCloseFill
        id="close-sidebar-button"
        className="w-10 h-10 pointer-events-auto"
        onClick={handleOpenSideBar}
      />

      <nav
        id="nav-links"
        className="flex flex-col h-full justify-start items-center"
      >
        {PATH_LIST.map(({ to, text }) => (
          <Link
            key={text}
            id="nav-link"
            to={to}
            className="font-poppins no-underlin text-smoke-500 py-8 text-2xl"
          >
            {text}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
