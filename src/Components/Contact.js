const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <p className="primary-subheading">Contact us</p>
            <h1 className="primary-heading">Got a question in mind?</h1>
            <h2 className="primary-heading">Let us help you</h2>

            <div className="contact-form-container">
                <input type="text" placeholder="your_email@mail.com" />
                <button className="secondary-button">Send</button>
            </div>
        </div>
    );
};

export default Contact