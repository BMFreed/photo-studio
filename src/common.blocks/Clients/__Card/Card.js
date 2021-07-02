function Card(props) {
    return (
        <li>
            <figure>
                <img src={process.env.PUBLIC_URL + props.photo} alt={props.name} />
                <figcaption>{props.name}</figcaption>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                    <img src={process.env.PUBLIC_URL + "/img/ui/star_icon_10922.png"} alt="star" />
                </div>
            </figure>
            <q>{props.quote}</q>
        </li>
    )
}

export default Card;