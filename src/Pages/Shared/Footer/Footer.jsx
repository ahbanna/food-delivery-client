import "./Footer.css";
import logo from "../../../assets/images/logo.png";
import appStore from "../../../assets/images/banner/app-store.png";
import googlePlay from "../../../assets/images/banner/google-play.png";
import { Container, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <div className="footer-content">
          <div>
            <Link to="/">
              <img src={logo} alt="" srcset="" />
            </Link>
            <div className="app-download">
              <Link to="/">
                <img src={appStore} alt="" srcset="" />
              </Link>
              <Link to="/">
                <img src={googlePlay} alt="" className="google-play" />
              </Link>
            </div>
          </div>
          <div className="footer-menu">
            <span className="footer-menu-title">quick links</span>
            <ul>
              <li>
                <NavLink to="/">features</NavLink>
              </li>
              <li>
                <NavLink to="/">food menu</NavLink>
              </li>
              <li>
                <NavLink to="/">offer</NavLink>
              </li>
              <li>
                <NavLink to="/">review</NavLink>
              </li>
              <li>
                <NavLink to="/">rider</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span className="footer-menu-title">Get to Know Us</span>
            <ul>
              <li>
                <NavLink to="/">Gift Cards</NavLink>
              </li>
              <li>
                <NavLink to="/">DoorDash Stories</NavLink>
              </li>
              <li>
                <NavLink to="/">LinkedIn</NavLink>
              </li>
              <li>
                <NavLink to="/">Glassdoor</NavLink>
              </li>
              <li>
                <NavLink to="/">Accessibility</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span className="footer-menu-title">news</span>
            <ul>
              <li>
                <NavLink to="/">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/">FAQ </NavLink>
              </li>
              <li>
                <NavLink to="/">Lift Media </NavLink>
              </li>
              <li>
                <NavLink to="/">Press</NavLink>
              </li>
              <li>
                <NavLink to="/">Presse kit</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <span className="footer-menu-title">contact</span>
            <ul>
              <li>
                <NavLink to="/">WhatsApp</NavLink>
              </li>
              <li>
                <NavLink to="/">Support 24 </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright-text">© 2023 pizza.All right reserved</p>
          <div className="footer-bottom-menu">
            <ul>
              <li>
                <NavLink to="/">privacy</NavLink>
              </li>
              <li>
                <NavLink to="/">policy</NavLink>
              </li>
              <li>
                <NavLink to="/">terms</NavLink>
              </li>
              <li>
                <NavLink to="/">services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
