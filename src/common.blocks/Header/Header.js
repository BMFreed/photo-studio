import { useState, useEffect, useRef } from "react";

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const [openLinks, setOpenLinks] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const navRef = useRef(null);
    const linksRef = useRef(null);
    const hamburgerIcon = process.env.PUBLIC_URL + "/img/ui/menu.png";
    const closeIcon = process.env.PUBLIC_URL + "/img/ui/close.png";


    //Now we will tell React to monitor the screen width and set the behaviour of the menus accordingly.
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        if (width <= 1100) {
            if (openNav) {
                navRef.current.style.transform = "translateY(0px)";
            }
            else {
                navRef.current.style.transform = "translateY(-280px)";
            }
            if (openLinks) {
                linksRef.current.style.transform = "translateY(0px)";
            } else {
                linksRef.current.style.transform = "translateY(-280px)";
            }
        } else {
            navRef.current.style.transform = "translateY(0px)";
            linksRef.current.style.transform = "translateY(0px)";
            setOpenNav(false);
            setOpenLinks(false);
            //This is done so that all the menus close when entering desktop mode.
        }

        return () => window.removeEventListener("resize", handleResize);
    }, [width, openNav, openLinks]);

    const handleOpenNav = () => {
        if(!openNav) {
            setOpenNav(true);
            setOpenLinks(false);
        }
        else if (openNav) {
            setOpenNav(false);
        }
    };

    const handleOpenLinks = () => {
        if (!openLinks) {
            setOpenLinks(true);
            setOpenNav(false);
        } else if (openLinks) {
            setOpenLinks(false);
        }
    };

    return (
        <header className="header">
            <nav className="header__container container">
                <div className="header__left-content">
                    <button
                        className="header__burger-menu header__mobile-menu"
                        onClick={handleOpenNav}
                    >
                        <img src={openNav ? closeIcon : hamburgerIcon} alt="" />
                    </button>
                    <h1 className="header__title header-cursive margin-reset">
                        <a className="link" href="index.html">
                            Studio
                        </a>
                    </h1>
                    <ul className="header__section-list u-list" ref={navRef}>
                        <li>
                            <a
                                className="link"
                                href="#Individual Sessions"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                Individuals
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="#Group Sessions"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                Companies
                            </a>
                        </li>
                        <li>
                            <a
                                className="link"
                                href="#services"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                The Studio
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#about" onClick={() => setOpenNav(!openNav)}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className="link" href="#blog" onClick={() => setOpenNav(!openNav)}>
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header__right-content">
                    <a className="header__btn button link" href="#modal">
                        Book Now
                    </a>
                    <button className="header__mobile-menu header__links" onClick={handleOpenLinks}>
                        Links
                    </button>
                    <ul className="header__sm-list u-list" ref={linksRef}>
                        <li onClick={() => setOpenLinks(!openLinks)}>
                            <a href="#modal" className="link header__sm-link">
                                <span>Facebook</span>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/fb_11189.png"}
                                    alt="Facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#modal"
                                className="link header__sm-link"
                                onClick={() => setOpenLinks(!openLinks)}
                            >
                                <span>Instagram</span>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/in_11190.png"}
                                    alt="Instagram"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#modal"
                                className="link header__sm-link"
                                onClick={() => setOpenLinks(!openLinks)}
                            >
                                <span>LinkedIn</span>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/li_11191.png"}
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#modal"
                                className="link header__sm-link"
                                onClick={() => setOpenLinks(!openLinks)}
                            >
                                <span>Yelp</span>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/yp_11192.png"}
                                    alt="Yelp"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#modal"
                                className="link header__sm-link"
                                onClick={() => setOpenLinks(!openLinks)}
                            >
                                <span>Google</span>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/img/social_media/ggle_11193.png"
                                    }
                                    alt="Google"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
