import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigations.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="nav-logo">{"<el/ser>"}</div>
        <div className="nav-links-container">
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
