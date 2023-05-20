import React from 'react';
import { Hero,Navbar, Footer, Recipes } from '../components';
import heroimg from '../assets/cusine.jpg'
import './cuisine.css'

const Cuisine = () => {
  return (
    <>
      <Navbar />
      <Hero src={heroimg} alt={"Ethiopian Cuisine"} description={"Descover Ethiopian Cuisine!"} btn={"false"} />
        
      <section className="cuisine-overview">
			  <h2> Ethiopian Cuisine Overview </h2>
		  	<p> Ethiopian cuisine is known for its rich flavors, unique spices, and communal dining tradition. At Ethiopian Cuisine and Cultural Hub, we are proud to offer authentic Ethiopian dishes prepared with fresh ingredients and traditional cooking techniques. Our menu features a variety of vegetarian and meat dishes, as well as traditional Ethiopian beverages such as coffee and tej (honey wine).</p>
		  </section>
      
      <Recipes/>
      <Footer/>
    </>
  )
}

export default Cuisine