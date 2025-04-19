import "./Header.scss";
import { IoIosPlay } from "react-icons/io";

function Header() {
  return (
    <div className="Header_container">
      
      <div className="Header">
        <div className="Header_logo">
          <h1>eNno</h1>
        </div>

        <div className="Header_menu">
          <ul className="Header_menu--list-mainmenu">
            <li>
              <a className="item-mainmenu" href="">
                Home
              </a>
            </li>
            <li>
              <a className="item-mainmenu" href="">
                About
              </a>
            </li>
            <li>
              <a className="item-mainmenu" href="">
                Services
              </a>
            </li>
            <li>
              <a className="item-mainmenu" href="">
                Portfolio
              </a>
            </li>
            <li>
              <a className="item-mainmenu" href="">
                Team
              </a>
            </li>
            <li className="Header_menu--list-mainmenu--cha ">
              <a className="item-mainmenu" href="">
                Dropdown
              </a>
              <ul className="Header_menu--list-submenu Header_menu--list-submenu--con">
                <li>
                  <a className="item-submenu" href="">
                    Dropdown 1
                  </a>
                </li>
                <li>
                  <a className="item-submenu" href="">
                    Deep Dropdown
                  </a>
                </li>
                <li>
                  <a className="item-submenu" href="">
                    Dropdown 2
                  </a>
                </li>
                <li>
                  <a className="item-submenu" href="">
                    Dropdown 3
                  </a>
                </li>
                <li>
                  <a className="item-submenu" href="">
                    Dropdown 4
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="item-mainmenu" href="">
                Contact
              </a>
            </li>
          </ul>

          <div className="Header_menu--button">
            <a href="">
              <button>Get Started</button>
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="content_left">
          <div className="content_left--text">
            <h1>Elegant and creative solutions</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>

          <div className="content_left--button">
            <a className="button-getstart" href="">
              <button>Get Started</button>
            </a>

            <a className="button-play" href="">
              <div className="button-play_but-video">
                <IoIosPlay className="icon-play" />
              </div>
              <p>Watch Video</p>
            </a>
          </div>
        </div>

        <div className="content_right">
          <img
            className="content_right--moving-image"
            src="https://bootstrapmade.com/content/demo/eNno/assets/img/hero-img.png"
            alt=""
          />
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default Header;
