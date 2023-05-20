import React from 'react';
import { Footer, Navbar } from '../components';
import dorowet from '../assets/kitfo.jpg';
import './ingredient.css';

const Kitfo = () => {
  return (
        <>
        <Navbar />
        <section className='dorowet'>
            <div className='dorowet_container'>
                <img src={dorowet} alt='Ethiopian Dorowet' />
                <div className='info' >
                    <h2>Ethiopian Kitfo</h2>
                    <p>Raw beef marinated in spices and served with injera</p>
                    
                </div>
            </div>
            <div className='ingredients'>
                <h2>Ingredients</h2>
                <ul>
                    <li>1 lb lean ground beef, preferably organic</li>
                    <li> 1/4 cup niter kibbeh (spiced clarified butter), melted</li>
                    <li>1 tablespoon mitmita (a spicy Ethiopian chili powder)</li>
                    <li>1 teaspoon salt</li>
                    <li>1/4 teaspoon ground black pepper</li>
                    <li>1/4 teaspoon ground cumin</li>
                    <li> 1/4 teaspoon ground coriander</li>
                    <li>1/4 cup crumbled Ethiopian cheese (such as ayib or feta)</li>
                </ul>
            </div>
            <div className='instruction' >
                <h2>Instructions</h2>
                <ol>
                    <li>In a large mixing bowl, combine the ground beef, melted niter kibbeh, mitmita, salt, black pepper, cumin, and coriander. Mix well to combine.</li>
                    <li>Divide the kitfo mixture into four equal portions and shape each portion into a small mound on a serving plate.</li>
                    <li>Make a small well in the center of each mound of kitfo and fill it with crumbled Ethiopian cheese.</li>
                    <li>Serve the kitfo immediately with injera (a traditional Ethiopian flatbread) or toasted bread.</li>
                </ol>
            </div>
        </section>
        <Footer />
    </>
  )
}


export default Kitfo