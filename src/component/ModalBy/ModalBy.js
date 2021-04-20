
import { connect } from 'react-redux';
import { decrementBuy } from '../../redux/basketReduser';
import style from './ModalBy.module.css'


const ModalBy =(props)=>{
    debugger
    return( 
    <div className = {style.modal} >
        <div className = {style.modalBody} >
        <button onClick={()=>props.close(false)}
        type="submit" class="btn btn-danger" 
        style={{float: 'right'}}>&#10006;</button>

        <h6>сумма ваших покупок: {props.totalPrise}</h6>
        <div style={{paddingTop:'30px'}}>
        {
            props.basket.map((item,i)=>{
            return(
                <div>
                    <h5>
                        <span>{i+1}. </span>{item.name } 
                        <span> {item.size}</span>
                        
                        <button onClick = {()=>{props.deleteBasketItem(item.id,item.name);props.decrementBuy()}}
                        style={{marginLeft:'10px',padding:'1px',paddingLeft:'10px',paddingRight:'10px'}}
                        type="button" class="btn btn-outline-danger d-inline">Delite</button>
                    </h5>
                    <h6>prise:{item.prise}</h6>
                </div>
            )})
        }
        </div>

          
        </div>
    </div>
       
    )
}

const mapStateToProps=(state)=>{
    return{
        product:state.product,
    }
}

export default connect(mapStateToProps,{decrementBuy})(ModalBy);