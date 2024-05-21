import React, { useEffect, useState } from "react";
import "./OurChef.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import SingleChef from "../SingleChef/SingleChef";

const OurChef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("chefs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChefs(data);
      });
  }, []);
  return (
    <div className="our-chef-area">
      <SectionTitle
        title="Our Chef"
        subtitle="Preparations to temperature controlled packaging and transportation of food."
      ></SectionTitle>
      <Container>
        <div className="all-chefs">
          {chefs.map((chef) => (
            <SingleChef key={chef.id} info={chef}></SingleChef>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurChef;
