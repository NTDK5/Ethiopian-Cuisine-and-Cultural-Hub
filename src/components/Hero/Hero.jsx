import React from 'react';
import './hero.css'

const Hero = ({src, description, alt, btn}) => {
  return (
    <section id="hero">
			<img src={src} alt={alt}/>
			<h1>{description}</h1>
			{btn && (<p>Experience the unique flavors and cultural significance of Ethiopian cuisine</p>)}
			{btn &&(<a href="#" class="cta-button">Explore Now</a>)}
			
		</section>
  )
}

export default Hero

