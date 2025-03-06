import AboutBackground from "../Assets/about-background1.jpg"
import AboutBackgroundImage from "../Assets/about-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
    return (
        <div className= "about-section-container">
            
            <div className= "about-background-image-container">
                <img src={AboutBackground} alt="Stack Donuts Illustration"/>
            </div>

            <div className= "about-section-image-container">
                <img src={AboutBackgroundImage} alt="Illustration of a hand holding a donut."/>
            </div>

            <div className="about-section-text-container">
                <p className="primary-subheading">About Us</p>
                <h1 className="primary-heading">
                    It's Important to Know Who Feeds You
                </h1>
                <p className="primary-text">
                    We are a local bakery dedicated to bringing you the most delicious donuts in town.
                </p>
                <p className="primary-text">
                    Our story began with a passion and a desire to create a space where friends and family 
                    can gather and enjoy sweet moments together.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Read More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill /> Watch Our Video
                    </button>
                </div>
            </div>

        </div>

    );
}

export default About