import React from 'react';
import style from './Basket.module.css';


const BasketCard = ({Name,prise,img,id,size,deleteBasketItem,setTotalPrise,decrementBuy})=>{
    
    return(
            <div className={`card ${style.card}`} style ={{width:'200px'}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{Name}</h5>
                <p class="card-text">{size}</p>
                <h6>{prise}</h6> 
                <button onClick = {()=>{debugger ;deleteBasketItem(id,Name);setTotalPrise();decrementBuy();}}
                 type="button" class="btn btn-outline-danger">Delite</button>
            </div>
            </div>
    )
}




export default BasketCard;