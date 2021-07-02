function Entry(props) {
    return (
        <a href="/#">
            <li>
                <figure>
                    <img src={process.env.PUBLIC_URL + props.image} alt="" />
                    <figcaption>{props.title}</figcaption>
                </figure>
                <div>
                    <span>{props.comments} comments</span>
                    <time dateTime={props.datetime}>{props.date_text}</time>
                </div>
            </li>
        </a>
    )
}

export default Entry;