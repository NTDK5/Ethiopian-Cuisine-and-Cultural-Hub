import React from 'react';
import './newsletter.css';



const NewsLetter = () => {
  return (
    <section class="subscribe">
            <div class="containers">
              <h2>Subscribe to our Newsletter</h2>
              <p>Stay up-to-date with our latest news and promotions</p>
              <form>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </section>
  )
}

export default NewsLetter