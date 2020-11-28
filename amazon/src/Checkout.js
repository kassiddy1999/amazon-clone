import React from 'react';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// import CurrencyFormat from 'react-currency-format';
import './Checkout.css';

function Checkout() {
    const [{ basket }] = useStateValue();this is good

    return (
        <div className = "checkout">
            <div className = "checkout_left">
                    <img className = "checkout_ad" src = "https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = ""></img>
                    { basket?.length === 0 ? (    
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>You have no items in your basket. To buy one or more items, click 'Add to Basket' next to the item</p>
                        </div>
        ) : (
            <div>
                <h2 className = "checkout_title"> Your Shopping Basket </h2>
                {/* List out all of the Checkout Products */}
                { basket.map(item => (
                    <CheckoutProduct
                    id = { item.id }
                    title = { item.title }
                    image = { item.image }
                    price = { item.price }
                    rating = { item.rating }
                    />
                ))}
            </div>
        )}
        </div>
        {basket.length > 0 && (
            <div className = "checkout_right">
                <Subtotal />
                </div>
        )}
    </div>
    )
}

export default Checkout
