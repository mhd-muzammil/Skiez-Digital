import React from "react";
import Hero from "../components/Hero";
import CardContainer from "../components/CardContainer";
import StackHome from "../components/StackHome";
import Footer from "@/components/Footer";
import CyberCardGrid from "@/components/ui/CyberCard";


const Home = () => {
  return (
    <>
      <Hero />
      <CardContainer />
      <StackHome />
      <CyberCardGrid/>
      <Footer/>
    </>
  );
};

export default Home;
