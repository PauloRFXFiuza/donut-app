import NavBar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src= {BannerBackground} alt= "Home Container's Background Illustration"/>
                </div>

                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your Favorite Donut Delivered to Your Home
                    </h1>

                    <h1 className="primary-text">
                        Delicious flavors to sweeten your best moments. 
                        Order now and receive a surprise gift.
                    </h1>

                    <button className="secondary-button">
                        Place your order <FiArrowRight/>
                    </button>

                    <p className="primary-text">
                    Or come dine with us in a cozy, 
                    air-conditioned environment with various options 
                    for your order.
                    </p>

                </div>

                <div className= "home-image-section">
                    <div className= "home-primary-image">
                        <img src={BannerImage} alt="donut illustration" /> 
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home