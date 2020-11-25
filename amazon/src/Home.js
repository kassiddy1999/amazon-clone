import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <img className = "home_image" src = "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt = ""></img>

            {/* Product id, title, price, rating, image */}
            <div className = "home_row">
            <Product
                id = "12321341"
                title = "The Pursuit of Happiness"
                price = { 11.96 }
                rating = { 5 }
                image = "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

            <Product
                id = "12321341"
                title = "The Pursuit of Happiness"
                price = { 11.96 }
                rating = { 5 }
                image = "https://images.pexels.com/photos/2097428/pexels-photo-2097428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>

            <div className = "home_row">
            <Product
                id = "12321341"
                title = "The Pursuit of Happiness"
                price = { 11.96 }
                rating = { 5 }
                image = "https://images.pexels.com/photos/675960/mic-music-sound-singer-675960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

            <Product
                id = "12321341"
                title = "The Pursuit of Happiness"
                price = { 11.96 }
                rating = { 5 }
                image = "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />

            <Product
                id = "12321341"
                title = "The Pursuit of Happiness"
                price = { 11.96 }
                rating = { 5 }
                image = "https://images.pexels.com/photos/1450903/pexels-photo-1450903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>

            <div className = "home_row">
            <Product
                id = "12321341"
                title = "The Pursuit of Happiness"
                price = { 11.96 }
                rating = { 5 }
                image = "https://images.pexels.com/photos/2909225/pexels-photo-2909225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
            </div>
            
            {/* Product */}
        </div>
    )
}

export default Home
