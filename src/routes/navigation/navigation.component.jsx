import { Outlet } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { Fragment, useContext } from "react";

import { NavigationContext } from "../../contexts/navigation.context";
import PageIcon from "../../components/page-icon/page-icon.component";
import NavLinks from "../../components/nav-links/nav-links.component";
import SideBar from "../../components/side-bar/side-bar.component";

import "./navigations.styles.scss";

const Navigation = () => {
  const { openSideBar, handleOpenSideBar } = useContext(NavigationContext);

  return (
    <Fragment>
      <header className="header-container">
        <PageIcon />
        <div
          className={`nav-menu ${openSideBar ? "active" : ""}`}
          onClick={handleOpenSideBar}
        >
          <RiMenuLine class="icon" />
        </div>
        {openSideBar ? <SideBar /> : <NavLinks />}
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
