import React from 'react';
import './Article.css';


const Article = () => {
  return (
    

    <section class="articles">
    <div class="container">
      <div class="article">
        <a href="#">
          <div class="article__image">
            <img src="https://i.pinimg.com/564x/ce/74/b1/ce74b164fb5a6bcd0596d4ef4e721e5f.jpg" alt="Article 1" />
          </div>
          <div class="article__content">
            <h3 class="article__title">Exploring the Spices of Ethiopian Cuisine</h3>
            <p class="article__excerpt">Learn about the unique blend of spices that give Ethiopian cuisine its distinct flavor.</p>
          </div>
        </a>
      </div>
      <div class="article">
        <a href="#">
          <div class="article__image">
            <img src="https://i.pinimg.com/564x/0e/55/58/0e555876f8c08f0b507f04c24c80b461.jpg" alt="Article 2" />
          </div>
          <div class="article__content">
            <h3 class="article__title">The History and Culture of Ethiopian Coffee</h3>
            <p class="article__excerpt">Discover the fascinating history and culture behind Ethiopia's famous coffee.</p>
          </div>
        </a>
      </div>
      <div class="article">
        <a href="#">
          <div class="article__image">
            <img src="https://i.pinimg.com/564x/96/de/0d/96de0d80cc591852c90fec98d0b7417b.jpg" alt="Article 3" />
          </div>
          <div class="article__content">
            <h3 class="article__title">Traditional Ethiopian Recipes: Injera and Doro Wat</h3>
            <p class="article__excerpt">Learn how to make two of the most popular and delicious dishes in Ethiopian cuisine.</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  )
}

export default Article