// rfce for short
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
    const [ { basket } ] = useStateValue();

    return <nav className = "header">
            <Link to = "/">
                <img className = "header_logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>
        
            <div className = "header_Search">
                <input type = "text" className = "header_searchInput"/>
                <SearchIcon className = "header_searchIcon"/>
            </div>
            
            <div className = "header_nav">
                <Link to = "/login" className = "header_Link">
                    <div className= "header_option">
                        <span className = "header_optionLineOne">Hello viktor</span>
                        <span className = "header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
            
                <Link to = "/" className = "header_Link">
                    <div className= "header_option">
                        <span className = "header_optionLineOne">& Orders</span>
                        <span className = "header_optionLineTwo">Returns</span>
                    </div>
                </Link>
                <Link to = "/login" className = "header_Link">
                    <div className= "header_option">
                        <span className = "header_optionLineOne">Your</span>
                        <span className = "header_optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            
            <Link to = "/checkout">
                <div className = "header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className = "header_optionLineTwo header_basketCount">{ basket?.length }</span>
                </div>
            </Link>      
    </nav>
}

export default Header
