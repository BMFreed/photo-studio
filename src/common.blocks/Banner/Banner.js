function Banner() {
    return (
        <section className="banner">
            <div className="banner__container container">
                <h2 className="hidden">A professional photo studio</h2>
                <p className="banner__paragraph-big margin-reset">
                    Fast. Simple.
                    <br /> Professional
                    <br /> Headshots.
                </p>
                <p className="banner__paragraph-small margin-reset">
                    #1 Rated Headshot Photographers.
                </p>
                <a className="banner__btn button link" href="##">
                    Browse Sessions
                </a>
            </div>
            <img
                src={process.env.PUBLIC_URL + "/img/main_image/main_image.jpg"}
                alt="Main"
                className="banner__img"
            />
        </section>
    );
}

export default Banner;
