import { useContext } from "react";
import { Link } from "react-router-dom";

import { NavigationContext } from "../../contexts/navigation.context";

const NavLinks = () => {
  const { PATH_LIST } = useContext(NavigationContext);

  return (
    <nav id="nav-links" className="hidden md:flex md:p-0 md:m-0">
      {PATH_LIST.map(({ to, text }) => (
        <Link
          key={text}
          id="nav-link"
          to={to}
          className="font-poppins no-underline text-smoke-500 p-6"
        >
          {text}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
