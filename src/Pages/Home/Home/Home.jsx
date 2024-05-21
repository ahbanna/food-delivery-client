import Banner from "../Banner/Banner";
import Dishes from "../Dishes/Dishes";
import NewsLetter from "../NewsLetter/NewsLetter";
import Order from "../Order/Order";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Dishes></Dishes>
      <Order></Order>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
