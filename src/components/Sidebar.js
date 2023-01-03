import style from "../styles/Sidebar.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Link to="/">
        <div style={{ padding: "25px" }}>
          <img src={Logo} style={{ width: "200px" }} draggable="false" />
        </div>
      </Link>
      <div className={style.sections}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
        <Link to="/Search" style={{ textDecoration: "none", color: "white" }}>
          Search
        </Link>
        <Link to="/Createplaylist" style={{ textDecoration: "none", color: "white  " }} >
          Playlist
        </Link>
      </div>
    </div>
  );
};
