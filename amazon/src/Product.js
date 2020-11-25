import React from 'react';
import { __esModule } from 'react-router-dom/cjs/react-router-dom.min';
import './Product.css';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{  }, dispatch] = useStateValue();

    const addToBasket = ( ) => {
        // add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
<<<<<<< HEAD
=======
=======

function Product({ id, title, image, price, rating }) {
>>>>>>> main
>>>>>>> main
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
<<<<<<< HEAD
           <button onClick = { addToBasket }>Add to basket</button>
=======
<<<<<<< HEAD
           <button onClick = { addToBasket }>Add to basket</button>
=======
           <button>Add to basket</button>
>>>>>>> main
>>>>>>> main
        </div>
    )
}

export default Product

