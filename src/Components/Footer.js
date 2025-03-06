import Logo from "../Assets/Logo.svg"

const Footer = () => {
    return (
        <div className="footer-wraper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Donut Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Footer