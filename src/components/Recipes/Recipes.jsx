import React from 'react';
import './recipes.css';
import Menu_item from '../menu_item/Menu_item';
import dorwet from '../../assets/dorowet.jpg';
import kitfo from '../../assets/kitfo.jpg';
import shiro from '../../assets/shiro.jpg';
import misir from '../../assets/misir.jpg';


const Recipes = () => {
  return (
    <section className="menu">
        <div className='text'>
            <h2>Recipes</h2>
        </div>
        <div className='menu_item_container' >
            <a href='/dorowet' ><Menu_item img_src={dorwet} description="Spicy Ethiopian chicken stew served with injera" title="Doro wat" /></a>
            <a href='/kitfo' ><Menu_item img_src={kitfo} description="Raw beef marinated in spices and served with injera" title="Kitfo" /></a>
            <Menu_item img_src={shiro} description="It's a stew or curry made from ground dried chickpeas and various spices. " title="Shiro" />
            <Menu_item img_src={misir} description="Redolent with spices, an Ethiopian red lentil stew, is a feast for all the senses!" title="Misir" />
            <Menu_item img_src={shiro} description="It's a stew or curry made from ground dried chickpeas and various spices. " title="Shiro" />
            <Menu_item img_src={shiro} description="It's a stew or curry made from ground dried chickpeas and various spices. " title="Shiro" />
        </div>
	</section>
  )
}

export default Recipes