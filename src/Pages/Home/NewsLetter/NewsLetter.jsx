import React from "react";
import "./NewsLetter.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const NewsLetter = () => {
  return (
    <div className="newsletter-area">
      <div className="newsletter-content">
        <SectionTitle
          title="Subscribe our newsletter"
          subtitle="Browse local restaurants and businesses for delivery by entering your address blow."
        ></SectionTitle>
        <div className="search-area">
          <div className="search-text">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
            />
          </div>
          <div className="search-btn">
            <PrimaryButton buttonText="send" to="/"></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
