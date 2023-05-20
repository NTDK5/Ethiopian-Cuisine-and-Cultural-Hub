import './arts.css';
import { About_us, Footer, Hero, Navbar } from '../components';
import React from 'react';
import Artimage from '../assets/artMusic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useForm } from 'react-hook-form';

function ArtMusicPage() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // TODO: Implement form submission logic
    reset();
  };

  return (
    <>
    <Navbar />
    <Hero src={Artimage}   alt="art&music" />
    <section className="ArtMusic-overview">
			  <h2> Ethiopian Art And Music Overview </h2>
		  	<p> 
          Ethiopian culture is rich in art and music, and we are proud to showcase
          the work of local artists and musicians at our cultural hub. Come and
          see the beautiful paintings, sculptures, and other artwork on display,
          or listen to the traditional music performed live by talented musicians.
        </p>
		</section>
    <div className="art-music-page">
      <h2 className="art-music-page__subheading">Upcoming Events</h2>
      <ul className="art-music-page__list">
        <li>
          <strong>Art Exhibition:</strong> "Ethiopian Landscapes" by Tsegaye
          Dinku, opening on June 1st
        </li>
        <li>
          <strong>Live Music:</strong> Traditional Ethiopian music by the
          Yared Trio, every Saturday evening
        </li>
        <li>
          <strong>Special Event:</strong> "Celebrating Ethiopian Women in Art
          and Music" panel discussion, June 15th at 7pm
        </li>
      </ul>
      </div>
      {/* <div className='art-music-page_fetured'> */}
      <h2 className="art-music-page__subheading">Featured Artists and Musicians</h2>
      <div className="featured">
        <div className="featured__item">
          
          <h3 className="featured__name">Tsegaye Dinku</h3>
          <p className="featured__description">
            Tsegaye Dinku is a well-known Ethiopian artist whose work has been
            exhibited in galleries around the world. His paintings capture the
            beauty and diversity of the Ethiopian landscape, with vibrant colors and
            bold brushstrokes.
          </p>
        </div>
        <div className="featured__item">
          <h3 className="featured__name">Yared Trio</h3>
          <p className="featured__description">
            The Yared Trio is a group of talented musicians who specialize in
            traditional Ethiopian music. They play a variety of instruments,
            including the masenqo, krar, and washint, and their lively performances
            are a highlight of our cultural hub.
          </p>
        </div>
      </div>
      <h2 className="art-music-page__subheading">Contact Us</h2>
      <p className="art-music-page__paragraph">
        Have a question or comment? Get in touch with us using the form below, or
        connect with us on social media.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="art-music-page__form">
        <div className="art-music-page__form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"{...register('test', { required: true })}  className="art-music-page__form-input" />
        </div>
        <div className="art-music-page__form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register('test', { required: true })}  className="art-music-page__form-input" />
        </div>
        <div className="art-music-page__form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" {...register('test', { required: true })}  className="art-music-page__form-textarea"></textarea>
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
  );
}

export default ArtMusicPage;