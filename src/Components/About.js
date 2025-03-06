import AboutBackground from "../Assets/about-background1.jpg"

const About = () => {
    return (
        <div className= "about-section-container">
            <div className= "about-background-image-container">
                <img src={AboutBackground} alt="Stack Donuts Illustration"/>
            </div>
        </div>
    );
}

export default About