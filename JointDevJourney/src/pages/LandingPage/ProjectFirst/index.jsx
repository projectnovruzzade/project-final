// ! Project First Section
import "./style.scss";
import "animate.css";
import { Link } from "react-router-dom";
import LandingVector from "../../../assets/images/vector/landing-page-vector.svg";
import LogoIcon from "../../../assets/images/icon/mini-icon-2.svg";

const ProjectFirstSection = () => {
  return (
    <div className="landing-first-section">
      <div className="overlay-section"></div>
      <header>
        <div className="logo-part">
          <div className="text-content animate__animated animate__fadeInLeft">
            Joint<span>{"</dev>"}</span>Journey
          </div>
          <img src={LogoIcon} className="logo animate__animated animate__flipInX" alt="" />
        </div>
        <div className="nav-part">
          <nav>
            <a href="">About Platform</a>
            <Link to={"/contact"}>Contact</Link>
          </nav>
        </div>
      </header>
      <div className="main-wrapper">
        <div className="wrapper-content">
          <div className="text__part animate__fadeInTopLeft animate__animated">
            <div className="main_text">
              Develop your programming knowledge as a team
            </div>
            <div className="secondary_text">
              Search for a team or find a skilled person for your team on this
              platform!
            </div>
          </div>
          <div className="image__part animate__animated animate__fadeInDown">
            <img src={LandingVector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFirstSection;
