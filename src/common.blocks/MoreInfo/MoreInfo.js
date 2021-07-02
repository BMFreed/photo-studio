function MoreInfo () {
    return (
        <section>
            <h2>Additional information</h2>
            <div>
                <section>
                    <h3>Why are headshots important?</h3>
                    <p>It may not seem indispensable, but lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi enim, finibus non malesuada vitae, porttitor vitae enim. Nulla eget fringilla libero, ut ultricies neque. Morbi id aliquet sem. Ut mattis diam sit amet orci faucibus dignissim. Aliquam erat volutpat. Curabitur eu efficitur quam.</p>
                </section>
                <section>
                    <h3>5 Useful Tips</h3>
                    <ul>
                        <li>
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/img/tips/camera_icon_11827.png"} alt="Tip" />
                                <figcaption>Go professional, it’s worth it, because cheap looks cheap.</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/img/tips/mirror_icon_11822.png"} alt="Tip" />
                                <figcaption>Make sure it looks like you, not like you want to be.</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/img/tips/eyes_icon_11817.png"} alt="Tip" />
                                <figcaption>It’s all about the eyes and what’s behind them.</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/img/tips/studio_icon_11812.png"} alt="Tip" />
                                <figcaption>Control framing, lighting &amp; background.</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={process.env.PUBLIC_URL + "/img/tips/tshirt_icon_11807.png"} alt="Tip" />
                                <figcaption>Stay chill with clothing &amp; makeup, you must be you.</figcaption>
                            </figure>
                        </li>
                    </ul>
                </section>
            </div>
            <section>
                <h3>Professional Headshot Services</h3>
                <p>Studio Inc is maecenas vulputate, sem at auctor vulputate, elit nunc sagittis ligula, vitae pulvinar metus elit in ante. Aenean tincidunt erat ac ante placerat facilisis. Fusce sed ligula tortor. Quisque non dignissim erat. Vestibulum ante ipsum primis in faucibus.</p>
                <p>Covid-19 Update: We are open for studio, office, and outdoor sessions. For more information on our safety procedures, visit Studio Covid-19 Guidelines.</p>
            </section>
        </section>
    )
}

export default MoreInfo;