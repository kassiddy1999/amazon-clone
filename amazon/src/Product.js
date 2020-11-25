import React from 'react';
import { __esModule } from 'react-router-dom/cjs/react-router-dom.min';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    return (
        <div className = "product">
            <div className = "product_info">
            <p>{ title }</p> 
            <p className = "product_price">
               <small>$</small>
               <strong>{ price }</strong>
           </p>
           <div className = "product_rating">
               {
                   Array (rating) 
                   .fill()
                   .map((_) => (
                       <p>🍂</p>
                   ))
               }
           </div>
            </div>
           <img src = { image } alt = ""></img>
           <button>Add to basket</button>
        </div>
    )
}

export default Product

