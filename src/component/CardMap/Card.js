import React, { useState } from 'react';
import style from './Card.module.css';
import photo from './../../img/MarcAirJordan.jpg'
import { addProduct, incrementCountBuy,setTotalPrise } from '../../redux/basketReduser';
import { connect } from 'react-redux';
import basket2 from './../../img/basket2.png'


const Card = (props)=>{
   debugger;
   let [addSize,setAddSize] = useState('');
   let [usedSize,setUsedSize] = useState([]);
    return(
        <div class="card" style={{width: '18rem' ,marginLeft:'20px',marginBottom:'20px'}}>
            <img src={props.product[0].img} class="card-img-top" alt='photo'/>
            <div class="card-body">
                <a className = {style.ref}href = '#'><h5 class="card-title">
                    {props.product[0].name}
                </h5></a>
                
                <h6><span>
                    Prise:{props.product[0].prise}
                </span></h6> 
                
                {
                props.product.map((item,index)=>{
                    return <div className="btn-group">
    
                    {
                    item.size === 'XS'&&  
                    <button
                     className ={addSize ==='XS'?`btn btn-outline-secondary ${style.activeBtn}`:`btn btn-outline-secondary`}
                     onClick={()=>{
                        setAddSize('XS');
                    }}>XS</button>
                    }
                    

                    {item.size === 'S'&&  
                    <button 
                    className ={addSize ==='S'?`btn btn-outline-secondary ${style.activeBtn}`:`btn btn-outline-secondary`}
                    onClick={()=>{
                       setAddSize('S');
                    }}>
                       S</button>
                    }

                    {item.size === 'M'&&  
                    <button 
                    className ={addSize ==='M'?`btn btn-outline-secondary ${style.activeBtn}`:`btn btn-outline-secondary`}
                    onClick={()=>{
                       setAddSize('M');
                    }}>M</button>
                    }

                    {item.size === 'L'&&  
                    <button 
                    className ={addSize ==='L'?`btn btn-outline-secondary ${style.activeBtn}`:`btn btn-outline-secondary`}
                    onClick={()=>{
                       setAddSize('L');
                    }}>L</button>
                    }   

                    {item.size === 'XL'&&  
                    <button 
                    className ={addSize ==='XL'?`btn btn-outline-secondary ${style.activeBtn}`:`btn btn-outline-secondary`}
                    onClick={()=>{
                       setAddSize('XL');
                    }}>XL</button>
                    }
                
                </div>})}

                <div style = {{marginTop : '10px'}}>
                    <button className = {`btn btn-outline-secondary ${style.buy}`}>Купить</button>
                    <button  
                        onClick={()=>{
                            
                            let add = props.product.filter(item=>item.size === addSize);
                            props.addProduct(add[0]);
                            debugger;
                            props.incrementCountBuy();
                            setAddSize('');
                            props.setTotalPrise();

                    }}
                    className = {`btn btn-outline-secondary`}
                    disabled={addSize===''?'disabled' : ''}>
                        в корзину 
                    <img className = {style.basket} src ={basket2} /> </button>
                </div>

            </div>
        </div>  
    )
}

const mapStateToProps = (state)=>{
    return{
        countBuy:state.basket.countBuy,
        basket:state.basket
    }
}

export default connect (mapStateToProps,{incrementCountBuy,addProduct,setTotalPrise})(Card);