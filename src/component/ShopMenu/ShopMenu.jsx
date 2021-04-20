import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './ShopMenu.module.css';


const ShopMenu = ()=>{
    return(
        <div>
            <div className={`container ${style.containerShop}`}>
                <div className="d-flex justify-content-between">
                    <NavLink to = '/woman' className = {style.link}><span className ={style.text}>WOMAN</span></NavLink>
                    <NavLink to = '/man' className = {style.link}><span className ={style.text}>MAN</span></NavLink>
                    <NavLink to = '/accessoris' className = {style.link}><span className ={style.text}>ACCESSORIES</span></NavLink>
                    <NavLink to = '/contact' className = {style.link}><span className ={style.text}>CONTACT</span></NavLink>
                </div> 
            </div>
        </div>
    )
}

export default ShopMenu;