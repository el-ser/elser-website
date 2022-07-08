import { Outlet } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { Fragment, useContext } from "react";

import { NavigationContext } from "../../contexts/navigation.context";
import PageIcon from "../../components/page-icon/page-icon.component";
import NavLinks from "../../components/nav-links/nav-links.component";
import SideBar from "../../components/side-bar/side-bar.component";

const Navigation = () => {
  const { openSideBar, handleOpenSideBar } = useContext(NavigationContext);

  return (
    <Fragment>
      <header
        id="header-container"
        className="flex fixed top-0 left-0 right-0 px-[5%] justify-between items-center bg-navy-blue-800"
      >
        <PageIcon />
        <div
          id="nav-menu"
          className="right-4 w-12 h-10 cursor-pointer"
          onClick={handleOpenSideBar}
        >
          <RiMenuLine id="burger-icon" className="w-full h-full md:hidden" />
        </div>
        {openSideBar ? <SideBar /> : <NavLinks />}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
