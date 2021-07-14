import PhotoCardSection from "./__PhotoCardSection/PhotoCardSection";

function Services(props) {
    const service = props.data.services;

    const service_type_list = service.map((item, index) => (
        <li className="services__menu-item" key={index}>
            <button className="services__menu-btn" disabled>
                {item.name}
            </button>
        </li>
    ));

    const photo_card_section = service.map((item, index) => (
        <PhotoCardSection key={index} title={item.name} imageList={item.imageList} />
    ));

    return (
        <section className="services" id="services">
            <div className="services__container container">
                <h2 className="services__header header-secondary margin-reset">
                    Our professional services
                </h2>
                <ul className="services__select-type u-list">{service_type_list}</ul>
            </div>
            {photo_card_section}
        </section>
    );
}

export default Services;
