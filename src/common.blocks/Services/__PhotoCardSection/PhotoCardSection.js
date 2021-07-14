import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

function PhotoCardSection(props) {
    SwiperCore.use([Navigation, Thumbs]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = props.imageList.map((item, index) => (
        <SwiperSlide tag="li" key={index}>
            <img
                className="services__card-image"
                src={process.env.PUBLIC_URL + item}
                alt="client card"
            />
        </SwiperSlide>
    ));

    return (
        <div className="services__slider-container container">
            <div className="swiper-column-container">
                <Swiper
                    tag="div"
                    wrapperTag="ul"
                    slidesPerView={2}
                    slidesPerColumn={2}
                    spaceBetween={15}
                    navigation={{ prevEl: "#prev", nextEl: "#next" }}
                    grabCursor={true}
                    id="thumbs"
                    onSwiper={setThumbsSwiper}
                >
                    {images}
                </Swiper>
                <div className="services__slider-buttons">
                    <button id="prev">
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/arrow_copy_11284.png"}
                            alt="Back"
                        />
                    </button>
                    <button id="next">
                        <img
                            src={process.env.PUBLIC_URL + "/img/ui/arrow_copy_2_11285.png"}
                            alt="Forward"
                        />
                    </button>
                </div>
            </div>
            <Swiper
                tag="div"
                wrapperTag="ul"
                className="swiper-thumb"
                slidesPerView={1}
                thumbs={{ swiper: thumbsSwiper }}
            >
                {images}
            </Swiper>
        </div>
    );
}

export default PhotoCardSection;
