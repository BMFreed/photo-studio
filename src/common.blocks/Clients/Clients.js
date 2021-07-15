import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

function Clients(props) {
    SwiperCore.use([Pagination, Autoplay]);
    
    let data = props.data.clients;
    const client = data.map((item, index) => (
        <SwiperSlide tag="li" key={index}>
            <div className="clients__card">
                <div className="clients__photo">
                    <img
                        src={process.env.PUBLIC_URL + item.photo}
                        alt={item.name}
                    />
                </div>
                <div className="clients__name-and-rating">
                    <p className="clients__name margin-reset">{item.name}</p>
                    <div className="clients__rating">
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"}
                            alt="star"
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"}
                            alt="star"
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"}
                            alt="star"
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"}
                            alt="star"
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"}
                            alt="star"
                        />
                    </div>
                </div>
                <div className="clients__quote-container">
                    <p className="clients__quote margin-reset">{item.quote}</p>
                    <img
                        className="clients__quotation-mark"
                        src={process.env.PUBLIC_URL + "/img/ui/quotes_10925.png"}
                        alt=""
                    />
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <section className="clients">
            <div className="clients__container container">
                <h2 className="clients__header header-secondary margin-reset">Clients love us</h2>
                <p className="clients__header-caption margin-reset">
                    We have formed true friendships.
                </p>
            </div>
            <div className="container">
                <Swiper
                    tag="div"
                    wrapperTag="ul"
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={44}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: true,
                    }}>
                    {client}
                </Swiper>
            </div>
        </section>
    );
}

export default Clients;
