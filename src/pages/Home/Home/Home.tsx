import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import ServicesSection from "../OurServices/OurServices";
import BrandMarquee from "./BrandMarquee/BrandMarquee";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <ServicesSection />
      <BrandMarquee />
    </div>
  );
};

export default Home;
