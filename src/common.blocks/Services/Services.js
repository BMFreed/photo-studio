import PhotoCard from './__PhotoCard/PhotoCard'

function Services(props) {
    const service = [
        "All",
        "Modeling",
        "Acting",
        "Corporate",
        "Business",
        "Professional",
        "Group",
        "Company",
        "Office"
    ]
    const service_list = service.map(
        ((item, index) => 
            <li className="services__menu-item" key={index}>
                <button className="services__menu-btn" disabled>{item}</button>
            </li>
        )
    )
    
    return (
        <section className="services">
            <div className="services__container container">
                <h2 className="services__header header-secondary margin-reset">Our professional services</h2>
                <ul className="services__select-type u-list">{service_list}</ul>
                <div className="services__main-content">
                    <section className="services__cards">
                        <ul className="services__card-list u-list">
                            <PhotoCard img={"/img/services/company/img_11789.jpg"}/>
                            <PhotoCard img={"/img/services/company/img_11790.jpg"}/>
                            <PhotoCard img={"/img/services/company/img_11794.jpg"}/>
                            <PhotoCard img={"/img/services/company/img_11796.jpg"}/>
                        </ul>
                        <div className="services__buttons">
                            <button className="services__button" disabled>
                                <img src={process.env.PUBLIC_URL + "/img/ui/arrow_copy_11284.png"} alt="Back" />
                            </button>
                            <button className="services__button">
                                <img src={process.env.PUBLIC_URL + "/img/ui/arrow_copy_2_11285.png"} alt="Forward" />
                            </button>
                        </div>
                    </section>
                    <section className="services__card-active">
                        <img src={process.env.PUBLIC_URL + "/img/services/company/img_11789.jpg"} alt="Forward" />
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Services;