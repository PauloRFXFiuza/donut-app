import React from "react"
import Logo from "../Assets/Logo.svg"

const Navbar = () => {
    return(
        <nav>
            <div>
                <img src={Logo} alt="Donut logo" />
            </div>
            <div>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Our Work</a>
                <a href="">Reviews</a>
                <a href="">Contact</a>
            </div>
        </nav>

    )
}

export default Navbar