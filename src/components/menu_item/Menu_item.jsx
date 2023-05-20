import React from 'react';
import './menuitem.css';


const Menu_item = ({img_src, title, description, }) => {
  return (
    <div className="menu-item">
				<img src={img_src} alt="Doro Wat" />
				<h3>{title}</h3>
				<p>{description}</p>
				
			</div>
  )
}

export default Menu_item