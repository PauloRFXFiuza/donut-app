import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
    
    return (
        
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Reviews</p>
                <h1 className="primary-heading">What they say about us</h1>
                <p className="primary-text">
                    Our customers love the quality and taste of our donuts. Each bite is an explosion of 
                    flavor that brings joy and satisfaction. We are always receiving compliments for the 
                    variety of flavors we offer.
                </p>
            </div>

            <div>
                <img src={ProfilePic} alt="Customer illustration"/>
                <p>
                    "Discovering this donut shop was one of the best things that happened! 
                    The donuts are always fresh, soft, and incredibly tasty. The customer service is excellent, 
                    and delivery is always on time. I highly recommend it to anyone looking for a delicious and 
                    memorable experience."
                </p>
            </div>

            <div className= "testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
    </div>
    )
}

export default Testimonial