import React, { useState } from 'react';
import Logo from './../../img/logo.jpg';
import Search from './../../img/Search.png';
import User from './../../img/User.png';
import Basket from './../../img/basket.png';
import style from './Header.module.css'
import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';
import { NavLink } from 'react-router-dom';


const Header = (props)=>{
    
    let [usersModal,setUsersModal] = useState(false);

    return(
    <div>
        {
            usersModal && <ModalWindow setUsersModal = {setUsersModal} />
        }
        <header className ={style.header} >
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <NavLink to = '/Colab.ua'>
                    <img src={Logo} alt="" className = {style.logo}/>
                </NavLink>
                    <div className="d-flex justify-content-between align-items-center">
                        <div><img  className = {`${style.headerImgItem} `} src={Search} alt="Поиск" /></div>
                        <div onClick = {()=>setUsersModal(true)}>
                            <img className = {style.headerImgItem} src={User} alt=""/>
                        </div>
                        <NavLink to = '/basket'>
                        <div className = {style.lastItem} >
                            <img className = {style.headerImgItem} src={Basket} alt=""/>
                            <span className = {style.circle}>
                                {
                                    props.countBuy
                                }
                            </span>
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        countBuy:state.basket.countBuy
    }
}
export default connect(mapStateToProps)(Header);