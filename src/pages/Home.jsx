import React from 'react';
import {Navbar, Features, Article, Hero, NewsLetter, Footer} from '../components';
import heroimage from "../assets/dorowet.jpg";

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero src={heroimage} alt="Ethiopian Food" description="Discover the Rich and Diverse Flavors of Ethiopia" btn={"true"}/>
        <Features />
        <NewsLetter />
        <Article />
        <Footer />
    </>
  )
}

export default Home