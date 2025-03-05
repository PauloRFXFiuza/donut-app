import React, { useState } from "react"
import Logo from "../Assets/Logo.svg"
import {BsCart2} from "react-icons/bs"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"

const Navbar = () => {
    const[openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon/>,
        },
        {
            text: "About Us",
            icon: <InfoIcon/>,
        },
        {
            text: "Our Work",
            icon: <HomeWorkIcon/>,
        },
        {
            text: "Reviews",
            icon: <CommentRoundedIcon/>,
        },
        {
            text: "Contact",
            icon: <PhoneRoundedIcon/>,
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon/>,
        },
    ]


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