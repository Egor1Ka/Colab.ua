import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import BasketCard from './BasketCard';
import style from './Basket.module.css';
import { decrementBuy, deleteBasketItem, setTotalPrise, vanishingCountBuy } from '../../redux/basketReduser';
import ModalBy from '../ModalBy/ModalBy';


const Basket = ({basket,setTotalPrise,deleteBasketItem,decrementBuy,vanishingCountBuy})=>{
    //useEffect(()=>setTotalPrise(),[basket]);
    let [close,setClose] = useState(false)
    debugger
let basketPtops = basket.basket.map(p=><BasketCard Name = {p.name} id = {p.id}  decrementBuy={decrementBuy} deleteBasketItem = {deleteBasketItem}prise = {p.prise} img={p.img} setTotalPrise = {setTotalPrise} size = {p.size}/>);
    
    return(
        <div className={`container`} style={{marginTop:'30px' }}>
            {
                close &&
                <ModalBy close = {setClose} deleteBasketItem ={deleteBasketItem} vanishingCountBuy={vanishingCountBuy}
                totalPrise = {basket.totalPrise} basket ={basket.basket} />
            }
            <div className ='d-flex'>
            <div className ='d-flex flex-wrap' style={{width:'500px'}}>
                {basketPtops} 
            </div>  
            <div className="basketInformation" style={{marginLeft:'100px', width:'200px'}}>
                <p class="font-monospace">Total Prise:{basket.totalPrise}</p>
                <button onClick = {()=>setClose(true)}
                type="button" class="btn btn-outline-success">by all</button>
            </div>
            
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        basket:state.basket
    }
}


export default connect(mapStateToProps,{setTotalPrise,deleteBasketItem,decrementBuy,vanishingCountBuy})(Basket);