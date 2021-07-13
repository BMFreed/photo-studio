function Header() {
    return (
        <header className='header'>
            <nav className='header__container container'>
                <div className='header__left-content'>
                    <h1 className='header__title header-cursive margin-reset'>
                        <a className='link' href='index.html'>
                            Studio
                        </a>
                    </h1>
                    <ul className='header__section-list u-list'>
                        <li>
                            <a className='link' href='#Individual Sessions'>
                                Individuals
                            </a>
                        </li>
                        <li>
                            <a className='link' href='#Group Sessions'>
                                Companies
                            </a>
                        </li>
                        <li>
                            <a className='link' href='#services'>
                                The Studio
                            </a>
                        </li>
                        <li>
                            <a className='link' href='#about'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a className='link' href='#blog'>
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='header__right-content'>
                    <a className='header__btn button link' href='##'>
                        Book Now
                    </a>
                    <ul className='header__sm-list u-list'>
                        <li>
                            <a href='##'>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/fb_11189.png"}
                                    alt='Facebook'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='##'>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/in_11190.png"}
                                    alt='Instagram'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='##'>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/li_11191.png"}
                                    alt='LinkedIn'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='##'>
                                <img
                                    src={process.env.PUBLIC_URL + "/img/social_media/yp_11192.png"}
                                    alt='Yelp'
                                />
                            </a>
                        </li>
                        <li>
                            <a href='##'>
                                <img
                                    src={
                                        process.env.PUBLIC_URL + "/img/social_media/ggle_11193.png"
                                    }
                                    alt='Google'
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
