import { useSpring, animated } from "react-spring";

function Entry(props) {
    const animation = useSpring({
        from: { opacity: 0, transform: "scale(0.9)" },
        to: { opacity: 1, transform: "scale(1)" },
        config: { duration: 300 },
    });

    return (
        <animated.li className="blog__entry" style={animation}>
            <a className="link" href="##">
                <img src={process.env.PUBLIC_URL + props.image} alt="" />
                <div className="blog__entry-text">
                    <h3 className="blog__entry-title margin-reset">{props.title}</h3>
                    <div className="blog__entry-bottom-data">
                        <div className="blog__entry-comments">
                            <img
                                src={process.env.PUBLIC_URL + "/img/ui/comm_icon_11004.png"}
                                alt=""
                            />
                            <span>{props.comments} comments</span>
                        </div>
                        <time dateTime={props.datetime}>{props.date_text}</time>
                    </div>
                </div>
            </a>
        </animated.li>
    );
}

export default Entry;
