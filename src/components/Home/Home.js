import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.js";
import Footer from "../Footer/Footer";
import FormCard from "../FormCard/FormCard";
import Services from "../Services/Services";
import TopReview from "../TopReview/TopReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FormCard></FormCard>
      <Services></Services>
      <AboutUs></AboutUs>
      <FeaturedProducts />
      {/* <Blog></Blog> */}
      <TopReview />
      <Footer />
    </div>
  );
};

export default Home;
