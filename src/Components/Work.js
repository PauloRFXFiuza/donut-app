import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseFloodWater, faUtensils, faTruck } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
    const workInfoData = [
        {
            image: <FontAwesomeIcon icon={faHouseFloodWater} />,
            title: "Made as if it were homemade",
            text: "All our donuts are prepared with care and attention to detail, as if they were made in your own kitchen. We use traditional recipes and artisanal techniques to create fresh and flavorful donuts that bring back the best family moments."
        },
        {
            image: <FontAwesomeIcon icon={faUtensils} />,
            title: "Selected Ingredients",
            text: "We handpick the best ingredients to ensure our donuts are always fresh and delicious. We use only high-quality products, from flour to fillings, to provide you with an exceptional tasting experience."
        },
        {
            image: <FontAwesomeIcon icon={faTruck} />,
            title: "Delivery Across the City",
            text: "We deliver our donuts directly to you, anywhere in the city. Our delivery team ensures that your order arrives quickly and in perfect condition, so you can enjoy our fresh and tasty donuts wherever you are."
        },
    ];

    return (
        <div className= "work-section-wrapper">

            <div className="work-section-top">
                <p className="primary-subheading">Our Work</p>
                <h1>How We Serve You</h1>
                <p className="primary-text">
                Our mission is to provide you with a unique and delicious experience. 
                From the careful selection of ingredients to the delivery at your address, 
                every step of our process is designed to ensure that you receive 
                the best donuts in town. We are committed to quality and 
                customer satisfaction.
                </p>
            </div>

            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">{data.image}</div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Work