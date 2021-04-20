import React from 'react';
import Search from './../../img/Search.png';

const Input = ()=>{
    return(
        <div className = 'container d-flex justify-content-center'>
            <div className = 'search-box'>
                <input type ='text' className = 'cearch_txt' placeholder = 'поиск' />
                
                <a href="" className="cearch-btn"><img src={Search}  alt=""/></a>
                
            </div>
        </div>  
    )
}

export default Input;