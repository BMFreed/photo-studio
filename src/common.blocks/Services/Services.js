import PhotoCard from './__PhotoCard/PhotoCard'

function Services() {
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
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>
                    <PhotoCard/>
                </ul>
                <button disabled><img src="" alt="Back" /></button>
                <button><img src="" alt="Forward" /></button>
            </section>
            <section>
                <img src="" alt="Active" />
            </section>
        </section>
    )
}

export default Services;