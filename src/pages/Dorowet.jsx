import React from 'react';
import { Footer, Navbar } from '../components';
import dorowet from '../assets/dorowet.jpg';
import './ingredient.css';

const Dorowet = () => {
  return (
        <>
        <Navbar />
        <section className='dorowet'>
            <div className='dorowet_container'>
                <img src={dorowet} alt='Ethiopian Dorowet' />
                <div className='info' >
                    <h2>Ethiopian Dorowet</h2>
                    <p>Spicy Ethiopian chicken stew served with injera</p>
                    
                </div>
            </div>
            <div className='ingredients'>
                <h2>Ingredients</h2>
                <ul>
                    <li>2 lbs chicken, cut into small pieces</li>
                    <li>1/2 cup clarified butter or oil</li>
                    <li>2 large onions, finely chopped</li>
                    <li>4 cloves garlic, minced</li>
                    <li>1 Tbsp ginger, minced</li>
                    <li>1 Tbsp berbere spice (or more to taste)</li>
                    <li>1/2 tsp ground cardamom</li>
                    <li>1/2 tsp ground cumin</li>
                    <li>1/2 tsp ground coriander</li>
                    <li>1/4 tsp ground cinnamon</li>
                    <li>1/4 tsp ground cloves</li>
                    <li>1/4 tsp ground allspice</li>
                    <li>1/4 tsp black pepper</li>
                    <li>1/4 tsp salt (or more to taste)</li>
                    <li>2 cups chicken broth</li>
                    <li>2 hard-boiled eggs, peeled</li>
                    <li>Fresh cilantro or parsley, chopped (for garnish)</li>
                </ul>
            </div>
            <div className='instruction' >
                <h2>Instructions</h2>
                <ol>
                    <li>Heat the butter or oil in a large pot over medium heat.</li>
                    <li>Add the onions, garlic, and ginger and sauté until the onions are soft and translucent, about 10 minutes.</li>
                    <li>Add the berbere spice, cardamom, cumin, coriander, cinnamon, cloves, allspice, black pepper, and salt and stir to combine.</li>
                    <li>Add the chicken and stir to coat with the spice mixture.</li>
                    <li>Add the chicken broth and bring to a simmer.</li>
                    <li>Cover the pot and simmer for 45 minutes to 1 hour, stirring occasionally, until the chicken is cooked through and tender.</li>
                    <li>Remove the lid and simmer for an additional 10-15 minutes to thicken the sauce.</li>
                    <li>Serve hot, garnished with hard-boiled eggs and cilantro or parsley.</li>
                </ol>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Dorowet