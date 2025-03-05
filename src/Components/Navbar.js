import React from "react"
import Logo from "../Assets/Logo.svg"
import {BsCart2} from "react-icons/bs"

const Navbar = () => {
    return(
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="Donut logo" />
            </div>
            <div className="navbar-links-container">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Our Work</a>
                <a href="">Reviews</a>
                <a href="">Contact</a>
                <a href="">
                    <BsCart2 className="navbar-cart-icon"/>
                </a>

                <button className="primary-button">Order Now</button>
            </div>
            <div className="nav-bar-menu-container">

            </div>
        </nav>

    )
}

export default Navbar