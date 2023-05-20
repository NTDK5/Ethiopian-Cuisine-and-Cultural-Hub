import React from 'react';
import {Navbar, Hero, Footer } from '../components';
import landscape from '../assets/landscape.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <>
        <Navbar />
        <Hero src={landscape} description="CONTACT US" alt="" />
        <h2 className="art-music-page__subheading">Get Intouch?</h2>
      <p className="art-music-page__paragraph">
        Have a question or comment? Get in touch with us using the form below, or
        connect with us on social media.
      </p>
      <form  className="art-music-page__form">
        <div className="art-music-page__form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"  className="art-music-page__form-input" />
        </div>
        <div className="art-music-page__form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email"  className="art-music-page__form-input" />
        </div>
        <div className="art-music-page__form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" className="art-music-page__form-textarea"></textarea>
        </div>
        <button type="submit" className="art-music-page__form-button">Submit</button>
      </form>
      <div className="social">
        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
        <Footer />
    </>
  )
}

export default Contact