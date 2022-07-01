import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./page-icon.styles.scss";

const PageIcon = () => {
  return (
    <div className="brand-title">
      <Link to={"/"}>
        <Logo />
      </Link>
    </div>
  );
};

export default PageIcon;
