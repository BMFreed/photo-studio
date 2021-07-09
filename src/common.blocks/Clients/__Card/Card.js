function Card(props) {
    return (
        <li className="clients__card">
            <img className="clients__photo" src={process.env.PUBLIC_URL + props.photo} alt={props.name} />
            <div className="clients__name-and-rating">
                <p className="clients__name margin-reset">{props.name}</p>
                <div className="clients__rating">
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                </div>
            </div>
            <div className="clients__quote-container">
                <p className="clients__quote margin-reset">{props.quote}</p>
                <img 
                    className="clients__quotation-mark"
                    src={process.env.PUBLIC_URL + "/img/ui/quotes_10925.png"} alt="" 
                />
            </div>
        </li>
    )
}

export default Card;