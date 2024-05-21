import { Container } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../../assets/images/banner/banner-img.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import googlePlay from "../../../assets/images/banner/google-play.png";
import appStore from "../../../assets/images/banner/app-store.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <div className="banner-content">
          <h1>Your Favorite Food Delivery Partner</h1>
          <p>
            The food at your doorstep. Why starve when you have us. You hunger
            partner. Straight out of the oven to your doorstep.{" "}
          </p>
          <div className="search-area">
            <div className="search-text">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your delivery location"
              />
            </div>
            <div className="search-btn">
              <PrimaryButton buttonText="order now" to="/"></PrimaryButton>
            </div>
          </div>
          <div className="app-download">
            <Link to="/">
              <img src={appStore} alt="" />
            </Link>
            <Link to="/">
              <img src={googlePlay} alt="" className="google-play" />
            </Link>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
