import { useContext } from "react";
import { RiCloseFill } from "react-icons/ri";

import { NavigationContext } from "../../contexts/navigation.context";
import NavLinks from "../nav-links/nav-links.component";

import "./side-bar.styles.scss";
const SideBar = () => {
  const { handleOpenSideBar } = useContext(NavigationContext);
  return (
    <aside>
      <RiCloseFill className="close-side-bar" onClick={handleOpenSideBar} />

      <NavLinks />
    </aside>
  );
};

export default SideBar;
