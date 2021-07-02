function Entry(props) {
    return (
        <a href="#blog">
            <li>
                <figure>
                    <img src={props.img} alt="" />
                    <figcaption>{props.title}</figcaption>
                </figure>
                <div>
                    <span>{props.com} comments</span>
                    <time datetime={props.datetime}></time>
                </div>
            </li>
        </a>
    )
}

export default Entry;