import React, { useState } from 'react';
import './navbar.css';
import logo from "../../assets/Logo.png";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import About from '../../pages/About';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    const Menu = () =>{
      return(
      <>
              <Link to="/Ethiopian-Cuisine-and-Cultural-Hub/">Home</Link>
              <a href="/Ethiopian-Cuisine-and-Cultural-Hub/about">About Us</a>
              <a href="/Ethiopian-Cuisine-and-Cultural-Hub/cuisine">Cuisine</a>
              <a href="/Ethiopian-Cuisine-and-Cultural-Hub/arts&music">Art &amp; Music</a>
              <a href="/Ethiopian-Cuisine-and-Cultural-Hub/contact">Contact Us</a>
      </>
      )
    }

  return (
    /* Navigation bar */
        <nav>
            <a href="#" class="logo">
                <img src={logo} alt="Ethiopian Cuisine and Culture Hub" />
            </a>

            <div className='menu'>
              {toggle
              ?<FontAwesomeIcon onClick={()=>{settoggle(false)}} size='2x' icon={faXmark} />
              :<FontAwesomeIcon onClick={()=>{ settoggle(true)}} size='2x' icon={faBars} />
              }
            </div>
              
            <div className='menu_items'>
              <Menu />
            </div>

            {toggle && (
              <div className='dropdown_menu'>
                <Menu />
              </div>
            )}
            
            
          </nav>
    
  )
}

export default Navbar