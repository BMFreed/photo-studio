function PhotoCard (props) {
    return (
        <li>
            <figure className="services__card">
            <img className="services__card-image" src={process.env.PUBLIC_URL + props.img} alt="client card" />
                <figcaption className="services__card-info">
                    <h3>Company</h3>
                    <div>
                        <p>Check Service</p>
                        <img src="" alt="check" />
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}

export default PhotoCard;