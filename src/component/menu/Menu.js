import react, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../../Card';
import { addProduct } from '../../redux/product';


const Menu =(props)=>{
    let [input,setInput] = useState('');
    let chengeInput=(e)=>{
        setInput(e.target.value)
    }
    let a = props.product.product.map(p=><Card name = {p.name} prise = {p.prise}></Card>);

    return(
        <div className = 'container'>
            
            <h2>aaaaa</h2>
            <div class="d-inline-flex align-content-start " style ={{marginLeft:'100px'}}>{a}</div>
            <div class="input-group mb-3">
                <input type="text" 
                value = {input}
                onChange = {(e)=>chengeInput(e)}
                class="form-control" placeholder="prise and name " aria-label="Recipient's username" 
                aria-describedby="button-addon2"></input>
                <button onClick = {()=>{props.addProduct(2,input);setInput('')}}
                class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        product:state.product,
    }
}

export default connect(mapStateToProps,)(Menu);