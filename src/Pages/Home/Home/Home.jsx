import Banner from "../Banner/Banner";
import Dishes from "../Dishes/Dishes";
import NewsLetter from "../NewsLetter/NewsLetter";
import Order from "../Order/Order";
import OurChef from "../OurChef/OurChef";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Dishes></Dishes>
      <Order></Order>
      <OurChef></OurChef>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
