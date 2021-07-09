function Entry(props) {
    return (
        <li className="blog__entry">
            <a className="link" href="##">
                <img src={process.env.PUBLIC_URL + props.image} alt="" />
                <div className="blog__entry-text">
                    <h3 className="blog__entry-title margin-reset">{props.title}</h3>
                    <div className="blog__entry-bottom-data">
                        <div className="blog__entry-comments">
                            <img src={process.env.PUBLIC_URL + "/img/ui/comm_icon_11004.png"} alt="" />
                            <span>{props.comments} comments</span>
                        </div>
                        <time dateTime={props.datetime}>{props.date_text}</time>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default Entry;