import Logo from "../Assets/Logo.svg"
import {BsTwitter} from "react-icons/bs"
import {SiLinkedin} from "react-icons/si"
import {BsYoutube} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-wraper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Donut Logo"/>
                </div>
                <div className="footer-icons">
                    <BsTwitter />
                    <SiLinkedin />
                    <BsYoutube />
                    <FaFacebookF />
                </div>
            </div>
        </div>
    )
}

export default Footer