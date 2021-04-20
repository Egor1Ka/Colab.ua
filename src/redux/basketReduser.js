const INCREMENT_BUY = 'INCREMENT_BUY';
const ADD_PRODUCT = 'ADD_PRODUCT';
const SET_TOTAL_PRISE = 'SET_TOTAL_PRISE';
const DELETE_ITEM = 'DELETE_ITEM';
const DECREMENT_BUY = 'DECREMENT_BUY';
const VANISHING = 'VANISHING';

let initialState = {
   basket:[

   ],
   countBuy:0,
   totalPrise:0
}

let basketReduser =(state = initialState,action)=>{
    switch (action.type){
        case INCREMENT_BUY:{
            return{
                ...state,
                ...state.basket,
                countBuy:state.countBuy + 1
            }
        }
        case ADD_PRODUCT:{
           
            return{
                ...state,
                basket:[
                    ...state.basket,
                    action.newProduct
                ]
            }
        }
        case SET_TOTAL_PRISE:{
            
            let newTotalPrise = 0;
            state.basket.forEach(element => {
                newTotalPrise += element.prise 
            });
            return{
                ...state,
                totalPrise:newTotalPrise
            }
        }
        case DELETE_ITEM:{
            
            let newBasket = state.basket.filter(i=>{
                debugger
                if(!(i.id===action.idItem && i.name === action.name )){
                    debugger
                    return i; 
                }
            })
            return{
                ...state,
                basket:[...newBasket]
            }
        }
        case DECREMENT_BUY:{
            debugger
            return{
                ...state,
                ...state.basket,
                countBuy:state.countBuy - 1
            }
        }
        case VANISHING:{
            return{
                ...state,
                ...state.basket,
                countBuy:0
            }
        }
        default:{
            return state;
        }
    }
}

export let incrementCountBuy =()=>{
    return {
        type:INCREMENT_BUY
    }
}

export let addProduct =(newProduct)=>{
    debugger;
    return {
        type:ADD_PRODUCT,
        newProduct,
    }
}

export let setTotalPrise = ()=>{
    return{
        type:SET_TOTAL_PRISE
    }
}

export const deleteBasketItem = (idItem,name)=>{
    return{
        type:DELETE_ITEM,
        idItem,
        name
    }
}

export const decrementBuy=()=>{
    return{
        type:DECREMENT_BUY
    }
}

export const vanishingCountBuy = ()=>{
    return {
        type:VANISHING
    }
}

export default basketReduser;