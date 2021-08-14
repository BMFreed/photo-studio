function About() {
    return (
        <section className="about" id="about">
            <div className="about__border">
                <div className="about__container container">
                    <h2 className="about__header header-secondary margin-reset">
                        Fast, convenient &amp; friendly <br /> professional headshot sessions.
                    </h2>
                    <a className="about__btn button link" href="#modal">
                        About Us
                    </a>
                </div>
            </div>
            <img
                className="about__background"
                src={process.env.PUBLIC_URL + "/img/about/img_11839.jpg"}
                alt=""
            />
        </section>
    );
}

export default About;
