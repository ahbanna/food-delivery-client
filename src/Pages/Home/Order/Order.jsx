import React from "react";
import "./Order.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import location from "../../../assets/images/order/location.png";
import choice from "../../../assets/images/order/choice.png";
import home from "../../../assets/images/order/home.png";
import burger from "../../../assets/images/dishes/burger.png";
import { Container } from "react-bootstrap";

const Order = () => {
  return (
    <div className="order-area">
      <SectionTitle title="How To Order?"></SectionTitle>
      <Container>
        <div className="dish-items">
          <div className="item-with-number">
            <span>01</span>
            <div className="single-item">
              <div className="item-img">
                <img src={location} alt="" srcset="" />
              </div>
              <h5>Choose your location</h5>
            </div>
          </div>
          <div className="item-with-number">
            <span>02</span>
            <div className="single-item">
              <div className="item-img">
                <img src={choice} alt="" srcset="" />
              </div>
              <h5>Choose what to eat</h5>
            </div>
          </div>
          <div className="item-with-number">
            <span>03</span>
            <div className="single-item">
              <div className="item-img">
                <img src={burger} alt="" srcset="" />
              </div>
              <h5>May your first order</h5>
            </div>
          </div>
          <div className="item-with-number">
            <span>04</span>
            <div className="single-item">
              <div className="item-img">
                <img src={home} alt="" srcset="" />
              </div>
              <h5>Now! Your food in way</h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Order;
