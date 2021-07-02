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
        ((item, index) => <li key={index}>{item}</li>)
    )
    
    return (
        <section>
            <h2>Our professional services</h2>
            <ul>{service_list}</ul>
            <section>
                <ul>
                    <PhotoCard img={"/img/services/company/img_11789.jpg"}/>
                    <PhotoCard img={"/img/services/company/img_11790.jpg"}/>
                    <PhotoCard img={"/img/services/company/img_11794.jpg"}/>
                    <PhotoCard img={"/img/services/company/img_11796.jpg"}/>
                </ul>
                <button disabled><img src={process.env.PUBLIC_URL + "/img/ui/arrow_copy_11284.png"} alt="Back" /></button>
                <button><img src={process.env.PUBLIC_URL + "/img/ui/arrow_copy_2_11285.png"} alt="Forward" /></button>
            </section>
            <section>
                <img src={process.env.PUBLIC_URL + "/img/services/company/img_11789.jpg"} alt="Forward" />
            </section>
        </section>
    )
}

export default Services;