import React from "react";
import "./SingleChef.css";
import { Link } from "react-router-dom";

const SingleChef = (props) => {
  const { name, image, position } = props.info;
  return (
    <div className="single-chef">
      <div className="chef-img">
        <Link to="/">
          <img src={image} alt="" srcset="" />
        </Link>
      </div>
      <div className="chef-content">
        <h5>
          <Link to="/">{name}</Link>
        </h5>

        <span>{position}</span>
      </div>
    </div>
  );
};

export default SingleChef;
