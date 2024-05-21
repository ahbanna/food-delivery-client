import React from "react";
import "./Dishes.css";
import { Container } from "react-bootstrap";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import pizza from "../../../assets/images/dishes/pizza.png";
import burger from "../../../assets/images/dishes/burger.png";
import sushi from "../../../assets/images/dishes/sushi.png";
import bike from "../../../assets/images/dishes/bike.png";
import desserts from "../../../assets/images/dishes/desserts.png";
import salad from "../../../assets/images/dishes/salad.png";
import pasta from "../../../assets/images/dishes/pasta.png";
import { FaQuoteRight } from "react-icons/fa";

const Dishes = () => {
  return (
    <div className="dishes-area">
      <SectionTitle
        title={
          <>
            More than
            <span style={{ color: "#ff5331" }}> 10,000 </span>
            dishes to order!
          </>
        }
        subtitle="Welcome to The Biggest Network of Food Ordering & Delivery"
      ></SectionTitle>
      <Container>
        <div className="dishes-first-row">
          <div className="dish-items">
            <div className="single-item">
              <div className="item-img">
                <img src={pizza} alt="" srcset="" />
              </div>
              <h5>Pizza</h5>
            </div>
            <div className="single-item">
              <div className="item-img">
                <img src={burger} alt="" srcset="" />
              </div>
              <h5>Burger</h5>
            </div>
            <div className="single-item">
              <div className="item-img">
                <img src={sushi} alt="" srcset="" />
              </div>
              <h5>Sushi</h5>
            </div>
          </div>
          <div className="delivery">
            <h5>
              Find <span style={{ color: "#ff5331" }}>deals</span>,{" "}
              <span style={{ color: "#009b00" }}>free delivery</span>, and more
              from our restaurant partners.
            </h5>
            <div>
              <img src={bike} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="dishes-second-row">
          <div className="comment">
            <FaQuoteRight />
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
          </div>
          <div className="dish-items">
            <div className="single-item">
              <div className="item-img">
                <img src={pasta} alt="" srcset="" />
              </div>
              <h5>Pasta</h5>
            </div>
            <div className="single-item">
              <div className="item-img">
                <img src={salad} alt="" srcset="" />
              </div>
              <h5>Salad</h5>
            </div>
            <div className="single-item">
              <div className="item-img">
                <img src={desserts} alt="" srcset="" />
              </div>
              <h5>Desserts</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dishes;
