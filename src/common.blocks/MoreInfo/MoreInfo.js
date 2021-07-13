function MoreInfo() {
    return (
        <section className="more-info">
            <h2 className="hidden">Additional information</h2>
            <div className="more-info__container container">
                <div className="more-info__top-content">
                    <section className="more-info__headshots">
                        <h3 className="more-info__headshots-header header-secondary margin-reset">
                            Why are headshots important?
                        </h3>
                        <p className="more-info__headshots-caption margin-reset">
                            It may not seem indispensable, but lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Donec nisi enim, finibus non malesuada
                            vitae, porttitor vitae enim. Nulla eget fringilla libero, ut ultricies
                            neque. Morbi id aliquet sem. Ut mattis diam sit amet orci faucibus
                            dignissim. Aliquam erat volutpat. Curabitur eu efficitur quam.
                        </p>
                        <img
                            className="more-info__arrow"
                            src={process.env.PUBLIC_URL + "/img/ui/arrow_icon_11803.png"}
                            alt=""
                        />
                    </section>
                    <section className="more-info__tips">
                        <h3 className="more-info__tips-header header-cursive margin-reset">
                            5 Useful Tips
                        </h3>
                        <ul className="more-info__tip-list u-list">
                            <li className="more-info__tip">
                                <img
                                    src={process.env.PUBLIC_URL + "/img/tips/camera_icon_11827.png"}
                                    alt="Tip"
                                />
                                <span className="more-info__tip-caption">
                                    Go professional, it’s worth it, because cheap looks cheap.
                                </span>
                            </li>
                            <li className="more-info__tip">
                                <img
                                    src={process.env.PUBLIC_URL + "/img/tips/mirror_icon_11822.png"}
                                    alt="Tip"
                                />
                                <span className="more-info__tip-caption">
                                    Make sure it looks like you, not like you want to be.
                                </span>
                            </li>
                            <li className="more-info__tip">
                                <img
                                    src={process.env.PUBLIC_URL + "/img/tips/eyes_icon_11817.png"}
                                    alt="Tip"
                                />
                                <span className="more-info__tip-caption">
                                    It’s all about the eyes and what’s behind them.
                                </span>
                            </li>
                            <li className="more-info__tip">
                                <img
                                    src={process.env.PUBLIC_URL + "/img/tips/studio_icon_11812.png"}
                                    alt="Tip"
                                />
                                <span className="more-info__tip-caption">
                                    Control framing, lighting &amp; background.
                                </span>
                            </li>
                            <li className="more-info__tip more-info__tip_move-right">
                                <img
                                    src={process.env.PUBLIC_URL + "/img/tips/tshirt_icon_11807.png"}
                                    alt="Tip"
                                />
                                <span className="more-info__tip-caption">
                                    Stay chill with clothing &amp; makeup, you must be you.
                                </span>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="more-info__bottom-content">
                    <section className="more-info__headshot-services">
                        <h3 className="more-info__bottom-title margin-reset">
                            Professional Headshot Services
                        </h3>
                        <p className="more-info__bottom-paragraph margin-reset">
                            Studio Inc is maecenas vulputate, sem at auctor vulputate, elit nunc
                            sagittis ligula, vitae pulvinar metus elit in ante. Aenean tincidunt
                            erat ac ante placerat facilisis. Fusce sed ligula tortor. Quisque non
                            dignissim erat. Vestibulum ante ipsum primis in faucibus.
                        </p>
                        <p className="more-info__bottom-paragraph margin-reset">
                            Covid-19 Update: We are open for studio, office, and outdoor sessions.
                            For more information on our safety procedures, visit Studio Covid-19
                            Guidelines.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default MoreInfo;
