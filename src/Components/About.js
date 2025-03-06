import AboutBackground from "../Assets/about-background1.jpg"
import AboutBackgroundImage from "../Assets/about-image.png"

const About = () => {
    return (
        <div className= "about-section-container">
            
            <div className= "about-background-image-container">
                <img src={AboutBackground} alt="Stack Donuts Illustration"/>
            </div>

            <div className= "about-section-image-container">
                <img src={AboutBackgroundImage} alt="Illustration of a hand holding a donut."/>
            </div>

        </div>
    );
}

export default About