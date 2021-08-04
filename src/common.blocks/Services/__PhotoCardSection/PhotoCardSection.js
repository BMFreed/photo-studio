import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useSpring, animated } from "react-spring";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

function PhotoCardSection(props) {
    const [thumb, setThumb] = useState("");

    SwiperCore.use([Navigation]);

    //This is a mouse hover listener. The animation won't trigger if the user doesn't hover his mouse over the images.
    const [toggle, setToggle] = useState(false);

    const thumb_animation = useSpring({
        from: { opacity: 0.8 },
        to: { opacity: 1 },
        config: { duration: 300 },
        reset: toggle ? true : false,
    });

    const handleThumb = (event) => {
        setThumb(`${process.env.PUBLIC_URL + event.currentTarget.id}`);
        setToggle(true);
    };

    //Checking weither selected category is "All"

    let image_list = [];
    if (props.title === "All") {
        image_list = props.allImages;
    } else {
        image_list = props.imageList;
    }

    //Assigning a new initial thumbnail each time the user selects a new section
    let initial_thumb = image_list[0];
    useEffect(() => {
        setThumb(`${process.env.PUBLIC_URL + initial_thumb}`);
    }, [initial_thumb]);

    const images_listed = image_list.map((item, index) => (
        <SwiperSlide tag="li" key={index}>
            <figure id={item} onClick={handleThumb} className="services__card">
                <img src={process.env.PUBLIC_URL + item} alt="client card" />
                <div className="services__card-info-container">
                    <figcaption className="services__card-info">
                        <h4 className="services__card-category button margin-reset">
                            {/* Getting the category name from the image URL */}

                            {item.split("services/")[1].split("/")[0]}
                        </h4>
                        <a href="##" className="services__card-link link">
                            <span>Check Service</span>
                            <img
                                src={process.env.PUBLIC_URL + "/img/ui/arrow_10880.png"}
                                alt="check"
                            />
                        </a>
                    </figcaption>
                    <div className="services__card-overlay"></div>
                </div>
            </figure>
        </SwiperSlide>
    ));

    return (
        <animated.div
            onMouseLeave={() => setToggle(false)}
            style={props.sectionAnimation}
            className="services__slider-container container"
        >
            <h3 className="hidden">{props.title}</h3>
            <div className="swiper-column-container">
                <Swiper
                    tag="div"
                    wrapperTag="ul"
                    slidesPerView={2}
                    slidesPerColumn={1}
                    spaceBetween={15}
                    navigation={{ prevEl: "#prev", nextEl: "#next" }}
                    grabCursor={true}
                    breakpoints={{
                        "641": {
                            "slidesPerView": 4,
                            "slidesPerColumn" : 1
                        },
                        "961": {
                            "slidesPerView": 5,
                            "slidesPerColumn" : 1
                        },
                        "1601": {
                            "slidesPerColumn" : 2,
                            "slidesPerView": 2
                        }
                    }}
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
            <animated.div className="services__thumb-image" style={thumb_animation}>
                <img src={thumb} alt="Thumbnail" />
            </animated.div>
        </animated.div>
    );
}

export default PhotoCardSection;
