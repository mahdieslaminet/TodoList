import "./footer.css";
import homeIcon from "./icons8-home.svg";
import settingIcon from "./icons8-settings.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()

  return (
    <div className="footer bg-2 rounded-top-3 shadow">
      <img
        src={homeIcon}
        alt=""
        className="home-icon "
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        src={settingIcon}
        alt=""
        className="setting-icon "
        onClick={() => {
            navigate('/settings')
        }}
      />
    </div>
  );
};

export default Footer;
