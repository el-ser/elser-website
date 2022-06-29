import { Outlet, Link } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { Fragment } from "react";
import "./navigations.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <header className="header-container">
        <div className="brand-title">
          <Link to={"/"}>
            <span className="first-half">{"<el"}</span>
            <span className="separator">{"/"}</span>
            <span className="second-half">{"ser>"}</span>
          </Link>
        </div>
        <RiMenuLine className="nav-menu" />
        <nav className="nav-links">
          <Link className="nav-link" to="/">
            About
          </Link>
          <Link className="nav-link" to="/blogs">
            Blogs
          </Link>
          <Link className="nav-link" to="/experience">
            Experience
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
