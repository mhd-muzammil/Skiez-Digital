import React from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import StackHome from "../components/StackHome";
import Footer from "@/components/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <CardContainer />
      <StackHome />
      <Footer/>
    </>
  );
};

export default Home;
