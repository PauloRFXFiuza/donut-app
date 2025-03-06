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
                <div className="footer-section-two">
                    <div className="footer-section-columns">
                        <span>Quality</span>
                        <span>Help</span>
                        <span>Our Brand</span>
                        <span>Reviews</span>
                        <span>Our Work</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>11-332233-1234</span>
                        <span>hello.donut@ghdmail.com</span>
                        <span>media.donut@ghdmail.com</span>
                        <span>contact.donut@ghdmail.com</span>
                    </div>
                    <div className="footer-section-columns">
                        <span>Conditions and Terms</span>
                        <span>Privacy and Politics</span>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Footer