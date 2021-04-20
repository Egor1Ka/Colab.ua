import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import style from './Card.module.css'

const CardMap = (props)=>{
    
    let product = props.product.product.map((p,index)=>{

    return <Card product = {p}/>
    });
    return(
        <div className = 'cardMap d-flex flex-wrap container  ' style ={{marginTop :'100px',flexWrap:'wrap'}}>
            {product}
        </div>     
    )
}

const mapStateToProps = (state)=>{
    return{
        product:state.product
    }
}

export default connect(mapStateToProps)(CardMap) ;