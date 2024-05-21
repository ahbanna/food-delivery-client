import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="testimonial-area">
      <SectionTitle
        title="Our Clients Feedback"
        subtitle="The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep."
      ></SectionTitle>
      <Container className="all-testimonials">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Grid, Autoplay, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="single-testimonial">
                <div className="quote-icon">
                  <FaQuoteLeft></FaQuoteLeft>
                </div>
                <p>{testimonial.feedback}</p>
                <div className="customer-info">
                  <p className="customer-name">{testimonial.name}</p>
                  <p className="customer-position">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;
