import { useNavigate } from "react-router-dom";

import Logo from "../../assets/imgs/12.png";
import Img_1 from "../../assets/imgs/img_1.png";
import "./HomePage.scss";
const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleSignClick = () => {
    navigate("/signin");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="homePage">
        <div className="homePage_header">
          <div className="homePage_header--logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="homePage_header--buttonSign">
            {token && <button onClick={handleProfileClick}>Profile</button>}

            {token ? (
              <button onClick={handleLogoutClick}>Logout</button>
            ) : (
              <button onClick={handleSignClick}>Sign in</button>
            )}
          </div>
        </div>

        <div className="homePage_body1">
          <div className="homePage_body1--text">
            <h1>Save your data</h1>
            <h1>storage here.</h1>
            <div className="textP">
              <p>
                Data Warehouse is a data storage area that has been tested for
                security, so you can store your data here safely but not be
                afraid of being stolen by others.
              </p>
            </div>

            <div className="ButtonLearnMore">
              <button>Learn more</button>
            </div>
          </div>
          <div className="homePage_body1--img">
            <img src={Img_1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
