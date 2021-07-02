function Card(props) {
    return (
        <li>
            <figure>
                <img src={props.photo} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>
            <q>{props.quote}</q>
        </li>
    )
}

export default Card;