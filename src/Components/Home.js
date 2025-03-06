import NavBar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src= {BannerBackground} alt= "Home Container's Background"/>
                </div>

                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your Favorite Donut Delivered to Your Home
                    </h1>

                    <h1 className="primary-text">
                        Delicious flavors to sweeten your best moments. 
                        Order now and receive a surprise gift.
                    </h1>

                    <button className="secondary-button">Place your order<FiArrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default Home