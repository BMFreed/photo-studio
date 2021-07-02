function Header () {
    return (
        <header className="header">
            <nav>
                <h1><a href="index.html">Studio</a></h1>
                <ul>
                    <li><a href="#1">Individuals</a></li>
                    <li><a href="#1">Companies</a></li>
                    <li><a href="#1">The Studio</a></li>
                    <li><a href="#1">About Us</a></li>
                    <li><a href="#1">Blog</a></li>
                </ul>
                <a href="/#">Book Now</a>
                <ul>
                    <li>
                        <a href="/#">
                            <img src={process.env.PUBLIC_URL + "/img/social_media/fb_11189.png"} alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <img src={process.env.PUBLIC_URL + "/img/social_media/in_11190.png"} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <img src={process.env.PUBLIC_URL + "/img/social_media/li_11191.png"} alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="/#">
                            <img src={process.env.PUBLIC_URL + "/img/social_media/yp_11192.png"} alt="Yelp" />
                        </a>
                    </li>
                    <li>
                        <a href="/#"><img src={process.env.PUBLIC_URL + "/img/social_media/ggle_11193.png"} alt="Google" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;