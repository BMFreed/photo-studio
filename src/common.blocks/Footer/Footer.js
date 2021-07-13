function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__main-content">
                    <section className="footer__company-logo">
                        <span className="header-cursive">Studio</span>
                    </section>
                    <section className="footer__links">
                        <h3 className="footer__section-title margin-reset">Links</h3>
                        <ul className="footer__links-list u-list">
                            <li>
                                <a className="link" href="##">
                                    Individuals
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    Companies
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    The Studio
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__resources">
                        <h3 className="footer__section-title margin-reset">Resources</h3>
                        <ul className="footer__resources-list">
                            <li>
                                <a className="link" href="##">
                                    Lorem ipsum dolor sit amet, consectetur adipis.
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    Donec nisi enim, finibus non malesuada vitae.
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    Nulla eget fringilla libero, ut ultricies neque.
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    Morbi id aliquet sem. Ut mattis diam sit amet.
                                </a>
                            </li>
                            <li>
                                <a className="link" href="##">
                                    Curabitur eu efficitur quam. Fusce interdum sem.
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__address">
                        <h3 className="footer__section-title margin-reset">Studio Inc</h3>
                        <p>
                            125 Southern Way
                            <br />
                            EH23 1SZ
                            <br />
                            North Middleton, UK
                            <br />
                        </p>
                    </section>
                    <section className="footer__contact">
                        <h3 className="footer__section-title margin-reset">Contact</h3>
                        <p className="margin-reset">
                            <a className="footer__contact-link link" href="tel:1233453781">
                                (123) 345 3781
                            </a>
                            <a
                                className="footer__contact-link link"
                                href="mailto:smile@studio-inc.com">
                                smile@studio-inc.com
                            </a>
                        </p>
                    </section>
                    <section className="footer__sm">
                        <ul className="footer__sm-list u-list">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                            <li>Google Rating</li>
                            <li>Yelp</li>
                        </ul>
                    </section>
                </div>
                <section className="footer__add-content">
                    <span className="footer__copyright">© 2020. All rights reserved.</span>
                    <a className="footer__policy link" href="##">
                        Privacy Policy
                    </a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
