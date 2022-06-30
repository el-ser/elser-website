import { Link } from "react-router-dom";

import "./page-icon.styles.scss";

const PageIcon = () => {
  return (
    <div className="brand-title">
      <Link to={"/"}>
        <span className="first-half">{"<el"}</span>
        <span className="separator">{"/"}</span>
        <span className="second-half">{"ser>"}</span>
      </Link>
    </div>
  );
};

export default PageIcon;
