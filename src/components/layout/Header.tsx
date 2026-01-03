import style from "../../styles/layout.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.headerContainer}>
      <header className={style.headerWrapper}>
        <span className={style.headerLogo}>
          <Link to={"/"}>M.C.</Link>
        </span>
        <div>
          <ul className={style.navList}>
            <li>
              <div className={style.gradient}>
                <Link to={"/"}>Home</Link>
              </div>
            </li>
            <li>
              <div className={style.gradient}>
                <Link to={"/about"}>About</Link>
              </div>
            </li>
            <li>
              <div className={style.gradient}>
                <Link to={"/projects"}>Projects</Link>
              </div>
            </li>
            <li>
              <div className={style.gradient}>
                <Link to={"/contact"}>Contact</Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
export default Header;
