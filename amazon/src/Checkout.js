import React from 'react';
import { useStateValue } from "./StateProvider";
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className = "checkout">
            <div className = "checkout">
                <img className = "checkout_ad" src = "https://images.pexels.com/photos/210126/pexels-photo-210126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt = ""></img>
                { basket?.length === 0 ? (    
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
    ) : (
        <div>
            <h2 className = "checkout_title"> Your Shopping Basket </h2>
            {/* List out all of the Checkout Products */}
        </div>
    )}
            </div>
        </div>
    )
}

export default Checkout
