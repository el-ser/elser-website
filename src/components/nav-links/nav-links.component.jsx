import { Link } from "react-router-dom";

import "./nav-links.styles.scss";

const NavLinks = () => {
  return (
    <nav className={`nav-links`}>
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
  );
};

export default NavLinks;
