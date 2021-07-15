import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

function PhotoCardSection(props) {
    SwiperCore.use([Navigation]);

    const [thumb, setThumb] = useState("");

    const handleThumb = (event) => {
        setThumb(event.target.src);
    };

    //Checking weither selected category is "All"

    let image_category = [];
    if (props.title === "All") {
        image_category = props.allImages;
    } else {
        image_category = props.imageList;
    }

    //Assigning a new initial thumbnail each time the user selects a new section
    let initial_thumb = image_category[0];
    useEffect(() => {
        setThumb(`${process.env.PUBLIC_URL + initial_thumb}`);
    }, [initial_thumb]);

    const images_listed = image_category.map((item, index) => (
        <SwiperSlide tag="li" key={index}>
            <div className="services__card-image">
                <img onClick={handleThumb} src={process.env.PUBLIC_URL + item} alt="client card" />
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="services__slider-container container">
            <h3 className="hidden">{props.title}</h3>
            <div className="swiper-column-container">
                <Swiper
                    tag="div"
                    wrapperTag="ul"
                    slidesPerView={2}
                    slidesPerColumn={2}
                    spaceBetween={15}
                    navigation={{ prevEl: "#prev", nextEl: "#next" }}
                    grabCursor={true}
                >
                    {images_listed}
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
            <div className="services__thumb-image">
                <img src={thumb} alt="" />
            </div>
        </div>
    );
}

export default PhotoCardSection;
